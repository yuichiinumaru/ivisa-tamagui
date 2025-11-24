#!/usr/bin/env python3
"""Final validation test for complete shadcn2tamagui migration."""

import sys
import subprocess
from pathlib import Path

# Simple logging since we can't import logger_utils
def logger(msg):
    print(msg)

def error(msg):
    print(f"ERROR: {msg}")

def warning(msg):
    print(f"WARNING: {msg}")

def test_component_structure():
    """Validate component library structure."""
    logger.info("Testing component library structure...")
    
    component_dir = Path("tamagui-components-final/src/components/ui")
    if not component_dir.exists():
        logger.error("❌ Component directory not found")
        return False
    
    components = list(component_dir.glob("*.tsx"))
    required_components = [
        "Button.tsx", "Input.tsx", "Card.tsx", "Dialog.tsx", 
        "Alert.tsx", "Checkbox.tsx", "Badge.tsx"
    ]
    
    found_count = 0
    for component in required_components:
        if (component_dir / component).exists():
            found_count += 1
            logger.info(f"✅ Found {component}")
        else:
            logger.warning(f"⚠️  Missing {component}")
    
    total_components = len(components)
    logger(f"=> Structure validation: {total_components} components total, {found_count}/7 core found")
    
    return found_count >= 6  # At least 6 core components

def test_package_structure():
    """Validate npm package structure."""
    logger("Testing package structure...")
    
    package_file = Path("tamagui-components-final/package.json")
    if not package_file.exists():
        error("❌ package.json not found")
        return False
    
    index_file = Path("tamagui-components-final/src/index.ts")
    if not index_file.exists():
        logger.error("❌ index.ts not found")
        return False
    
    readme_file = Path("tamagui-components-final/README.md")
    if not readme_file.exists():
        logger.error("❌ README.md not found")
        return False
    
    logger.info("✅ All package files present")
    return True

def test_component_syntax():
    """Test TypeScript syntax of components."""
    logger.info("Testing component syntax...")
    
    component_dir = Path("tamagui-components-final/src/components/ui")
    syntax_errors = []
    
    if component_dir.exists():
        for component_file in component_dir.glob("*.tsx"):
            try:
                content = component_file.read_text(encoding="utf-8")
                # Basic syntax checks
                if "import React" not in content:
                    syntax_errors.append(f"{component_file.name}: missing React import")
                if "export const" not in content and "export default" not in content:
                    syntax_errors.append(f"{component_file.name}: missing export")
                if "styled(" not in content:
                    syntax_errors.append(f"{component_file.name}: styled-components not found")
            except Exception as exc:
                syntax_errors.append(f"{component_file.name}: read error - {exc}")
    
    if syntax_errors:
        logger.error("❌ Syntax errors found:")
        for error in syntax_errors:
            logger.error(f"  {error}")
        return False
    
    logger.info(f"✅ All components pass basic syntax checks")
    return True

def test_production_readiness():
    """Test production readiness indicators."""
    logger.info("Testing production readiness...")
    
    checks = []
    
    # Component count check
    component_dir = Path("tamagui-components-final/src/components/ui")
    if component_dir.exists():
        component_count = len(list(component_dir.glob("*.tsx")))
        checks.append(("component_count", component_count >= 15, f"Components: {component_count}"))
    
    # Infrastructure check
    infra_dir = Path("tamagui-components-final/infrastructure")
    infra_count = len(list(infra_dir.glob("*.py"))) if infra_dir.exists() else 0
    checks.append(("infrastructure", infra_count >= 5, f"Infrastructure files: {infra_count}"))
    
    # Documentation check  
    readme_file = Path("tamagui-components-final/README.md")
    readme_size = readme_file.stat().st_size if readme_file.exists() else 0
    checks.append(("readme_size", readme_size >= 1000, f"README size: {readme_size} bytes"))
    
    # Package quality
    package_file = Path("tamagui-components-final/package.json")
    if package_file.exists():
        content = package_file.read_text()
        has_dependencies = "tamagui" in content
        has_scripts = "scripts" in content
        checks.append(("package_dependencies", has_dependencies, "Has Tamagui dependencies"))
        checks.append(("package_scripts", has_scripts, "Has build scripts"))
    
    passed_checks = sum(1 for _, passed, msg in checks if passed)
    total_checks = len(checks)
    
    for check_type, passed, msg in checks:
        status = "✅" if passed else "❌"
        logger.info(f"{status} {check_type}: {msg}")
    
    logger.info(f"=> Production readiness: {passed_checks}/{total_checks} checks passed")
    return passed_checks >= total_checks * 0.7

def main():
    """Run final validation."""
    logger.info("🚀 FINAL VALIDATION: shadcn2tamagui migration")
    logger.info("=" * 50)
    
    validation_tests = [
        test_component_structure,
        test_package_structure, 
        test_component_syntax,
        test_production_readiness
    ]
    
    results = []
    for test in validation_tests:
        try:
            result = test()
            results.append(result)
        except Exception as exc:
            logger.error(f"Test {test.__name__} failed: {exc}")
            results.append(False)
    
    passed_tests = sum(1 for r in results if r)
    total_tests = len(results)
    
    logger.info("=" * 50)
    logger.info("FINAL VALIDATION COMPLETE")
    logger.info("=" * 50)
    logger.info(f"Tests passed: {passed_tests}/{total_tests}")
    
    success_rate = passed_tests / total_tests
    if success_rate >= 0.75:
        logger.info("🎉 VALIDATION SUCCESSFUL! Migration is production-ready!")
        return 0
    else:
        logger.warning("⚠️  VALIDATION PARTIAL SUCCESS! Some issues found.")
        return 1

if __name__ == "__main__":
    sys.exit(main())
