import type { CSSProperties } from 'react';
import type { LetterData } from '../types/letter.types';

export const toThemeCssVars = (letter: LetterData): CSSProperties => ({
  ['--font-heading' as string]: letter.theme.headingFont,
  ['--font-body' as string]: letter.theme.bodyFont,
  ['--gradient-main' as string]: letter.theme.gradient,
  ['--accent-color' as string]: letter.theme.accentColor,
  ['--surface-color' as string]: letter.theme.surfaceColor,
  ['--text-color' as string]: letter.theme.textColor,
  ['--muted-text-color' as string]: letter.theme.mutedTextColor,
  ['--shadow-color' as string]: letter.theme.shadowColor,
  ['--border-color' as string]: letter.theme.borderColor,
  ['--ambient-gradient' as string]: letter.background.ambientGradient,
  ['--overlay-opacity' as string]: String(letter.background.overlayPatternOpacity),
});

