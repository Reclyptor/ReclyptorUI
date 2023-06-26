import TextFieldComponent from "./TextField";
import { TextFieldProps } from "./TextField.types";

export const DefaultProps: TextFieldProps = {
  className: "w-[150px]"
};

export const TextField = (props: TextFieldProps) => {
  return <TextFieldComponent { ...props } />;
};

export default () => <TextFieldComponent { ...DefaultProps } />;