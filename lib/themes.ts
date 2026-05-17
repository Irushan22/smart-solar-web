/**
 * Color presets — pick one and apply via `applyTheme()` in `app/layout.tsx`,
 * or wire to a runtime toggle. Each preset writes CSS custom properties
 * onto `:root` so all components pick them up.
 *
 * To use a preset, import it and call `applyTheme(themes.blue)` once on
 * mount, or change the `defaultTheme` export below.
 */

export interface Theme {
  name: string;
  primary: string;       // main brand color (buttons, CTAs)
  primaryDark: string;   // button hover
  primaryGlow: string;   // rgba shadow tint
  accentNavy: string;    // section backgrounds, titles
  accentSoft: string;    // muted text
}

export const themes = {
  green: {
    name: 'Green (default)',
    primary: '#4a9630',
    primaryDark: '#3d7d28',
    primaryGlow: 'rgba(74, 150, 48, 0.25)',
    accentNavy: '#0B192C',
    accentSoft: '#1E3E62',
  },
  blue: {
    name: 'Ocean Blue',
    primary: '#0a7ea4',
    primaryDark: '#076487',
    primaryGlow: 'rgba(10, 126, 164, 0.25)',
    accentNavy: '#0B192C',
    accentSoft: '#1E3E62',
  },
  orange: {
    name: 'Sunset Orange',
    primary: '#d97706',
    primaryDark: '#b45309',
    primaryGlow: 'rgba(217, 119, 6, 0.25)',
    accentNavy: '#1c1917',
    accentSoft: '#44403c',
  },
  red: {
    name: 'Crimson',
    primary: '#dc2626',
    primaryDark: '#b91c1c',
    primaryGlow: 'rgba(220, 38, 38, 0.25)',
    accentNavy: '#1f1115',
    accentSoft: '#4c1d24',
  },
} as const;

export type ThemeName = keyof typeof themes;

export const defaultTheme: ThemeName = 'green';

/**
 * Apply a theme by writing CSS variables to :root.
 * Call from a Client Component if you want a runtime switcher.
 */
export function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.style.setProperty('--primary', theme.primary);
  root.style.setProperty('--primary-hover', theme.primaryDark);
  root.style.setProperty('--primary-glow', theme.primaryGlow);
  root.style.setProperty('--navy-dark', theme.accentNavy);
  root.style.setProperty('--text-muted', theme.accentSoft);
}
