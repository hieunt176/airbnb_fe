// define properties styles

import { BaseStyle } from "./baseStyle";

export interface TextStyle  extends BaseStyle{

  children?: React.ReactNode;
  variant: string;
}
