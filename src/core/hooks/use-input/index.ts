import { ChangeEvent, useState } from "react";

export interface UseInputProps {
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
    if (max && e.target.value.length > max) {
      setError({
        hasError: true,
        message: maxErrorMessage,
      });
      return;
    }
    if (regExp && !regExp?.test(e.target.value)) {
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
