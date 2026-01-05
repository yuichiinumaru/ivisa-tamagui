
import config from './packages/ui/src/tamagui.config.ts';

console.log('Available Theme Keys:', Object.keys(config.themes));
console.log('Claro theme defined?', !!config.themes.claro);
console.log('Escuro theme defined?', !!config.themes.escuro);
