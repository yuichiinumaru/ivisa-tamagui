// @ts-nocheck
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from '@tamagui/lucide-icons'
import React, { useMemo } from 'react'
import { GetProps, Text, VisuallyHidden, XStack, styled } from 'tamagui'
import { Button } from '../../atoms/Button'

import { Skeleton } from '../../atoms/Skeleton'

const PaginationRoot = styled(XStack, {
  name: 'PaginationRoot',
  alignItems: 'center',
  gap: '$sm',

  variants: {
    hasError: {
      true: {
        borderWidth: 1,
        borderColor: '$red10',
        borderRadius: '$radius',
        padding: '$2',
      },
    },
  } as const,
})

const PaginationButton = styled(Button, {
  name: 'PaginationButton',
  unstyled: true,
  borderRadius: '$full',
  borderWidth: 1,
  borderColor: '$borderColor',
  minWidth: 40,
  height: '$xl',
  paddingHorizontal: '$md',
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
        height: '$lg',
        minWidth: 32,
        paddingHorizontal: '$sm',
        fontSize: '$2',
      },
      md: {
        height: '$xl',
        fontSize: '$3',
      },
      lg: {
        height: '$2xl',
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
  px: '$sm',
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

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange?: (page: number) => void
  siblingCount?: number
  showEdges?: boolean
  disabled?: boolean
  isLoading?: boolean
  hasError?: boolean
  size?: PaginationButtonProps['size']
  ariaLabel?: string
  leftSlot?: React.ReactNode
  rightSlot?: React.ReactNode
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showEdges = true,
  disabled = false,
  isLoading = false,
  hasError = false,
  size = 'md',
  ariaLabel = 'Paginação',
  leftSlot,
  rightSlot,
}) => {
  const paginationRange = usePaginationRange({
    currentPage,
    totalPages,
    siblingCount,
  })

  const handleChange = (page: number) => {
    if (disabled || isLoading) return
    if (page < 1 || page > totalPages || page === currentPage) return
    onPageChange?.(page)
  }

  if (isLoading) {
    return (
      <XStack
        alignItems="center"
        gap="$sm"
        aria-label="Carregando paginação"
      >
        <Skeleton
          width={32}
          height={32}
          borderRadius="$full"
        />
        <Skeleton
          width={32}
          height={32}
          borderRadius="$full"
        />
        <Skeleton
          width={40}
          height={32}
          borderRadius="$full"
        />
        <Skeleton
          width={40}
          height={32}
          borderRadius="$full"
        />
        <Skeleton
          width={40}
          height={32}
          borderRadius="$full"
        />
        <Skeleton
          width={32}
          height={32}
          borderRadius="$full"
        />
        <Skeleton
          width={32}
          height={32}
          borderRadius="$full"
        />
      </XStack>
    )
  }

  if (totalPages <= 1 || paginationRange.length === 0) {
    return null
  }

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  return (
    <PaginationRoot
      role="navigation"
      aria-label={ariaLabel}
      hasError={hasError}
    >
      {leftSlot}
      {showEdges && (
        <PaginationButton
          size={size}
          disabled={disabled || isFirstPage}
          aria-label="Primeira página"
          onPress={() => handleChange(1)}
        >
          <VisuallyHidden>Primeira página</VisuallyHidden>
          <ChevronsLeft />
        </PaginationButton>
      )}

      <PaginationButton
        size={size}
        disabled={disabled || isFirstPage}
        aria-label="Página anterior"
        onPress={() => handleChange(currentPage - 1)}
      >
        <VisuallyHidden>Página anterior</VisuallyHidden>
        <ChevronLeft />
      </PaginationButton>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationEllipsis
              key={`dots-${index}`}
              aria-hidden={true}
            >
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
            aria-label={`Ir para a página ${pageValue}`}
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
        aria-label="Próxima página"
        onPress={() => handleChange(currentPage + 1)}
      >
        <VisuallyHidden>Próxima página</VisuallyHidden>
        <ChevronRight />
      </PaginationButton>

      {showEdges && (
        <PaginationButton
          size={size}
          disabled={disabled || isLastPage}
          aria-label="Última página"
          onPress={() => handleChange(totalPages)}
        >
          <VisuallyHidden>Última página</VisuallyHidden>
          <ChevronsRight />
        </PaginationButton>
      )}
      {rightSlot}
    </PaginationRoot>
  )
}

Pagination.displayName = 'Pagination'

