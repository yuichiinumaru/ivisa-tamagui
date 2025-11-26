import React, { useMemo } from 'react'
import { Button, XStack, Text, GetProps, styled, VisuallyHidden } from 'tamagui'

const PaginationRoot = styled(XStack, {
  name: 'PaginationRoot',
  alignItems: 'center',
  gap: '$2',
})

const PaginationButton = styled(Button, {
  name: 'PaginationButton',
  unstyled: true,
  borderRadius: '$full',
  borderWidth: 1,
  borderColor: '$borderColor',
  minWidth: 40,
  height: '$6',
  paddingHorizontal: '$3',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$foreground',
  backgroundColor: 'transparent',
  hoverStyle: {
    backgroundColor: '$muted',
  },
  pressStyle: {
    backgroundColor: '$muted',
    opacity: 0.85,
  },
  disabledStyle: {
    opacity: 0.4,
    backgroundColor: 'transparent',
  },
  variants: {
    active: {
      true: {
        backgroundColor: '$primary',
        color: '$background',
        borderColor: '$primary',
        hoverStyle: {
          backgroundColor: '$primaryHover',
        },
      },
    },
    size: {
      sm: {
        height: '$5',
        minWidth: 32,
        paddingHorizontal: '$2',
        fontSize: '$2',
      },
      md: {
        height: '$6',
        fontSize: '$3',
      },
      lg: {
        height: '$8',
        fontSize: '$4',
      },
    },
  } as const,
  defaultVariants: {
    size: 'md',
    active: false,
  },
})

const PaginationEllipsis = styled(Text, {
  name: 'PaginationEllipsis',
  color: '$mutedForeground',
  px: '$2',
  fontSize: '$3',
})

type PaginationButtonProps = GetProps<typeof PaginationButton>

const DOTS = 'DOTS' as const

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, index) => start + index)
}

interface PaginationRangeArgs {
  currentPage: number
  totalPages: number
  siblingCount: number
}

const usePaginationRange = ({ currentPage, totalPages, siblingCount }: PaginationRangeArgs) => {
  return useMemo<(number | typeof DOTS)[]>(() => {
    if (totalPages <= 0) return []

    const totalPageNumbers = siblingCount * 2 + 5

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1

    const firstPageIndex = 1
    const lastPageIndex = totalPages

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)
      return [...leftRange, DOTS, totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(totalPages - rightItemCount + 1, totalPages)
      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }

    return range(1, totalPages)
  }, [currentPage, siblingCount, totalPages])
}

export interface IvisaPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange?: (page: number) => void
  siblingCount?: number
  showEdges?: boolean
  disabled?: boolean
  size?: PaginationButtonProps['size']
  ariaLabel?: string
}

export const IvisaPagination: React.FC<IvisaPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showEdges = true,
  disabled = false,
  size = 'md',
  ariaLabel = 'Pagination',
}) => {
  const paginationRange = usePaginationRange({ currentPage, totalPages, siblingCount })

  const handleChange = (page: number) => {
    if (disabled) return
    if (page < 1 || page > totalPages || page === currentPage) return
    onPageChange?.(page)
  }

  if (totalPages <= 1 || paginationRange.length === 0) {
    return null
  }

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  return (
    <PaginationRoot role="navigation" aria-label={ariaLabel}>
      {showEdges && (
        <PaginationButton
          size={size}
          disabled={disabled || isFirstPage}
          aria-label="First page"
          onPress={() => handleChange(1)}
        >
          <VisuallyHidden>First page</VisuallyHidden>
          «
        </PaginationButton>
      )}

      <PaginationButton
        size={size}
        disabled={disabled || isFirstPage}
        aria-label="Previous page"
        onPress={() => handleChange(currentPage - 1)}
      >
        <VisuallyHidden>Previous page</VisuallyHidden>
        ‹
      </PaginationButton>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationEllipsis key={`dots-${index}`} aria-hidden={true}>
              …
            </PaginationEllipsis>
          )
        }

        const pageValue = pageNumber as number
        const isActive = pageValue === currentPage

        return (
          <PaginationButton
            key={pageValue}
            size={size}
            active={isActive}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`Go to page ${pageValue}`}
            disabled={disabled}
            onPress={() => handleChange(pageValue)}
          >
            {pageValue}
          </PaginationButton>
        )
      })}

      <PaginationButton
        size={size}
        disabled={disabled || isLastPage}
        aria-label="Next page"
        onPress={() => handleChange(currentPage + 1)}
      >
        <VisuallyHidden>Next page</VisuallyHidden>
        ›
      </PaginationButton>

      {showEdges && (
        <PaginationButton
          size={size}
          disabled={disabled || isLastPage}
          aria-label="Last page"
          onPress={() => handleChange(totalPages)}
        >
          <VisuallyHidden>Last page</VisuallyHidden>
          »
        </PaginationButton>
      )}
    </PaginationRoot>
  )
}

IvisaPagination.displayName = 'IvisaPagination'
