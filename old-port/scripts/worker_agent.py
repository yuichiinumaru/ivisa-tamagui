#!/usr/bin/env python3
"""Individual worker agent for shadcn2tamagui conversion tasks.

This agent focuses on specific aspects like token mapping, 
component specs, or configuration generation.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Dict, List

# Add parent directory to path for logger_utils
sys.path.insert(0, str(Path(__file__).parent))
from logger_utils import get_logger

logger = get_logger("worker-agent", verbose=True)


def generate_component_inventory(workspace: Path) -> Dict:
    """Generate comprehensive component inventory."""
    logger.info("Generating component inventory")
    
    # Parse existing registry using our component_inventory script
    registry_path = Path("reference-repos/ui/apps/v4/registry/new-york-v4/ui/_registry.ts")
    
    if not registry_path.exists():
        logger.warning("Registry not found, creating sample inventory")
        inventory = {
            "components": [
                {"name": "button", "type": "primitive", "priority": "high"},
                {"name": "input", "type": "form", "priority": "high"},
                {"name": "dialog", "type": "overlay", "priority": "medium"},
                {"name": "card", "type": "layout", "priority": "medium"},
                {"name": "alert", "type": "feedback", "priority": "medium"}
            ]
        }
    else:
        from scripts.component_inventory import parse_registry
        records = parse_registry(registry_path)
        
        # Group by priority based on usage
        high_priority = ["button", "input", "text", "heading"]
        medium_priority = ["card", "dialog", "tooltip", "separator"]
        
        inventory = {
            "components": [
                {
                    "name": record.get("name", "unknown"),
                    "type": "ui", 
                    "priority": "high" if record.get("name", "").lower() in high_priority else "medium",
                    "dependencies": record.get("dependencies", []),
                    "files": record.get("files", []),
                    "tailwind": record.get("tailwind", {})
                }
                for record in records
            ]
        }
    
    # Save inventory
    inventory_file = workspace / "component-inventory.json"
    inventory_file.write_text(json.dumps(inventory, indent=2), encoding="utf-8")
    
    return {"status": "success", "components_count": len(inventory["components"])}


def generate_token_mappings(workspace: Path) -> Dict:
    """Generate token mappings from shadcn to Tamagui."""
    logger.info("Generating token mappings")
    
    mapping = {
        "colors": {
            "shadcn_to_tamagui": {
                "background": "$background",
                "foreground": "$color", 
                "primary": "$blue10",
                "secondary": "$gray6",
                "muted": "$gray4",
                "accent": "$blue9",
                "destructive": "$red10",
                "border": "$borderColor",
                "input": "$borderColor",
                "ring": "$blue8"
            }
        },
        "spacing": {
            "shadcn_to_tamagui": {
                "px": "$1",
                "py": "$2", 
                "p-1": "$2",
                "p-2": "$3",
                "p-3": "$4",
                "p-4": "$6",
                "p-6": "$8",
                "p-8": "$10",
                "m-1": "$2",
                "m-2": "$3",
                "m-3": "$4",
                "m-4": "$6"
            }
        },
        "typography": {
            "shadcn_to_tamagui": {
                "text-xs": "$1",
                "text-sm": "$2", 
                "text-base": "$3",
                "text-lg": "$4",
                "text-xl": "$5",
                "text-2xl": "$6",
                "font-mono": "$fontMono",
                "font-semibold": "$fontWeight-semibold"
            }
        },
        "border_radius": {
            "shadcn_to_tamagui": {
                "rounded-sm": "$borderRadius.sm",
                "rounded": "$borderRadius.md", 
                "rounded-md": "$borderRadius.md",
                "rounded-lg": "$borderRadius.lg",
                "rounded-xl": "$borderRadius.xl",
                "rounded-full": "$borderRadius.maxSize"
            }
        }
    }
    
    # Save mappings
    mapping_file = workspace / "token-mappings.json"
    mapping_file.write_text(json.dumps(mapping, indent=2), encoding="utf-8")
    
    return {"status": "success", "mapping_categories": len(mapping)}


def generate_component_specs(workspace: Path) -> Dict:
    """Generate component specifications for top priority components."""
    logger.info("Generating component specifications")
    
    # Read the spec template
    spec_template_path = Path("docs/component-spec-template.md")
    if spec_template_path.exists():
        template = spec_template_path.read_text(encoding="utf-8")
    else:
        template = """# {component_name} Component Spec

