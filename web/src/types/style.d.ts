import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    Base: { label: string, value: string };
    Surface: { label: string, value: string };
    Overlay: { label: string, value: string };
    Muted: { label: string, value: string };
    Subtle: { label: string, value: string };
    Text: { label: string, value: string };
    Love: { label: string, value: string };
    Gold: { label: string, value: string };
    Rose: { label: string, value: string };
    Pine: { label: string, value: string };
    Foam: { label: string, value: string };
    Iris: { label: string, value: string };
    HighlightLow: { label: string, value: string };
    HighlightMed: { label: string, value: string };
    HighlightHigh: { label: string, value: string };
  }
}
