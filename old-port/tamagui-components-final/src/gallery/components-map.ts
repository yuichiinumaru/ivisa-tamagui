export type ComponentMetadata = {
  name: string
  status: 'implemented' | 'placeholder' | 'missing'
  description: string
  importPath: string
}

export const componentCatalog: ComponentMetadata[] = [
  {
    name: 'Accordion',
    status: 'implemented',
    description: 'Collapsible sections powered by Tamagui variants',
    importPath: "./components/data-display/Accordion",
  },
  {
    name: 'Alert',
    status: 'implemented',
    description: 'Feedback container with semantic variants',
    importPath: "./components/feedback/Alert",
  },
  {
    name: 'Badge',
    status: 'implemented',
    description: 'Pill-style indicator for statuses',
    importPath: "./components/feedback/Badge",
  },
  {
    name: 'Button',
    status: 'implemented',
    description: 'Primary call-to-action with size and variant support',
    importPath: "./components/primitives/Button",
  },
  {
    name: 'Heading',
    status: 'implemented',
    description: 'Heading component with level + alignment variants',
    importPath: "./components/typography/Typography",
  },
  {
    name: 'TypographyText',
    status: 'implemented',
    description: 'Body text primitive with size and weight options',
    importPath: "./components/typography/Typography",
  },
  {
    name: 'MutedText',
    status: 'implemented',
    description: 'Secondary text color for subdued copy',
    importPath: "./components/typography/Typography",
  },
  {
    name: 'LeadText',
    status: 'implemented',
    description: 'Lead paragraph styling for introductions',
    importPath: "./components/typography/Typography",
  },
  {
    name: 'Blockquote',
    status: 'implemented',
    description: 'Styled quotation block with accent border',
    importPath: "./components/typography/Typography",
  },
  {
    name: 'Card',
    status: 'implemented',
    description: 'Surface container with header/content/footer slots',
    importPath: "./components/data-display/Card",
  },
  {
    name: 'Checkbox',
    status: 'implemented',
    description: 'Checkbox control with accessible states',
    importPath: "./components/forms/Checkbox",
  },
  {
    name: 'Dialog',
    status: 'implemented',
    description: 'Portal-based modal dialog',
    importPath: "./components/overlays/Dialog",
  },
  {
    name: 'Dropdown',
    status: 'placeholder',
    description: 'Placeholder: implement Popover-powered dropdown',
    importPath: "./components/overlays/Dropdown",
  },
  {
    name: 'Input',
    status: 'implemented',
    description: 'Text input with variants and focus ring',
    importPath: "./components/forms/Input",
  },
  {
    name: 'Popover',
    status: 'implemented',
    description: 'Trigger-aligned popover surface',
    importPath: "./components/overlays/Popover",
  },
  {
    name: 'Radio',
    status: 'placeholder',
    description: 'Placeholder: implement Radio group with shared context',
    importPath: "./components/forms/Radio",
  },
  {
    name: 'Select',
    status: 'placeholder',
    description: 'Placeholder: build Portal-driven select menu',
    importPath: "./components/forms/Select",
  },
  {
    name: 'Separator',
    status: 'implemented',
    description: 'Horizontal or vertical separator for grouping content',
    importPath: "./components/data-display/Separator",
  },
  {
    name: 'Skeleton',
    status: 'implemented',
    description: 'Animated loading skeletons in multiple shapes',
    importPath: "./components/feedback/Skeleton",
  },
  {
    name: 'Slider',
    status: 'placeholder',
    description: 'Placeholder: migrate slider track/thumb interactions',
    importPath: "./components/forms/Slider",
  },
  {
    name: 'Spinner',
    status: 'implemented',
    description: 'Spinner indicator with Tamagui animation',
    importPath: "./components/feedback/Spinner",
  },
  {
    name: 'Switch',
    status: 'placeholder',
    description: 'Placeholder: add accessible toggle implementation',
    importPath: "./components/forms/Switch",
  },
  {
    name: 'Stack',
    status: 'implemented',
    description: 'Flexible stack primitive with direction/gap variants',
    importPath: "./components/primitives/Stack",
  },
  {
    name: 'HStack',
    status: 'implemented',
    description: 'Horizontal Stack shortcut for row layouts',
    importPath: "./components/primitives/Stack",
  },
  {
    name: 'VStack',
    status: 'implemented',
    description: 'Vertical Stack shortcut for column layouts',
    importPath: "./components/primitives/Stack",
  },
  {
    name: 'Table',
    status: 'implemented',
    description: 'Table primitives for data presentation',
    importPath: "./components/data-display/Table",
  },
  {
    name: 'Tabs',
    status: 'implemented',
    description: 'Tabs for content switching with keyboard navigation',
    importPath: "./components/navigation/Tabs",
  },
  {
    name: 'Textarea',
    status: 'placeholder',
    description: 'Placeholder: replace with auto-sizing Tamagui textarea',
    importPath: "./components/forms/Textarea",
  },
  {
    name: 'Tooltip',
    status: 'implemented',
    description: 'Tooltip with delay and portal support',
    importPath: "./components/overlays/Tooltip",
  },
]
