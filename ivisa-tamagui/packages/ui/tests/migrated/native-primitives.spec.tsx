import renderer from 'react-test-renderer'

import { AppProviders } from '../../src/providers/AppProviders'
import { Button } from '../../src/atoms/Button/Button'
import { Stack } from '../../src/atoms/Stack'
import { Heading, TypographyText } from '../../src/atoms/Typography'

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
