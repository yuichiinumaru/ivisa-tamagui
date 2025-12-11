import {
  styled,
  YStack,
  XStack,
  GetProps,
  Separator,
  Theme,
} from 'tamagui';
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  Children,
  isValidElement,
  cloneElement,
  useId,
} from 'react';
import { GripVertical } from '@tamagui/lucide-icons';

// 1. CONTEXT
// =================================================================================================
interface ResizablePanelGroupContextProps {
  direction: 'horizontal' | 'vertical';
  startDragging: (handleIndex: number, event: React.PointerEvent<HTMLDivElement>) => void;
  adjustPanelSize: (handleIndex: number, delta: number) => void;
  getPanelSize: (panelIndex: number) => number;
  getPanelMinSize: (panelIndex: number) => number;
  isDisabled: boolean;
  panelIds: string[];
}

const ResizablePanelGroupContext = createContext<ResizablePanelGroupContextProps | null>(null);

const useResizablePanelGroup = () => {
  const context = useContext(ResizablePanelGroupContext);
  if (!context) {
    throw new Error('useResizablePanelGroup must be used within a ResizablePanelGroup');
  }
  return context;
};

// 2. RESIZABLE PANEL GROUP
// =================================================================================================
const ResizablePanelGroupFrame = styled(XStack, {
  name: 'ResizablePanelGroup',
  flex: 1,
  width: '100%',
  height: '100%',
  variants: {
    direction: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
    isDisabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      }
    },
    hasError: {
      true: {
        // Theme-based error state
      }
    }
  } as const,
  defaultVariants: {
    direction: 'horizontal',
  },
});

type ResizablePanelGroupProps = GetProps<typeof ResizablePanelGroupFrame> & {
  keyboardStep?: number;
  isLoading?: boolean;
  hasError?: boolean;
};

const ResizablePanelGroup = React.forwardRef<
  React.ElementRef<typeof ResizablePanelGroupFrame>,
  ResizablePanelGroupProps
