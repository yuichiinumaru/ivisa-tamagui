import unittest
import os
from convert_component import convert_component_source

class TestConvertComponent(unittest.TestCase):
    def setUp(self):
        # Sample input: A simplified version of a reference component (e.g., LmStarRating)
        self.sample_input = """
import { H3, XStack, YStack, styled } from 'tamagui'
import { Star } from '@tamagui/lucide-icons'

type LmStarRatingProps = {
  rating: number
  maxRating?: number
  onRatingChange?: (rating: number) => void
}

export function LmStarRating({ rating, maxRating = 5, onRatingChange }: LmStarRatingProps) {
  return (
    <XStack space>
      {[...Array(maxRating)].map((_, i) => (
        <Star
          key={i}
          size="$4"
          fill={i < rating ? '$yellow10' : 'transparent'}
          color={i < rating ? '$yellow10' : '$gray10'}
          onPress={() => onRatingChange?.(i + 1)}
        />
      ))}
    </XStack>
  )
}
"""

    def test_basic_conversion_structure(self):
        """
        Tests that the conversion script transforms the component to follow the project's structure:
        - Removes 'Lm' prefix from component name.
        - Adds 'forwardRef' (standard practice in this repo).
        - Ensures imports are adapted (if necessary).
        """
        converted_code = convert_component_source(self.sample_input, "StarRating")

        # Check for Component Name Change
        self.assertIn("export const StarRating = forwardRef", converted_code)

        # Check for forwardRef import
        self.assertIn("import { forwardRef } from 'react'", converted_code)

        # Check that the original logic is preserved (checking a snippet)
        self.assertIn("[...Array(maxRating)].map", converted_code)

        # Check that 'LmStarRatingProps' is renamed to 'StarRatingProps' or similar generic props
        self.assertIn("StarRatingProps", converted_code)

    def test_real_file_conversion_input(self):
        """
        Tests conversion simulating sushi/Input.tsx which uses Composition pattern.
        """
        # Minimal reproduction of Input.tsx structure
        source_code = """
import React, { ComponentType, ForwardedRef } from 'react';
import { styled, Input as TamaguiInput } from 'tamagui'

type InputProps = ComponentProps<typeof TamaguiInput>

const BaseInput = React.forwardRef((props: InputProps, ref: ForwardedRef<TextInput>): JSX.Element => {
    return <TamaguiInput ref={ref} {...props} />
})

const UnframedInput = styled(TamaguiInput, {})

export const Input = Object.assign(BaseInput, { Field: UnframedInput });
"""
        converted_code = convert_component_source(source_code, "Input")

        # Expect React.forwardRef -> forwardRef and import added
        self.assertRegex(converted_code, r"import React, \{ forwardRef, \s*ComponentType")
        self.assertIn("const BaseInput = forwardRef((props: InputProps", converted_code)
        self.assertIn("export const Input = Object.assign(BaseInput", converted_code)

    def test_lm_alert_dialog_conversion_shadowing(self):
        """
        Tests conversion simulating LmAlertDialog where 'AlertDialog' is imported from tamagui, causing conflict.
        """
        source_code = """
import { ReactNode } from 'react'
import {
  AlertDialog,
  AlertDialogProps,
  YStack,
} from 'tamagui'

export type LmAlertDialogProps = AlertDialogProps & {
  title: string
}

export function LmAlertDialog({
  title,
  ...dialogProps
}: LmAlertDialogProps) {
  return (
    <AlertDialog native {...dialogProps}>
      <AlertDialog.Portal>
         <YStack />
      </AlertDialog.Portal>
    </AlertDialog>
  )
}
"""
        converted_code = convert_component_source(source_code, "AlertDialog")

        # Check alias logic
        self.assertIn("AlertDialog as TamaguiAlertDialog", converted_code)
        self.assertIn("export const AlertDialog = forwardRef", converted_code)

        # Check replacement of usage
        self.assertIn("<TamaguiAlertDialog native", converted_code)
        self.assertIn("<TamaguiAlertDialog.Portal>", converted_code)

if __name__ == '__main__':
    unittest.main()
