import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Sheet, SheetTrigger, SheetContent } from './Sheet'
import { AppProviders } from '../providers/AppProviders'
import { Button } from '../atoms/Button'
import { Text } from 'tamagui'

describe('Sheet', () => {
    it('renders without crashing', () => {
        render(
            <AppProviders>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button>Open</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <Text>Content</Text>
                    </SheetContent>
                </Sheet>
            </AppProviders>
        )
    })
})
