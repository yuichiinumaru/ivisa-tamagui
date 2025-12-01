const fs = require('fs-extra');
const path = require('path');

// Configuração
const BASE_URL = "https://ui.shadcn.com/r";
const STYLE = "new-york"; // ou 'default'
const OUTPUT_DIR = "./shadcn-dump";

// Tipos que queremos extrair
const TARGET_TYPES = [
    "registry:ui",      // Componentes
    "registry:block",   // Blocos (Sections)
    "registry:chart",   // Gráficos
    "registry:hook",    // Hooks
    "registry:theme"    // Temas (se disponível no index)
];

async function main() {
    console.log("🔍 Buscando o índice mestre...");

    // 1. Pega a lista completa
    const response = await fetch(`${BASE_URL}/index.json`);
    const index = await response.json();

    // 2. Filtra pelo que queremos
    const items = index.filter(item => TARGET_TYPES.includes(item.type));

    console.log(`📦 Encontrados ${items.length} itens para baixar.`);

    // 3. Itera e baixa (Limitando concorrência para não tomar block)
    for (const item of items) {
        const itemName = item.name;
        const itemType = item.type.replace('registry:', ''); // ex: 'ui', 'block'

        console.log(`⬇️ Baixando [${itemType}] ${itemName}...`);

        try {
            // URL Mágica do detalhe do componente
            const itemUrl = `${BASE_URL}/styles/${STYLE}/${itemName}.json`;
            const itemRes = await fetch(itemUrl);

            if (!itemRes.ok) {
                console.error(`❌ Erro ao baixar ${itemName}: ${itemRes.statusText}`);
                continue;
            }

            const itemData = await itemRes.json();

            // 4. Salva os arquivos
            for (const file of itemData.files) {
                // O path vem algo como "ui/button.tsx" ou "hooks/use-toast.ts"
                // Vamos organizar por tipo no nosso output
                const savePath = path.join(OUTPUT_DIR, itemType, file.path || `${itemName}.tsx`);

                await fs.outputFile(savePath, file.content);
            }

        } catch (error) {
            console.error(`❌ Falha em ${itemName}:`, error.message);
        }

        // Pequeno delay para ser gentil com o servidor da Vercel
        await new Promise(r => setTimeout(r, 100));
    }

    console.log("✅ Extração completa!");
}

main();
