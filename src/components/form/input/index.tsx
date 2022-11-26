import {
  InputHTMLAttributes,
  KeyboardEvent,
  KeyboardEventHandler,
} from "react";
import * as styles from "./styles.css";
import { FiAlertCircle } from "react-icons/fi";
export interface InputError {
  hasError: boolean;
  message?: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error?: InputError;
  onKeyDownEnter?: () => void;
}

export default function Input({
  title,
  error,
  onKeyDownEnter,
  ...props
}: InputProps) {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDownEnter && e.code === "Enter") {
      onKeyDownEnter();
    }
  };
  return (
    <div className={styles.container}>
      <label data-error={error?.hasError} className={styles.title}>
        {title}
      </label>
      <div className={styles.inputContainer}>
        <input
          data-error={error?.hasError}
          className={styles.input}
          onKeyDown={onKeyDown}
          {...props}
        />
        <FiAlertCircle
          data-error={error?.hasError}
          className={styles.errorIcon}
        />
        <label data-error={error?.hasError} className={styles.errorMessage}>
          {error?.message}
        </label>
      </div>
    </div>
  );
}