>(({
  direction = 'horizontal',
  children,
  isDisabled: disabledProp = false,
  isLoading = false,
  hasError = false,
  keyboardStep = 5,
  ...props
}, ref) => {
  const groupRef = useRef<HTMLDivElement>(null);
  const isDisabled = disabledProp || isLoading;

  const childArray = Children.toArray(children);
  const panelIds = Children.map(childArray, (child) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return isValidElement(child) && child.type === ResizablePanel ? useId() : null;
  }).filter(Boolean) as string[];

  const [panelSizes, setPanelSizes] = useState<number[]>(() => {
    const sizes: number[] = [];
    Children.forEach(childArray, (child) => {
      if (isValidElement(child) && child.type === ResizablePanel) {
        sizes.push(child.props.defaultSize || 50);
      }
    });
    return sizes;
  });

  const panelMinSizes = useRef<number[]>([]);
  Children.forEach(childArray, (child) => {
    if (isValidElement(child) && child.type === ResizablePanel) {
      panelMinSizes.current.push(child.props.minSize || 10);
    }
  });


  const adjustPanelSize = useCallback((handleIndex: number, delta: number) => {
    setPanelSizes(prevSizes => {
      const newSizes = [...prevSizes];
      const leftPanelIndex = handleIndex;
      const rightPanelIndex = handleIndex + 1;

      const minLeftSize = panelMinSizes.current[leftPanelIndex];
      const minRightSize = panelMinSizes.current[rightPanelIndex];

      let newLeftSize = newSizes[leftPanelIndex] + delta;
      let newRightSize = newSizes[rightPanelIndex] - delta;

      if (newLeftSize < minLeftSize) {
        newLeftSize = minLeftSize;
        newRightSize = newSizes[leftPanelIndex] + newSizes[rightPanelIndex] - newLeftSize;
      }

      if (newRightSize < minRightSize) {
        newRightSize = minRightSize;
        newLeftSize = newSizes[leftPanelIndex] + newSizes[rightPanelIndex] - newRightSize;
      }

      newSizes[leftPanelIndex] = newLeftSize;
      newSizes[rightPanelIndex] = newRightSize;

      return newSizes;
    });
  }, []);


  const activeHandleIndex = useRef<number | null>(null);
  const dragStartPositions = useRef<{ cursor: number, sizes: number[] } | null>(null);

  const onDragging = useCallback((event: PointerEvent) => {
    if (activeHandleIndex.current === null || !dragStartPositions.current) return;

    const groupElement = groupRef.current;
    if (!groupElement) return;

    const { left, top, width, height } = groupElement.getBoundingClientRect();
    const totalSize = direction === 'horizontal' ? width : height;
    const cursorPosition = direction === 'horizontal' ? event.clientX - left : event.clientY - top;

    const delta = cursorPosition - dragStartPositions.current.cursor;
    const deltaPercent = (delta / totalSize) * 100;

    const initialSizes = dragStartPositions.current.sizes;
    const newSizes = [...initialSizes];
    const leftPanelIndex = activeHandleIndex.current;
    const rightPanelIndex = activeHandleIndex.current + 1;

    const minLeftSize = panelMinSizes.current[leftPanelIndex];
    const minRightSize = panelMinSizes.current[rightPanelIndex];

    let newLeftSize = newSizes[leftPanelIndex] + deltaPercent;
    let newRightSize = newSizes[rightPanelIndex] - deltaPercent;

    if (newLeftSize < minLeftSize) {
      newLeftSize = minLeftSize;
      newRightSize = initialSizes[leftPanelIndex] + initialSizes[rightPanelIndex] - newLeftSize;
    }

    if (newRightSize < minRightSize) {
      newRightSize = minRightSize;
      newLeftSize = initialSizes[leftPanelIndex] + initialSizes[rightPanelIndex] - newRightSize;
    }

    setPanelSizes([
        ...newSizes.slice(0, leftPanelIndex),
        newLeftSize,
        newRightSize,
        ...newSizes.slice(rightPanelIndex + 1),
      ]);

  }, [direction]);

  const stopDragging = useCallback(() => {
    activeHandleIndex.current = null;
    dragStartPositions.current = null;
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
    window.removeEventListener('pointermove', onDragging);
    window.removeEventListener('pointerup', stopDragging);
  }, [onDragging]);

  const startDragging = useCallback((handleIndex: number, event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    activeHandleIndex.current = handleIndex;

    const groupElement = groupRef.current;
    if (!groupElement) return;
    const { left, top } = groupElement.getBoundingClientRect();
    const cursorPosition = direction === 'horizontal' ? event.clientX - left : event.clientY - top;

    dragStartPositions.current = {
      cursor: cursorPosition,
      sizes: [...panelSizes]
    };

    document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';
    window.addEventListener('pointermove', onDragging);
    window.addEventListener('pointerup', stopDragging);
  }, [direction, panelSizes, onDragging, stopDragging]);

  const handleKeyDown = (handleIndex: number, event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.isDefaultPrevented()) return;

    const { key } = event;
    const isHorizontal = direction === 'horizontal';

    const moveLeft = isHorizontal && key === 'ArrowLeft';
    const moveRight = isHorizontal && key === 'ArrowRight';
    const moveUp = !isHorizontal && key === 'ArrowUp';
    const moveDown = !isHorizontal && key === 'ArrowDown';

    if (moveLeft || moveUp) {
      event.preventDefault();
      adjustPanelSize(handleIndex, -keyboardStep);
    } else if (moveRight || moveDown) {
      event.preventDefault();
      adjustPanelSize(handleIndex, keyboardStep);
    } else if (key === 'Home') {
        event.preventDefault();
        const minSize = panelMinSizes.current[handleIndex];
        const currentSize = panelSizes[handleIndex];
        adjustPanelSize(handleIndex, minSize - currentSize);
    } else if (key === 'End') {
        event.preventDefault();
        const minSize = panelMinSizes.current[handleIndex + 1];
        const currentSize = panelSizes[handleIndex + 1];
        adjustPanelSize(handleIndex, currentSize - minSize);
    }
  };


  let panelIndex = 0;
  let handleIndex = 0;

  const contextValue = {
    direction,
    startDragging,
    adjustPanelSize: handleKeyDown,
    getPanelSize: (index: number) => panelSizes[index],
    getPanelMinSize: (index: number) => panelMinSizes.current[index],
    isDisabled,
    panelIds,
  };


  const content = (
    <ResizablePanelGroupFrame
      ref={groupRef}
      direction={direction}
      isDisabled={isDisabled}
      hasError={hasError}
      {...props}
    >
      {Children.map(childArray, (child) => {
        if (isValidElement(child)) {
          if (child.type === ResizablePanel) {
            const index = panelIndex++;
            return cloneElement(child as React.ReactElement<any>, {
              id: panelIds[index],
              size: panelSizes[index],
            });
          }
          if (child.type === ResizableHandle) {
            const index = handleIndex++;
            return cloneElement(child as React.ReactElement<any>, {
              handleIndex: index,
            });
          }
        }
        return child;
      })}
    </ResizablePanelGroupFrame>
  );

  return (
    <ResizablePanelGroupContext.Provider value={contextValue}>
      {hasError ? <Theme name="red">{content}</Theme> : content}
    </ResizablePanelGroupContext.Provider>
  );
});
ResizablePanelGroup.displayName = 'ResizablePanelGroup';

