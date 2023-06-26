import { CSSProperties } from "react";

export interface ToggleProps {
    toggled?: boolean;
    onChange?(_: boolean): void;
    size?: 'sm' | 'md' | 'lg'; // Default 'md'
    className?: string;
    style?: CSSProperties;
}