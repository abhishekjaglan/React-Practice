import { ChangeEvent } from "react";

export interface InputBoxType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}