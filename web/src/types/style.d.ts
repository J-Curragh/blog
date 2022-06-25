import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    Base: { label: string, value: string }  
    Primary: { label: string, value: string }  
    PrimaryText: { label: string, value: string }  
    SubtitleText: { label: string, value: string }  
    Emphasis: { label: string, value: string }  
  }
}
