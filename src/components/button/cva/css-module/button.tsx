import {ButtonHTMLAttributes, FC, KeyboardEventHandler, PropsWithChildren} from 'react';
import {cva, type VariantProps} from 'class-variance-authority';

import styles from './button.module.css';

const button = cva(styles.root, {
  variants: {
    kind: {
      primary: styles.primary,
      neutral: styles.neutral,
      destructive: styles.destructive,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
    },
    weight: {
      accent: styles.accent,
      regular: styles.regular,
    }
  },
  compoundVariants: [
    {
      kind: 'primary',
      weight: 'accent',
      className: styles.primaryAccent
    },
    {
      kind: 'neutral',
      weight: 'accent',
      className: styles.neutralAccent
    },
    {
      kind: 'destructive',
      weight: 'accent',
      className: styles.destructiveAccent
    },
  ],
  defaultVariants: {
    kind: 'primary',
    size: 'medium',
    weight: 'regular',
  },
});

export type Props = PropsWithChildren<{
  onClick?: () => void;
  className?: HTMLButtonElement['className']
}> & VariantProps<typeof button>;

export const Button: FC<Props> = (
  {
    kind = 'primary',
    size = 'medium',
    weight = 'regular',
    onClick,
    children,
    className,
  }
) => {
  const handleKeyDown: KeyboardEventHandler<HTMLButtonElement> = (event) => {
    switch (event.key) {
      case 'Enter': {
        event.preventDefault();
        onClick?.();
        break;
      }
    }
  };
  
  return (
    <button
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={button({
        kind,
        size,
        weight,
        className,
      })}
    >
      {children}
    </button>
  );
}
