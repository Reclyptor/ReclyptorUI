import TextFieldComponent from "./TextField";
import { TextFieldProps } from "./TextField.types";

export const DefaultProps: TextFieldProps = {
  className: ''
};

export const TextField = (props: TextFieldProps) => {
  return <TextFieldComponent { ...props } />;
};

export default () => <TextFieldComponent { ...DefaultProps } />;