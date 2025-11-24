.
├── infrastructure
│   ├── consolidate_migration.py
│   ├── deployment-report.json
│   ├── final_consolidate.py
│   ├── parallel_agents.py
│   ├── scaled_orchestrator.py
│   └── worker_agent.py
├── node_modules
│   ├── jsdom -> .pnpm/jsdom@24.1.3/node_modules/jsdom
│   ├── next -> .pnpm/next@14.2.33_@babel+core@7.28.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next
│   ├── react -> .pnpm/react@18.3.1/node_modules/react
│   ├── react-dom -> .pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom
│   ├── react-native-web -> .pnpm/react-native-web@0.19.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web
│   ├── react-test-renderer -> .pnpm/react-test-renderer@18.3.1_react@18.3.1/node_modules/react-test-renderer
│   ├── @storybook
│   │   └── react -> ../.pnpm/@storybook+react@7.6.20_react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@5.9.3/node_modules/@storybook/react
│   ├── @tamagui
│   │   ├── core -> ../.pnpm/@tamagui+core@1.137.0_react-dom@18.3.1_react@18.3.1__react-native@0.82.1_@babel+core@7._e70437e00ab05e0d38e285597bddc660/node_modules/@tamagui/core
│   │   ├── lucide-icons -> ../.pnpm/@tamagui+lucide-icons@1.137.0_react-dom@18.3.1_react@18.3.1__react-native-svg@15.15.0_r_1afc421521f20099e8e184eb3202fc4a/node_modules/@tamagui/lucide-icons
│   │   ├── portal -> ../.pnpm/@tamagui+portal@1.137.0_react-dom@18.3.1_react@18.3.1__react-native@0.82.1_@babel+core@_4f1d0f9a7283cddba1bf850c28cb4850/node_modules/@tamagui/portal
│   │   ├── radio-group -> ../.pnpm/@tamagui+radio-group@1.137.0_react-dom@18.3.1_react@18.3.1__react-native@0.82.1_@babel+_cf485287dedbe62dac7086298248ed0c/node_modules/@tamagui/radio-group
│   │   └── vite-plugin -> ../.pnpm/@tamagui+vite-plugin@1.137.0_react-dom@18.3.1_react@18.3.1__react-native@0.82.1_@babel+_150c776d8e72e0c5cb17099117f79eb8/node_modules/@tamagui/vite-plugin
│   ├── tamagui -> .pnpm/tamagui@1.137.0_react-dom@18.3.1_react@18.3.1__react-native@0.82.1_@babel+core@7.28.5_@_9f261ecde3e233534f42c70a79523a29/node_modules/tamagui
│   ├── @testing-library
│   │   ├── jest-dom -> ../.pnpm/@testing-library+jest-dom@6.9.1/node_modules/@testing-library/jest-dom
│   │   ├── react -> ../.pnpm/@testing-library+react@14.3.1_@types+react@18.3.26_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@testing-library/react
│   │   └── react-native -> ../.pnpm/@testing-library+react-native@13.3.3_react-native@0.82.1_@babel+core@7.28.5_@types+reac_03e21823afa1bde9df4b29f8e14a65ee/node_modules/@testing-library/react-native
│   ├── @types
│   │   └── react -> ../.pnpm/@types+react@18.3.26/node_modules/@types/react
│   ├── typescript -> .pnpm/typescript@5.9.3/node_modules/typescript
│   ├── vite -> .pnpm/vite@7.2.2_@types+node@24.10.1_terser@5.44.1_yaml@2.8.1/node_modules/vite
│   ├── @vitejs
│   │   └── plugin-react-swc -> ../.pnpm/@vitejs+plugin-react-swc@4.2.2_vite@7.2.2_@types+node@24.10.1_terser@5.44.1_yaml@2.8.1_/node_modules/@vitejs/plugin-react-swc
│   └── vitest -> .pnpm/vitest@1.6.1_@types+node@24.10.1_jsdom@24.1.3_terser@5.44.1/node_modules/vitest
├── package.json
├── pnpm-lock.yaml
├── README.md
├── src
│   ├── components
│   │   ├── ComponentErrorBoundary.tsx
│   │   ├── data-display
│   │   │   ├── Accordion.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Separator.tsx
│   │   │   └── Table.tsx
│   │   ├── feedback
│   │   │   ├── Alert.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   └── Spinner.tsx
│   │   ├── forms
│   │   │   ├── Checkbox.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Radio.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Slider.tsx
│   │   │   ├── Switch.tsx
│   │   │   └── Textarea.tsx
│   │   ├── navigation
│   │   │   └── Tabs.tsx
│   │   ├── overlays
│   │   │   ├── Dialog.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Popover.tsx
│   │   │   └── Tooltip.tsx
│   │   ├── primitives
│   │   │   ├── Button.tsx
│   │   │   └── Stack.tsx
│   │   ├── typography
│   │   │   └── Typography.tsx
│   │   └── ui
│   ├── gallery
│   │   ├── components-map.ts
│   │   ├── FlowDemos.tsx
│   │   └── TamaguiGallery.tsx
│   ├── index.ts
│   ├── providers.tsx
│   ├── tamagui.config.ts
│   ├── themes.ts
│   └── utils
│       ├── logging.ts
│       └── withErrorLogging.tsx
├── tests
│   ├── config.test.ts
│   ├── native
│   │   ├── Popover.spec.tsx
│   │   └── Select.spec.tsx
│   ├── native-primitives.spec.tsx
│   ├── providers.spec.tsx
│   ├── __snapshots__
│   │   ├── button.spec.tsx.snap
│   │   ├── native-primitives.spec.tsx.snap
│   │   ├── select.spec.tsx.snap
│   │   ├── stack.spec.tsx.snap
│   │   ├── textarea.spec.tsx.snap
│   │   └── typography.spec.tsx.snap
│   ├── Tooltip.spec.tsx
│   └── web
│       ├── button.spec.tsx
│       ├── Button.spec.tsx
│       ├── forms
│       │   ├── __snapshots__
│       │   │   └── textarea.spec.tsx.snap
│       │   └── textarea.spec.tsx
│       ├── gallery.spec.tsx
│       ├── Radio.spec.tsx
│       ├── select.spec.tsx
│       ├── __snapshots__
│       │   ├── stack.spec.tsx.snap
│       │   └── typography.spec.tsx.snap
│       ├── stack.spec.tsx
│       └── typography.spec.tsx
├── tree.md
├── tsconfig.json
├── vite.config.mts
└── vitest.setup.ts

48 directories, 69 files
