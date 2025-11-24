import { Text } from 'react-native';

import { render } from '../utils/render-native';
import { Stack, HStack, VStack } from '../../src/components/primitives/Stack';

describe('Stack (Native)', () => {
  it('renders a vertical stack by default', () => {
    const { toJSON } = render(
      <Stack>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
      </Stack>
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders a horizontal stack', () => {
    const { toJSON } = render(
      <Stack direction="horizontal">
        <Text>Item 1</Text>
        <Text>Item 2</Text>
      </Stack>
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders an HStack', () => {
    const { toJSON } = render(
      <HStack>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
      </HStack>
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders a VStack', () => {
    const { toJSON } = render(
      <VStack>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
      </VStack>
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders with a different gap', () => {
    const { toJSON } = render(
      <Stack gap="lg">
        <Text>Item 1</Text>
        <Text>Item 2</Text>
      </Stack>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