// 3. RESIZABLE PANEL
// =================================================================================================
const ResizablePanelFrame = styled(YStack, {
  name: 'ResizablePanel',
});

type ResizablePanelProps = GetProps<typeof ResizablePanelFrame> & {
  defaultSize?: number;
  size?: number;
  minSize?: number;
  id?: string;
};

const ResizablePanel = React.forwardRef<
  React.ElementRef<typeof ResizablePanelFrame>,
  ResizablePanelProps
>(({ children, size, ...props }, ref) => {
  return (
    <ResizablePanelFrame ref={ref} flexBasis={`${size}%`} {...props}>
      {children}
    </ResizablePanelFrame>
  );
});
ResizablePanel.displayName = 'ResizablePanel';

// 4. RESIZABLE HANDLE
// =================================================================================================
const ResizableHandleFrame = styled(YStack, {
    name: 'ResizableHandle',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    outline: 0,
    focusStyle: {
      outlineColor: '$focusRing',
      outlineWidth: 2,
      outlineStyle: 'solid',
    },
    variants: {
        direction: {
            vertical: {
                height: '$3',
                width: '100%',
                cursor: 'row-resize',
            },
            horizontal: {
                width: '$3',
                height: '100%',
                cursor: 'col-resize',
            },
        }
    } as const,
});

const ResizableHandleIndicator = styled(Separator, {
    variants: {
        direction: {
            vertical: {
                width: '100%',
                height: 1,
            },
            horizontal: {
                height: '100%',
                width: 1,
            }
        }
    } as const
})

type ResizableHandleProps = GetProps<typeof ResizableHandleFrame> & {
  withHandle?: boolean;
  handleIndex?: number;
};

const ResizableHandle = React.forwardRef<
  React.ElementRef<typeof ResizableHandleFrame>,
  ResizableHandleProps
>(({ withHandle, handleIndex, ...props }, ref) => {
  const {
    direction,
    startDragging,
    adjustPanelSize,
    getPanelSize,
    getPanelMinSize,
    isDisabled,
    panelIds,
  } = useResizablePanelGroup();

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (handleIndex !== undefined) {
      startDragging(handleIndex, event);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (handleIndex !== undefined) {
        adjustPanelSize(handleIndex, event);
    }
  };

  const leftPanelIndex = handleIndex ?? 0;
  const rightPanelIndex = (handleIndex ?? 0) + 1;
  const valueNow = getPanelSize(leftPanelIndex);
  const minSize = getPanelMinSize(leftPanelIndex);
  const totalSize = getPanelSize(leftPanelIndex) + getPanelSize(rightPanelIndex);
  const maxSize = totalSize - getPanelMinSize(rightPanelIndex);

  return (
    <ResizableHandleFrame
      ref={ref}
      direction={direction}
      onPointerDown={isDisabled ? undefined : onPointerDown}
      onKeyDown={isDisabled ? undefined : onKeyDown}
      {...props}
      aria-disabled={isDisabled}
      role="separator"
      tabIndex={isDisabled ? -1 : 0}
      aria-valuenow={valueNow}
      aria-valuemin={minSize}
      aria-valuemax={maxSize}
      aria-controls={panelIds[leftPanelIndex]}
    >
        <ResizableHandleIndicator direction={direction} />
      {withHandle && (
        <YStack
            position="absolute"
            padding="$1.5"
            borderRadius="$10"
            backgroundColor="$background"
            borderWidth={1}
            borderColor="$borderColor"
        >
          <GripVertical size={16} color="$color" aria-label="Arrastar para redimensionar" />
        </YStack>
      )}
    </ResizableHandleFrame>
  );
});
ResizableHandle.displayName = 'ResizableHandle';


export {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle,
}

export type {
    ResizablePanelGroupProps,
    ResizablePanelProps,
    ResizableHandleProps,
}
