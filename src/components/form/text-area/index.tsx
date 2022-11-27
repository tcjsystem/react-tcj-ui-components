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

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  error?: InputError;
  onKeyDownEnter?: () => void;
}

export default function TextArea({
  title,
  error,
  onKeyDownEnter,
  ...props
}: TextAreaProps) {
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
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
        <textarea
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
