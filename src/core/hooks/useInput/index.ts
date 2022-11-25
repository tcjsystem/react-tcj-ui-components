import { ChangeEvent, useState } from "react";

interface UseInputProps {
    min?: number;
    minErrorMessage?: string;
    max?: number;
    maxErrorMessage?: string;
    regExp?: RegExp;
    regExpErrorMessage?: string;
}

export interface InputError {
    hasError: boolean;
    message?: string;
}

export const useInput = ({
    min,
    minErrorMessage,
    max,
    maxErrorMessage,
    regExp,
    regExpErrorMessage,
}: UseInputProps) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState<InputError>({
        hasError: false,
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (min && e.target.value.length < min) {
            setError({
                hasError: true,
                message: minErrorMessage,
            });
            return;
        }
        if (max && e.target.value.length > max) {
            setError({
                hasError: true,
                message: maxErrorMessage,
            });
            return;
        }
        if (!regExp?.test(e.target.value)) {
            setError({
                hasError: true,
                message: regExpErrorMessage,
            });
            return;
        }
        setError({
            hasError: false,
            message: undefined,
        });
        setValue(e.target.value);
    };

    return [value, onChange, error] as const;
};
