import clsx from 'clsx';
import type { JSX } from 'react';

import * as resetStyles from './reset.css';
import { type Sprinkles, sprinkles } from './sprinkles.css';

export type Atoms = Sprinkles & {
  reset?: keyof JSX.IntrinsicElements;
};

export const atoms = ({ reset, ...rest }: Atoms) => {
  if (!reset) return sprinkles(rest);

  const elementReset =
    resetStyles.element[reset as keyof typeof resetStyles.element];

  const sprinklesClasses = sprinkles(rest);

  return clsx(resetStyles.base, elementReset, sprinklesClasses);
};
