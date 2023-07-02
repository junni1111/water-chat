import 'styled-components';
import { ColorType, FontType, DeviceType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorType;
    fonts: FontType;
    devices: DeviceType;
  }
}
