// uno.config.ts
import { defineConfig } from 'unocss';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import presetWind from '@unocss/preset-wind';

export default defineConfig({
	shortcuts: [{ logo: 'i-logos:svelte-icon w-7em h-7em transform transition-300' }],
	presets: [presetWind(), presetIcons(), presetUno()]
	// safelist: ['bg-orange-300'],
});
