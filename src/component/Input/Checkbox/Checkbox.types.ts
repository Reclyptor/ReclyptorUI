export interface CheckboxProps {
    checked?: boolean
    indeterminate?: boolean
    onChange?(_: boolean): void
    className?: string
}