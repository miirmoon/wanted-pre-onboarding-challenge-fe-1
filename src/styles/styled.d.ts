import "styled-components";
import {
  BoxSizeTypes,
  ColorsTypes,
  FontSizeTypes,
  FontWeightTypes,
  MediaSizeTypes,
  ShadowTypes,
} from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
    fontWeight: FontWeightTypes;
    boxSize: BoxSizeTypes;
    shadow: ShadowTypes;
    mediaSize: MediaSizeTypes;
  }
}
