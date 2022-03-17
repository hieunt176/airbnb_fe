// define properties styles

import { BaseText } from "./baseText";

export interface TextStyle  extends BaseText{
  children?: React.ReactNode;
  variant?: string;
}