## Overview
{description}

## Requirements
{requirements}

## Implementation Notes
{implementation_notes}

## Acceptance Criteria
{acceptance_criteria}
"""
    
    # Generate specs for top components
    components = ["Button", "Input", "Dialog", "Card", "Alert"]
    specs = {}
    
    for component in components:
        spec_content = template.format(
            component_name=component,
            description=f"Tamagui implementation of shadcn {component.lower()} component",
            requirements=f"- API parity with shadcn {component}\n- Cross-platform support\n- Accessibility compliance",
            implementation_notes=f"- Use Tamagui variants for styling\n- Implement proper focus management\n- Ensure touch-friendly interactions",
            acceptance_criteria=f"- Component renders correctly on web and native\n- All variants (size, variant, state) work\n- Screen reader announcements are accurate\n- Touch gesture support is functional"
        )
        
        specs[component] = spec_content
        spec_file = workspace / f"{component}-spec.md"
        spec_file.write_text(spec_content, encoding="utf-8")
    
    return {"status": "success", "specs_count": len(specs)}


def generate_tamagui_config(workspace: Path) -> Dict:
    """Generate Tamagui configuration files."""
    logger.info("Generating Tamagui configuration")
    
    tamagui_config = """import { createTamagui } from '@tamagui/core'
import { createFont } from '@tamagui/font'

const headingFont = createFont({
  family: 'Inter, system-ui, sans-serif',
  size: {
    '$1': 11,
    '$2': 12,
    '$3': 14,
    '$4': 16,
    '$5': 20,
    '$6': 24,
    '$7': 30,
    '$8': 36,
  },
  lineHeight: {
    '$1': 13,
    '$2': 15,
    '$3': 17,
    '$4': 19,
    '$5': 23,
    '$6': 28,
  },
  weight: {
    '$1': '400',
    '$2': '500',
    '$3': '600',
  },
})

const bodyFont = createFont({
  family: 'Inter, system-ui, sans-serif',
  size: {
    '$1': 11,
    '$2': 12,
    '$3': 13,
    '$4': 14,
    '$5': 15,
    '$6': 16,
    '$7': 18,
    '$8': 20,
  },
  lineHeight: {
    '$1': 13,
    '$2': 15,
    '$3': 18,
    '$4': 20,
    '$5': 23,
    '$6': 25,
  },
  weight: {
    '$1': '400',
    '$2': '500',
  },
})

export const tamaguiConfig = createTamagui({
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  tokens: {
    color: {
      background: '#0a0a0a',
      foreground: '#fafafa',
      primary: '#3b82f6',
      primaryHover: '#2563eb',
      secondary: '#64748b',
      secondaryHover: '#475569',
      muted: '#18181b',
      accent: '#22d3ee',
      destructive: '#ef4444',
      borderColor: '#27272a',
      input: '#27272a',
      ring: '#3b82f6',
    },
    radius: {
      '$0': 0,
      '$1': 2,
      '$2': 4,
      '$3': 6,
      '$4': 8,
      '$5': 12,
      '$6': 16,
      '$7': 20,
      '$8': 24,
    },
    size: {
      '$1': 4,
      '$2': 8,
      '$3': 12,
      '$4': 16,
      '$5': 20,
      '$6': 24,
      '$7': 32,
      '$8': 40,
      '$9': 48,
      '$10': 56,
    },
    space: {
      '$0': 0,
      '$1': 4,
      '$2': 8,
      '$3': 12,
      '$4': 16,
      '$5': 20,
      '$6': 24,
      '$7': 32,
      '$8': 40,
      '$9': 48,
      '$10': 56,
      '$11': 64,
      '$12': 72,
    },
  },
  media: {
    sm: { maxWidth: 640 },
    md: { maxWidth: 768 },
    lg: { maxWidth: 1024 },
    xl: { maxWidth: 1280 },
  },
  themes: {
    light: {
      background: '#ffffff',
      foreground: '#0a0a0a',
      primary: '#3b82f6',
      primaryHover: '#2563eb',
      secondary: '#64748b',
      secondaryHover: '#475569',
      muted: '#f4f4f5',
      accent: '#22d3ee',
      destructive: '#ef4444',
      borderColor: '#e4e4e7',
      input: '#e4e4e7',
      ring: '#3b82f6',
    },
  },
})

