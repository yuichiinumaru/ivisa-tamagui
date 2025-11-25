import { render } from '../utils/render-native';
import { Button } from '../../src/components/primitives/Button';

describe('Button (Native)', () => {
  it('renders default variant', () => {
    const { toJSON } = render(<Button>Default</Button>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders secondary variant', () => {
    const { toJSON } = render(<Button variant="secondary">Secondary</Button>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders destructive variant', () => {
    const { toJSON } = render(<Button variant="destructive">Destructive</Button>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders outline variant', () => {
    const { toJSON } = render(<Button variant="outline">Outline</Button>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders ghost variant', () => {
    const { toJSON } = render(<Button variant="ghost">Ghost</Button>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders small size', () => {
    const { toJSON } = render(<Button size="sm">Small</Button>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders large size', () => {
    const { toJSON } = render(<Button size="lg">Large</Button>);
    expect(toJSON()).toMatchSnapshot();
  });
});
