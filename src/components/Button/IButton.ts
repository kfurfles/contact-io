import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    selected: boolean,
    direction: 'up' | 'down'
}