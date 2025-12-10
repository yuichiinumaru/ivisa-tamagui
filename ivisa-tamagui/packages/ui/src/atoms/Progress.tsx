import { Progress as TamaguiProgress, styled, GetProps, Label, Text, YStack } from 'tamagui';
import React from 'react';

// --- STYLED COMPONENTS ---

const ProgressFrame = styled(TamaguiProgress, {
    name: 'Progress',
    height: '$4',
    marginHorizontal: '$true',
    backgroundColor: '$secondary',
    borderRadius: '$10',
    overflow: 'hidden',
    variants: {
        state: {
            indeterminate: {
                animation: 'pulse',
                animationIterationCount: 'infinite',
            },
        },
        size: {
            sm: { height: '$2' },
            md: { height: '$4' },
            lg: { height: '$6' },
        },
    } as const,
});

const StyledIndicator = styled(TamaguiProgress.Indicator, {
    name: 'ProgressIndicator',
    backgroundColor: '$primary',
    height: '100%',
    width: '100%',
    animation: 'quick',
    variants: {
        status: {
            info: { backgroundColor: '$blue9' },
            success: { backgroundColor: '$green9' },
            warning: { backgroundColor: '$yellow9' },
            danger: { backgroundColor: '$red9' },
        },
    } as const,
});

// --- CONTEXT ---

type ProgressContextValue = {
    id: string;
    value?: number;
    size?: 'sm' | 'md' | 'lg';
    status?: 'info' | 'success' | 'warning' | 'danger';
    state?: 'determinate' | 'indeterminate';
    showValue?: boolean;
    'aria-valuetext'?: string;
};

const ProgressContext = React.createContext<ProgressContextValue | null>(null);

const useProgressContext = () => {
    const context = React.useContext(ProgressContext);
    if (!context) {
        throw new Error('Progress sub-components must be used within a <Progress.Root>');
    }
    return context;
};

// --- COMPONENT API ---

export type ProgressRootProps = GetProps<typeof ProgressFrame> & {
    /** The current value of the progress bar. */
    value?: number;
    /** The state of the progress bar. @default "determinate" */
    state?: 'determinate' | 'indeterminate';
    /** The size of the progress bar. @default "md" */
    size?: 'sm' | 'md' | 'lg';
    /** The status of the progress bar, which determines its color. @default "info" */
    status?: 'info' | 'success' | 'warning' | 'danger';
    /** Whether to display the current value as a percentage. @default false */
    showValue?: boolean;
    /** Human-readable text for the current value, for screen readers. */
    'aria-valuetext'?: string;
};

const Root = React.forwardRef<React.ElementRef<typeof ProgressFrame>, ProgressRootProps>(
    ({ value, state = 'determinate', size = 'md', status = 'info', showValue = false, 'aria-valuetext': ariaValueText, children, ...props }, ref) => {
        const id = React.useId();
        const contextValue: ProgressContextValue = { id, value, state, size, status, showValue, 'aria-valuetext': ariaValueText };

        return (
            <ProgressContext.Provider value={contextValue}>
                <YStack>
                    <ProgressFrame
                        ref={ref}
                        id={id}
                        value={value}
                        state={state}
                        size={size}
                        aria-valuenow={value}
                        aria-valuetext={ariaValueText}
                        aria-busy={state === 'indeterminate'}
                        {...props}
                    >
                        {children}
                    </ProgressFrame>
                    {showValue && value && (
                        <Text fontSize={12} color="$gray11" alignSelf="flex-end" marginTop="$1">
                            {value}%
                        </Text>
                    )}
                </YStack>
            </ProgressContext.Provider>
        );
    }
);
Root.displayName = 'Progress.Root';


export type ProgressIndicatorProps = GetProps<typeof StyledIndicator>;

const Indicator = React.forwardRef<React.ElementRef<typeof StyledIndicator>, ProgressIndicatorProps>(
    (props, ref) => {
        const { status } = useProgressContext();
        return <StyledIndicator ref={ref} status={status} {...props} />;
    }
);
Indicator.displayName = 'Progress.Indicator';


export type ProgressLabelProps = GetProps<typeof Label> & {
    children?: React.ReactNode;
};

const ProgressLabel = React.forwardRef<React.ElementRef<typeof Label>, ProgressLabelProps>(
    ({ children, ...props }, ref) => {
        const { id } = useProgressContext();
        return <Label ref={ref} htmlFor={id} {...props}>{children}</Label>;
    }
);
ProgressLabel.displayName = 'Progress.Label';

// --- EXPORT ---

export const Progress = {
    Root,
    Indicator,
    Label: ProgressLabel,
};
