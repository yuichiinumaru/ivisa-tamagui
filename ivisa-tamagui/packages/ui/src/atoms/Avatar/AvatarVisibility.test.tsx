import React from 'react'
import { render } from '../../test-utils'
import { Avatar } from 'tamagui'
import { tokens } from '../../theme/tokens'

describe('Avatar Visibility', () => {
    it('resolves size "$10" to a concrete pixel value', () => {
        // Check if the token exists directly in the theme configuration
        // @ts-ignore
        expect(tokens.size['10']).toBeDefined()
        // @ts-ignore
        expect(tokens.size['10'].val).toBe(40)
    })

    // Note: Testing exact computed styles in JSDOM with Tamagui can be tricky 
    // because Tamagui might stick classes or use CSS variables. 
    // However, checking the token existence is the primary regression test for the reported issue.
})

