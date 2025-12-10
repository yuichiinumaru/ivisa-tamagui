import { render, screen } from '@testing-library/react';
import { Progress } from './Progress';
import React from 'react';

describe('Progress', () => {
    it('renders the progress bar with the correct default values', () => {
        render(
            <Progress.Root value={50}>
                <Progress.Indicator />
            </Progress.Root>
        );
        const progress = screen.getByRole('progressbar');
        expect(progress).toBeInTheDocument();
        expect(progress).toHaveAttribute('aria-valuenow', '50');
    });

    it('renders with the correct size variant', () => {
        render(
            <Progress.Root value={50} size="lg">
                <Progress.Indicator />
            </Progress.Root>
        );
        const progress = screen.getByRole('progressbar');
        expect(progress).toHaveStyle({ height: 'var(--space-6)' });
    });

    it('renders with the correct status variant', () => {
        render(
            <Progress.Root value={50} status="success">
                <Progress.Indicator />
            </Progress.Root>
        );
        const indicator = container.firstChild.firstChild;
        expect(indicator).toHaveStyle({ backgroundColor: 'var(--colors-green9)' });
    });

    it('displays the value text when showValue is true', () => {
        render(
            <Progress.Root value={60} showValue>
                <Progress.Indicator />
            </Progress.Root>
        );
        expect(screen.getByText('60%')).toBeInTheDocument();
    });

    it('sets the correct aria attributes for accessibility', () => {
        render(
            <Progress.Root value={70} aria-valuetext="70 tasks complete">
                <Progress.Indicator />
            </Progress.Root>
        );
        const progress = screen.getByRole('progressbar');
        expect(progress).toHaveAttribute('aria-valuenow', '70');
        expect(progress).toHaveAttribute('aria-valuetext', '70 tasks complete');
    });

    it('sets aria-busy to true when in indeterminate state', () => {
        render(
            <Progress.Root state="indeterminate">
                <Progress.Indicator />
            </Progress.Root>
        );
        const progress = screen.getByRole('progressbar');
        expect(progress).toHaveAttribute('aria-busy', 'true');
    });

    it('renders a label and associates it with the progress bar', () => {
        render(
            <Progress.Root value={80}>
                <Progress.Label>Loading...</Progress.Label>
                <Progress.Indicator />
            </Progress.Root>
        );
        const progress = screen.getByRole('progressbar');
        const label = screen.getByText('Loading...');
        expect(label).toBeInTheDocument();
        expect(progress).toHaveAttribute('aria-labelledby', label.id);
    });
});
