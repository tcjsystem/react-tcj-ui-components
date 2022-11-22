import React, { useState } from "react";
import * as r from "@radix-ui/react-select";
import { FiCheck, FiChevronDown, FiChevronUp } from "react-icons/fi";
import * as styles from "./styles.css";
import { config, useTransition } from "@react-spring/web";

interface SelectItemProps {
  value: string;
  label: string;
  children?: SelectItemProps[];
}

interface SelectProps {
  items: SelectItemProps[];
  placeholder?: string;
  onValueChange?: (value: string) => void;
}

export default function Select({
  items,
  placeholder = "select...",
  onValueChange,
}: SelectProps) {
  return (
    <r.Root onValueChange={onValueChange}>
      <r.Trigger className={styles.selectTrigger}>
        <r.Value placeholder={placeholder} />
        <r.Icon className={styles.selectIcon}>
          <FiChevronDown />
        </r.Icon>
      </r.Trigger>
      <r.Portal>
        <r.Content className={styles.selectContent}>
          <r.ScrollUpButton className={styles.selectScrollButton}>
            <FiChevronUp />
          </r.ScrollUpButton>
          <r.Viewport className={styles.selectViewport}>
            {items.map((item) =>
              item.children ? (
                <r.Group key={item.value}>
                  <r.Label className={styles.selectLabel}>{item.label}</r.Label>
                  {item.children.map((child) => (
                    <SelectItem key={child.value} value={child.value}>
                      {child.label}
                    </SelectItem>
                  ))}
                </r.Group>
              ) : (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              )
            )}
          </r.Viewport>
          <r.ScrollDownButton className={styles.selectScrollButton}>
            <FiChevronDown />
          </r.ScrollDownButton>
        </r.Content>
      </r.Portal>
    </r.Root>
  );
}
export const SelectGroup = r.SelectGroup;
export const SelectItem = React.forwardRef<HTMLDivElement, r.SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <r.Item className={styles.selectItem} {...props} ref={forwardedRef}>
        <r.ItemText>{children}</r.ItemText>
        <r.ItemIndicator className={styles.selectItemIndicator}>
          <FiCheck />
        </r.ItemIndicator>
      </r.Item>
    );
  }
);