export type TamaguiConfig = typeof tamaguiConfig
"""
    
    # Save Tamagui config
    config_file = workspace / "tamagui.config.ts"
    config_file.write_text(tamagui_config, encoding="utf-8")
    
    # Create themes file
    themes_content = """export const tokens = {
  dark: {
    background: '#0a0a0a',
    foreground: '#fafafa',
  },
  light: {
    background: '#ffffff', 
    foreground: '#0a0a0a',
  }
}

export const themes = ['light', 'dark'] as const
export type Theme = typeof themes[number]
"""
    
    themes_file = workspace / "themes.ts"
    themes_file.write_text(themes_content, encoding="utf-8")
    
    return {"status": "success", "files_created": 2}


def implement_button_component(workspace: Path) -> Dict:
    """Implement Tamagui Button component."""
    logger.info("Implementing Button component")
    
    button_content = """import React from 'react'
import { Button as TamaguiButton, ButtonProps as TamaguiButtonProps } from 'tamagui'
import { createVar } from '@tamagui/web'
import styled from '@tamagui/styled-components'

// Button variants using Tamagui's variant system
const StyledButton = styled(TamaguiButton, {
  name: 'Button',
  variants: {
    variant: {
      default: {
        backgroundColor: '$primary',
        color: '$background',
        hoverStyle: {
          backgroundColor: '$primaryHover',
        }
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$background',
        hoverStyle: {
          backgroundColor: '$secondaryHover',
        }
      },
      destructive: {
        backgroundColor: '$destructive',
        color: '$background',
        hoverStyle: {
          opacity: 0.9,
        }
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '$borderColor',
        color: '$foreground',
        hoverStyle: {
          backgroundColor: '$muted',
        }
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$foreground',
        hoverStyle: {
          backgroundColor: '$muted',
        }
      }
    },
    size: {
      sm: {
        height: '$5',
        px: '$3',
        fontSize: '$2'
      },
      default: {
        height: '$10',
        px: '$4',
        fontSize: '$3'
      },
      lg: {
        height: '$12',
        px: '$6',
        fontSize: '$4'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

export interface ButtonProps extends Omit<TamaguiButtonProps, 'variant' | 'size'> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
"""
    
    button_file = workspace / "Button.tsx"
    button_file.write_text(button_content, encoding="utf-8")
    
    # Create Button stories
    stories_content = """import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}
"""
    
    stories_file = workspace / "Button.stories.tsx"
    stories_file.write_text(stories_content, encoding="utf-8")
    
    return {"status": "success", "files_created": 2}


def implement_input_component(workspace: Path) -> Dict:
    """Implement Tamagui Input component."""
    logger.info("Implementing Input component")
    
    input_content = """import React from 'react'
import { Input as TamaguiInput, InputProps as TamaguiInputProps } from 'tamagui'
import styled from '@tamagui/styled-components'

const StyledInput = styled(TamaguiInput, {
  name: 'Input',
  variants: {
    variant: {
      default: {
        borderWidth: 1,
        borderColor: '$borderColor',
        backgroundColor: '$background',
        color: '$foreground',
        focusStyle: {
          borderColor: '$ring',
          borderWidth: 2,
        }
      },
      filled: {
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: '$muted',
        color: '$foreground',
        focusStyle: {
          borderColor: '$ring',
          borderWidth: 1,
        }
      }
    },
    size: {
      sm: {
        height: '$8',
        px: '$3',
        fontSize: '$2'
      },
      default: {
        height: '$10',
        px: '$3',
        fontSize: '$3'
      },
      lg: {
        height: '$12',
        px: '$4',
        fontSize: '$4'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

export interface InputProps extends Omit<TamaguiInputProps, 'variant' | 'size'> {
  variant?: 'default' | 'filled'
  size?: 'sm' | 'default' | 'lg'
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <StyledInput
        ref={ref}
        variant={variant}
        size={size}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
"""
    
    input_file = workspace / "Input.tsx"
    input_file.write_text(input_content, encoding="utf-8")
    
    return {"status": "success", "files_created": 1}


def implement_card_component(workspace: Path) -> Dict:
    """Implement Tamagui Card component."""
    logger.info("Implementing Card component")
    
    card_content = """import React from 'react'
import { View, Text } from 'tamagui'
import styled from '@tamagui/styled-components'

const Card = styled(View, {
  name: 'Card',
  backgroundColor: '$background',
 borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$4',
  p: '$4',
  variants: {
    variant: {
      default: {
        backgroundColor: '$background',
      },
      elevated: {
        backgroundColor: '$background',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
      }
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

const CardHeader = styled(View, {
  name: 'CardHeader',
  marginBottom: '$3',
})

const CardTitle = styled(Text, {
  name: 'CardTitle',
  fontSize: '$4',
  fontWeight: '600',
  color: '$foreground',
  marginBottom: '$2',
})

const CardDescription = styled(Text, {
  name: 'CardDescription', 
  fontSize: '$2',
  color: '$muted',
  lineHeight: '$2',
})

const CardContent = styled(View, {
  name: 'CardContent',
})

const CardFooter = styled(View, {
  name: 'CardFooter',
  marginTop: '$4',
  paddingTop: '$4',
  borderTopWidth: 1,
  borderTopColor: '$borderColor',
})

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
export type CardProps = React.ComponentProps<typeof Card>
"""
    
    card_file = workspace / "Card.tsx"
    card_file.write_text(card_content, encoding="utf-8")
    
    return {"status": "success", "files_created": 1}


def implement_dialog_component(workspace: Path) -> Dict:
    """Implement Tamagui Dialog component with portal."""
    logger.info("Implementing Dialog component")
    
    dialog_content = """import React from 'react'
import { View, Text } from 'tamagui'
import { Portal } from '@tamagui/portal'
import styled from '@tamagui/styled-components'

const DialogOverlay = styled(View, {
  name: 'DialogOverlay',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 50,
  variants: {
    open: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
      },
      false: {
        opacity: 0,
        pointerEvents: 'none',
      }
    }
  }
})

const DialogContent = styled(View, {
  name: 'DialogContent',
  backgroundColor: '$background',
  borderRadius: '$6',
  padding: '$6',
  maxWidth: 500,
  width: '90vw',
  maxHeight: '85vh',
  margin: 'auto',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderWidth: 1,
  borderColor: '$borderColor',
  variants: {
    open: {
      true: {
        opacity: 1,
        scale: 1,
      },
      false: {
        opacity: 0,
        scale: 0.95,
      }
    }
  }
})

const DialogHeader = styled(View, {
  name: 'DialogHeader',
  marginBottom: '$4',
})

const DialogTitle = styled(Text, {
  name: 'DialogTitle',
  fontSize: '$5',
  fontWeight: '600',
  color: '$foreground',
  marginBottom: '$2',
})

const DialogDescription = styled(Text, {
  name: 'DialogDescription',
  fontSize: '$3',
  color: '$mutedForeground',
  lineHeight: '$4',
  marginBottom: '$4',
})

const DialogFooter = styled(View, {
  name: 'DialogFooter',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '$3',
  marginTop: '$4',
  paddingTop: '$4',
  borderTopWidth: 1,
  borderTopColor: '$borderColor',
})

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer
}) => {
  return (
    <Portal>
      <DialogOverlay open={open} onClick={() => onOpenChange(false)} />
      <DialogContent open={open}>
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Portal>
  )
}

export { DialogHeader, DialogTitle, DialogDescription, DialogFooter }
"""
    
    dialog_file = workspace / "Dialog.tsx"
    dialog_file.write_text(dialog_content, encoding="utf-8")
    
    return {"status": "success", "files_created": 1}


def implement_alert_component(workspace: Path) -> Dict:
    """Implement Tamagui Alert component."""
    logger.info("Implementing Alert component")
    
    alert_content = """import React from 'react'
import { View, Text } from 'tamagui'
import styled from '@tamagui/styled-components'

const AlertContainer = styled(View, {
  name: 'Alert',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '$4',
  borderRadius: '$4',
  borderWidth: 1,
  variants: {
    variant: {
      default: {
        backgroundColor: '$background',
        borderColor: '$border',
        color: '$foreground',
      },
      destructive: {
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderColor: '$destructive',
        color: '$destructive',
      },
      warning: {
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        borderColor: '$warning',
        color: '$warning',
      },
      success: {
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        borderColor: '$success',
        color: '$success',
      },
      info: {
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderColor: '$info',
        color: '$info',
      }
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

const AlertIcon = styled(View, {
  name: 'AlertIcon',
  marginRight: '$3',
  marginTop: '$1',
  fontSize: '$4',
  flexShrink: 0,
})

const AlertContent = styled(View, {
  name: 'AlertContent',
  flex: 1,
})

const AlertTitle = styled(Text, {
  name: 'AlertTitle',
  fontSize: '$3',
  fontWeight: '500',
  marginBottom: '$1',
  color: 'inherit',
})

const AlertDescription = styled(Text, {
  name: 'AlertDescription',
  fontSize: '$2',
  lineHeight: '$3',
  color: 'inherit',
  opacity: 0.8,
})

interface AlertProps {
  variant?: 'default' | 'destructive' | 'warning' | 'success' | 'info'
  title?: string
  description?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'default',
  title,
  description,
  icon,
  children
}) => {
  return (
    <AlertContainer variant={variant}>
      {icon && <AlertIcon>{icon}</AlertIcon>}
      <AlertContent>
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
        {children}
      </AlertContent>
    </AlertContainer>
  )
}

export const AlertTitle: typeof Text = AlertTitle
export const AlertDescription: typeof Text = AlertDescription
"""
    
    alert_file = workspace / "Alert.tsx"
    alert_file.write_text(alert_content, encoding="utf-8")
    
    return {"status": "success", "files_created": 1}


def implement_checkbox_component(workspace: Path) -> Dict:
    """Implement Tamagui Checkbox component."""
    logger.info("Implementing Checkbox component")
    
    checkbox_content = """import React from 'react'
import { View, Text } from 'tamagui'
import styled from '@tamagui/styled-components'

const CheckboxContainer = styled(View, {
  name: 'CheckboxContainer',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$2',
})

const CheckboxInput = styled(View, {
  name: 'CheckboxInput',
  width: '$4',
  height: '$4',
  borderRadius: '$2',
  borderWidth: 2,
  borderColor: '$borderColor',
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    checked: {
      true: {
        backgroundColor: '$primary',
        borderColor: '$primary',
      },
      false: {
        backgroundColor: 'transparent',
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      }
    }
  }
})

const CheckboxCheckmark = styled(View, {
  name: 'CheckboxCheckmark',
  width: '$2',
  height: '$2',
  backgroundColor: '$background',
  borderRadius: '50%',
  opacity: 0,
  variants: {
    checked: {
      true: {
        opacity: 1,
      }
    }
  }
})

const CheckboxLabel = styled(Text, {
  name: 'CheckboxLabel',
  fontSize: '$3',
  color: '$foreground',
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
      }
    }
  }
})

interface CheckboxProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  id?: string
  children?: React.ReactNode
}

export const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  ({ checked = false, onCheckedChange, disabled = false, id, children }, ref) => {
    return (
      <CheckboxContainer ref={ref}>
        <CheckboxInput
          checked={checked}
          disabled={disabled}
          onClick={() => !disabled && onCheckedChange?.(!checked)}
          role="checkbox"
          aria-checked={checked}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
        >
          <CheckboxCheckmark checked={checked} />
        </CheckboxInput>
        {children && (
          <CheckboxLabel disabled={disabled}>
            {children}
          </CheckboxLabel>
        )}
      </CheckboxContainer>
    )
  }
)

Checkbox.displayName = 'Checkbox'
"""
    
    checkbox_file = workspace / "Checkbox.tsx"
    checkbox_file.write_text(checkbox_content, encoding="utf-8")
    
    return {"status": "success", "files_created": 1}


def implement_badge_component(workspace: Path) -> Dict:
    """Implement Tamagui Badge component."""
    logger.info("Implementing Badge component")
    
    badge_content = """import React from 'react'
import { Text } from 'tamagui'
import styled from '@tamagui/styled-components'

const StyledBadge = styled(Text, {
  name: 'Badge',
  fontSize: '$1',
  fontWeight: '500',
  color: '$background',
  backgroundColor: '$primary',
  paddingHorizontal: '$2',
  paddingVertical: '$1',
  borderRadius: '$maxSize',
  borderWidth: '$0',
  variants: {
    variant: {
      default: {
        backgroundColor: '$primary',
        color: '$background',
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$background',
      },
      destructive: {
        backgroundColor: '$destructive',
        color: '$background',
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '$primary',
        color: '$primary',
      },
      success: {
        backgroundColor: '$success',
        color: '$background',
      },
      warning: {
        backgroundColor: '$warning',
        color: '$background',
      }
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning'
  children: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'default', children }) => {
  return (
    <StyledBadge variant={variant}>
      {children}
    </StyledBadge>
  )
}
"""
    
    badge_file = workspace / "Badge.tsx"
    badge_file.write_text(badge_content, encoding="utf-8")
    
    return {"status": "success", "files_created": 1}


def implement_separator_component(workspace: Path) -> Dict:
    """Implement Tamagui Separator component."""
    logger.info("Implementing Separator component")
    
    separator_content = """import React from 'react'
import { View } from 'tamagui'
import styled from '@tamagui/styled-components'

const StyledSeparator = styled(View, {
  name: 'Separator',
  height: 1,
  backgroundColor: '$borderColor',
  variants: {
    orientation: {
      horizontal: {
        width: '100%',
        height: 1,
      },
      vertical: {
        width: 1,
        height: '100%',
      }
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
}

export const Separator: React.FC<SeparatorProps> = ({ orientation = 'horizontal' }) => {
  return <StyledSeparator orientation={orientation} />
}
"""
    
    separator_file = workspace / "Separator.tsx"
    separator_file.write_text(separator_content, encoding="utf-8")
    
    return {"status": "success", "files_created": 1}


def implement_skeleton_component(workspace: Path) -> Dict:
    """Implement Tamagui Skeleton component."""
    logger.info("Implementing Skeleton component")
    
    skeleton_content = """import React from 'react'
import { View } from 'tamagui'
import styled from '@tamagui/styled-components'

const StyledSkeleton = styled(View, {
  name: 'Skeleton',
  backgroundColor: '$muted',
  borderRadius: '$4',
  variants: {
    variant: {
      text: {
        height: '$3',
        width: '60%',
      },
      circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
      rect: {
        width: '100%',
        height: '$4',
      }
    },
    size: {
      sm: { height: '$2', width: '20%' },
      md: { height: '$3', width: '40%' },
      lg: { height: '$4', width: '60%' },
    },
    animate: {
      true: {
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        animationName: 'pulse',
      }
    }
  },
  defaultVariants: {
    variant: 'rect',
    animate: true
  }
})

interface SkeletonProps {
  variant?: 'text' | 'circle' | 'rect'
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  variant = 'rect', 
  size = 'md', 
  animate = true,
  className 
}) => {
  return <StyledSkeleton variant={variant} size={size} animate={animate} className={className} />
}
"""
    
    skeleton_file = workspace / "Skeleton.tsx"
    skeleton_file.write_text(skeleton_content, encoding="utf-8")
    
    return {"status": "success", "files_created": 1}


def implement_spinner_component(workspace: Path) -> Dict:
    """Implement Tamagui Spinner component."""
    logger.info("Implementing Spinner component")
    
    spinner_content = """import React from 'react'
import { View, Text } from 'tamagui'
import styled from '@tamagui/styled-components'
import { useAnimatedValue } from 'react-native'

const SpinnerContainer = styled(View, {
  name: 'SpinnerContainer', 
  width: 20,
  height: 20,
  justifyContent: 'center',
  alignItems: 'center',
})

const SpinnerDot = styled(View, {
  name: 'SpinnerDot',
  width: '$2',
  height: '$2',
  borderRadius: '50%',
  backgroundColor: '$primary',
  margin: '$1',
  variants: {
    delay: {
      0: { animationDelay: '0ms' },
      1: { animationDelay: '-0.2s' },
      2: { animationDelay: '-0.4s' },
    }
  }
})

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className }) => {
  const sizeMap = { sm: 16, md: 20, lg: 24 }
  const actualSize = sizeMap[size] || sizeMap.md
  
  return (
    <SpinnerContainer style={{ width: actualSize, height: actualSize }}>
      <SpinnerDot delay={0} />
      <SpinnerDot delay={1} />
      <SpinnerDot delay={2} />
    </SpinnerContainer>
  )
}
"""
    
    spinner_file = workspace / "Spinner.tsx"
    spinner_file.write_text(spinner_content, encoding="utf-8")
    
    return {"status": "success", "files_created": 1}


# Additional placeholder implementations for scaling test
def implement_textarea_component(workspace: Path) -> Dict:
    """Placeholder Textarea implementation."""
    content = """import React from 'react'
import { Text } from 'tamagui'
export const Textarea: React.FC<any> = (props) => <Text>{props.children || "Textarea placeholder"}</Text>"""
    (workspace / "Textarea.tsx").write_text(content, encoding="utf-8")
    return {"status": "success", "files_created": 1}

def implement_select_component(workspace: Path) -> Dict:
    """Placeholder Select implementation."""  
    content = """import React from 'react'
import { Text } from 'tamagui'
export const Select: React.FC<any> = (props) => <Text>{props.children || "Select placeholder"}</Text>"""
    (workspace / "Select.tsx").write_text(content, encoding="utf-8")
    return {"status": "success", "files_created": 1}

def implement_switch_component(workspace: Path) -> Dict:
    """Placeholder Switch implementation."""
    content = """import React from 'react'
import { Text } from 'tamagui'
export const Switch: React.FC<any> = (props) => <Text>{props.children || "Switch placeholder"}</Text>"""
    (workspace / "Switch.tsx").write_text(content, encoding="utf-8")
    return {"status": "success", "files_created": 1}

def implement_radio_component(workspace: Path) -> Dict:
    """Placeholder Radio implementation."""
    content = """import React from 'react'
import { Text } from 'tamagui'
export const Radio: React.FC<any> = (props) => <Text>{props.children || "Radio placeholder"}</Text>"""
    (workspace / "Radio.tsx").write_text(content, encoding="utf-8")
    return {"status": "success", "files_created": 1}

def implement_slider_component(workspace: Path) -> Dict:
    """Placeholder Slider implementation."""
    content = """import React from 'react'
import { Text } from 'tamagui'
export const Slider: React.FC<any> = (props) => <Text>{props.children || "Slider placeholder"}</Text>"""
    (workspace / "Slider.tsx").write_text(content, encoding="utf-8")
    return {"status": "success", "files_created": 1}

def implement_tooltip_component(workspace: Path) -> Dict:
    """Placeholder Tooltip implementation."""
    content = """import React from 'react'
import { Text } from 'tamagui'
import { Portal } from '@tamagui/portal'
export const Tooltip: React.FC<any> = (props) => 
  <Portal><Text>{props.children || "Tooltip"}</Text></Portal>"""
    (workspace / "Tooltip.tsx").write_text(content, encoding="utf-8")
    return {"status": "success", "files_created": 1}

def implement_popover_component(workspace: Path) -> Dict:
    """Placeholder Popover implementation."""
    content = """import React from 'react'
import { Text } from 'tamagui'
import { Portal } from '@tamagui/portal'
export const Popover: React.FC<any> = (props) => 
  <Portal><Text>{props.children || "Popover"}</Text></Portal>"""
    (workspace / "Popover.tsx").write_text(content, encoding="utf-8")
    return {"status": "success", "files_created": 1}

def implement_dropdown_component(workspace: Path) -> Dict:
    """Placeholder Dropdown implementation."""
    content = """import React from 'react'
import { Text } from 'tamagui'
import { Portal } from '@tamagui/portal'
export const Dropdown: React.FC<any> = (props) => 
  <Portal><Text>{props.children || "Dropdown"}</Text></Portal>"""
    (workspace / "Dropdown.tsx").write_text(content, encoding="utf-8")
    return {"status": "success", "files_created": 1}

def implement_table_component(workspace: Path) -> Dict:
    """Placeholder Table implementation."""
    content = """import React from 'react'
import { View, Text } from 'tamagui'
export const Table: React.FC<any> = (props) => 
  <View><Text>{props.children || "Table"}</Text></View>"""
    (workspace / "Table.tsx").write_text(content, encoding="utf-8")
    return {"status": "success", "files_created": 1}

def implement_tabs_component(workspace: Path) -> Dict:
    """Placeholder Tabs implementation."""
    content = """import React from 'react'
import { View, Text } from 'tamagui'
export const Tabs: React.FC<any> = (props) => 
  <View><Text>{props.children || "Tabs"}</Text></View>"""
    (workspace / "Tabs.tsx").write_text(content, encoding="utf-8")
    return {"status": "success", "files_created": 1}

def implement_accordion_component(workspace: Path) -> Dict:
    """Placeholder Accordion implementation."""
    content = """import React from 'react'
import { View, Text } from 'tamagui'
export const Accordion: React.FC<any> = (props) => 
  <View><Text>{props.children || "Accordion"}</Text></View>"""
    (workspace / "Accordion.tsx").write_text(content, encoding="utf-8")
    return {"status": "success", "files_created": 1}


def main(task_type: str, workspace: Path) -> int:
    """Execute worker agent task."""
    
    logger.info(f"Worker agent starting: {task_type}")
    
    try:
        if task_type == "inventory":
            result = generate_component_inventory(workspace)
        elif task_type == "token-mapping":
            result = generate_token_mappings(workspace)
        elif task_type == "specs":
            result = generate_component_specs(workspace)
        elif task_type == "tamagui-config":
            result = generate_tamagui_config(workspace)
        elif task_type == "primitives":
            result = implement_button_component(workspace)
        elif task_type == "button":
            result = implement_button_component(workspace)
        elif task_type == "input":
            result = implement_input_component(workspace)
        elif task_type == "card":
            result = implement_card_component(workspace)
        elif task_type == "dialog":
            result = implement_dialog_component(workspace)
        elif task_type == "alert":
            result = implement_alert_component(workspace)
        elif task_type == "checkbox":
            result = implement_checkbox_component(workspace)
        elif task_type == "badge":
            result = implement_badge_component(workspace)
        elif task_type == "separator":
            result = implement_separator_component(workspace)
        elif task_type == "skeleton":
            result = implement_skeleton_component(workspace)
        elif task_type == "spinner":
            result = implement_spinner_component(workspace)
        elif task_type == "textarea":
            result = implement_textarea_component(workspace)
        elif task_type == "select":
            result = implement_select_component(workspace)
        elif task_type == "switch":
            result = implement_switch_component(workspace)
        elif task_type == "radio":
            result = implement_radio_component(workspace)
        elif task_type == "slider":
            result = implement_slider_component(workspace)
        elif task_type == "tooltip":
            result = implement_tooltip_component(workspace)
        elif task_type == "popover":
            result = implement_popover_component(workspace)
        elif task_type == "dropdown":
            result = implement_dropdown_component(workspace)
        elif task_type == "table":
            result = implement_table_component(workspace)
        elif task_type == "tabs":
            result = implement_tabs_component(workspace)
        elif task_type == "accordion":
            result = implement_accordion_component(workspace)
        elif task_type == "portal-setup":
            # Portal provider setup
            portal_content = """// Portal provider setup for Tamagui
import { PortalProvider } from '@tamagui/portal'
import {TamaguiProvider} from '@tamagui/core'
import { tamaguiConfig } from './tamagui.config'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <PortalProvider>
        {children}
      </PortalProvider>
    </TamaguiProvider>
  )
}
"""
            portal_file = workspace / "Providers.tsx"
            portal_file.write_text(portal_content, encoding="utf-8")
            result = {"status": "success"}
        else:
            logger.error(f"Unknown task type: {task_type}")
            return 1
            
        logger.info(f"Task {task_type} completed: {result['status']}")
        return 0
        
    except Exception as exc:
        logger.error(f"Task {task_type} failed: {exc}")
        return 1


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: worker_agent.py <task_type> <workspace_path>")
        sys.exit(1)
    
    task_type = sys.argv[1]
    workspace = Path(sys.argv[2])
    workspace.mkdir(parents=True, exist_ok=True)
    
    sys.exit(main(task_type, workspace))
