import { BaseButton } from "./baseButton";

export interface ButtonStyle  extends BaseButton{
  children?: React.ReactNode;
  variant?: string;
}
