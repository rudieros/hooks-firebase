import styled from 'styled-components'
import { SnackBarVariants } from './SnackBar'

export const SnackBarMessage = styled.span<{ variant: SnackBarVariants }>`
  ${({ theme, variant }) => {
      switch (variant) {
          case SnackBarVariants.ERROR:
              return `color: ${theme.palette.secondary.main}`
          case SnackBarVariants.SUCCESS:
              return `color: ${theme.palette.primary.main}`
          default:
              return 'color: white;'
      }
} }
`
