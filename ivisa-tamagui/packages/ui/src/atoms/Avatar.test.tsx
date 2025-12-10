import { render, screen } from '../test-utils';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders image', () => {
    render(<Avatar src="https://github.com/shadcn.png" fallback="CN" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://github.com/shadcn.png');
  });

  it('renders fallback', () => {
    render(<Avatar fallback="CN" />);
    expect(screen.getByText('CN')).toBeInTheDocument();
  });
import { render, screen } from '../../src/test-utils';
import { Avatar } from './Avatar';

describe('Avatar', () => {
    it('renders image', () => {
        render(
            <Avatar>
                <Avatar.Image src="https://github.com/ivisa.png" accessibilityLabel="ivisa" />
                <Avatar.Fallback>AV</Avatar.Fallback>
            </Avatar>
        );

        const image = screen.getByAltText('ivisa');
        expect(image).toBeInTheDocument();
    });

    it('renders fallback', () => {
        render(
            <Avatar>
                <Avatar.Image src="https://broken.link.png" accessibilityLabel="ivisa" />
                <Avatar.Fallback>AV</Avatar.Fallback>
            </Avatar>
        );

        const fallback = screen.getByText('AV');
        expect(fallback).toBeInTheDocument();
    });
});
