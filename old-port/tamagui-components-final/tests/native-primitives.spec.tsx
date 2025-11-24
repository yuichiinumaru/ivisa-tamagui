import renderer from 'react-test-renderer'

import { AppProviders } from '../src/providers'
import { Button } from '../src/components/primitives/Button'
import { Stack } from '../src/components/primitives/Stack'
import { Heading, TypographyText } from '../src/components/typography/Typography'

describe('Native snapshot coverage', () => {
  it('renders primitives consistently across native renderer', () => {
    const tree = renderer
      .create(
        <AppProviders>
          <Heading level={3}>Snapshot Heading</Heading>
          <Stack>
            <Button>CTA</Button>
            <TypographyText>Body copy</TypographyText>
          </Stack>
        </AppProviders>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
