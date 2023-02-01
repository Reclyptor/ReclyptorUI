import { ReactNode } from 'react';

export interface ButtonProps {
  onClick?(): void
  size?: 'sm' | 'md' | 'lg' // Default 'md'
  children?: ReactNode
  className?: string
}