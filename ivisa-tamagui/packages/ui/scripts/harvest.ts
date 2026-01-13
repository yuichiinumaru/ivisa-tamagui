
import { Project, SyntaxKind, SourceFile, PropertySignature, JSDoc } from "ts-morph";
import * as fs from "fs";
import * as path from "path";
import { z } from "zod";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Schema Definitions ---

export const ComponentPropSchema = z.object({
    name: z.string(),
    type: z.string().describe("TypeScript type definition"),
    required: z.boolean(),
    description: z.string().optional(),
    defaultValue: z.any().optional(),
});

export const ComponentSchema = z.object({
    id: z.string().describe("Unique identifier, e.g., 'atom-button'"),
    name: z.string(),
    type: z.enum(["atom", "molecule", "organism"]),
    description: z.string().describe("JSDoc description or summary"),
    filePath: z.string().describe("Relative path to source file"),
    importPath: z.string().describe("Import path for the component"),
    props: z.array(ComponentPropSchema),
    dependencies: z.array(z.string()).describe("External or internal dependencies"),
    usageExamples: z.array(
        z.object({
            name: z.string(),
            description: z.string().optional(),
            code: z.string(),
        })
    ).describe("Extracted from Storybook stories"),
});

export const RegistrySchema = z.object({
    version: z.string(),
    lastUpdated: z.string(),
    components: z.array(ComponentSchema),
});

export type ComponentRegistry = z.infer<typeof RegistrySchema>;
export type ComponentDef = z.infer<typeof ComponentSchema>;
export type ComponentProp = z.infer<typeof ComponentPropSchema>;

// --- Harvester Logic ---

const PACKAGES_UI_ROOT = path.resolve(__dirname, "..");
const SRC_ROOT = path.join(PACKAGES_UI_ROOT, "src");

// Initialize ts-morph project
const project = new Project({
    tsConfigFilePath: path.join(PACKAGES_UI_ROOT, "tsconfig.json"),
    skipAddingFilesFromTsConfig: true,
});

function getComponentType(dirName: string): "atom" | "molecule" | "organism" {
    if (dirName.includes("atoms")) return "atom";
    if (dirName.includes("molecules")) return "molecule";
    if (dirName.includes("organisms")) return "organism";
    return "atom"; // Default or fallback
}

function extractProps(sourceFile: SourceFile, componentName: string): ComponentProp[] {
    const props: ComponentProp[] = [];

    // Try to find the interface or type alias for props
    // Convention: [ComponentName]Props
    const propsName = `${componentName}Props`;
    const interfaceDecl = sourceFile.getInterface(propsName);
    const typeAliasDecl = sourceFile.getTypeAlias(propsName);

    if (interfaceDecl) {
        interfaceDecl.getProperties().forEach((prop: any) => {
            props.push({
                name: prop.getName(),
                type: prop.getType().getText(),
                required: !prop.hasQuestionToken(),
                description: prop.getJsDocs().map((doc: JSDoc) => doc.getDescription()).join("\n"),
            });
        });
    } else if (typeAliasDecl) {
        // Handle type alias props (simplified)
        const typeNode = typeAliasDecl.getTypeNode();
        if (typeNode && typeNode.isKind(SyntaxKind.TypeLiteral)) {
            typeNode.getMembers().forEach((member: any) => {
                if (member.getKind() === SyntaxKind.PropertySignature) {
                    const prop = member as PropertySignature;
                    props.push({
                        name: prop.getName(),
                        type: prop.getType().getText(),
                        required: !prop.hasQuestionToken(),
                        description: prop.getJsDocs().map((doc: JSDoc) => doc.getDescription()).join("\n")
                    })
                }
            })
        }
    }

    return props;
}

function extractStories(componentName: string, dirPath: string): { name: string, code: string }[] {
    const storiesPath = path.join(dirPath, `${componentName}.stories.tsx`);
    if (!fs.existsSync(storiesPath)) return [];

    const storyFile = project.addSourceFileAtPath(storiesPath);
    const examples: { name: string, code: string }[] = [];

    // Strategy: Look for named exports that are NOT 'default'
    const exports = storyFile.getExportedDeclarations();

    exports.forEach((decls: any[], name: string) => {
        if (name === "default") return;

        // We assume these exports are stories
        const decl = decls[0];
        if (decl) {
            let code = decl.getText();
            // Clean up common boilerplate if needed
            examples.push({ name, code });
        }
    });

    return examples;
}

async function harvest() {
    console.log("🌱 Starting Component Harvest...");
    const components: ComponentDef[] = [];

    // Directories to scan
    const types = ["atoms", "molecules", "organisms"];

    for (const type of types) {
        const typeDir = path.join(SRC_ROOT, type);
        if (!fs.existsSync(typeDir)) continue;

        const entries = fs.readdirSync(typeDir, { withFileTypes: true });

        for (const entry of entries) {
            if (!entry.isDirectory()) continue;

            const componentName = entry.name;
            const componentPath = path.join(typeDir, componentName, `${componentName}.tsx`);

            if (!fs.existsSync(componentPath)) {
                // Try index.tsx? Or just skip
                continue;
            }

            console.log(`Processing ${componentName}...`);

            const sourceFile = project.addSourceFileAtPath(componentPath);

            // Extract JSDoc for the component function
            // Assumption: Component is a named export function or variable
            let description = "";
            const funcDecl = sourceFile.getFunction(componentName);
            const varDecl = sourceFile.getVariableStatement(componentName); // For const Button = ...

            if (funcDecl) {
                description = funcDecl.getJsDocs().map((doc: JSDoc) => doc.getDescription()).join("\n");
            } else if (varDecl) {
                description = varDecl.getJsDocs().map((doc: JSDoc) => doc.getDescription()).join("\n");
            }

            const props = extractProps(sourceFile, componentName);
            const usageExamples = extractStories(componentName, path.join(typeDir, componentName));

            components.push({
                id: `${type}-${componentName.toLowerCase()}`,
                name: componentName,
                type: getComponentType(type),
                description: description || `Component ${componentName}`,
                filePath: `packages/ui/src/${type}/${componentName}/${componentName}.tsx`,
                importPath: `@ivisa/ui`, // Generalized
                props,
                dependencies: [], // TODO: analyze imports
                usageExamples
            });
        }
    }

    const registry = {
        version: "1.0.0",
        lastUpdated: new Date().toISOString(),
        components
    };

    try {
        // Validate schema
        RegistrySchema.parse(registry);

        fs.writeFileSync(
            path.join(PACKAGES_UI_ROOT, "component-registry.json"),
            JSON.stringify(registry, null, 2)
        );
        console.log(`✅ Harvest complete! Wrote ${components.length} components to registry.`);
    } catch (e) {
        console.error("Validation Failed:", e);
    }
}

harvest();
