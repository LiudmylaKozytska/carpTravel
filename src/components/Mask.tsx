import { ReactNode } from "react";
import InputMask, { Props as InputMaskProps } from "react-input-mask";

type InputTelMask = Omit<InputMaskProps, "children"> & {
  children?: (inputProps: any) => JSX.Element;
};

export const PhoneMask: React.FC<InputTelMask> = ({
  children,
  ...props
}) => {
  const child = children as ReactNode;
  return <InputMask {...props}>{child}</InputMask>;
};