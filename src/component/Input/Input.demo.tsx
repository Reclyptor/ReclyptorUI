import InputComponent from "./Input";
import { InputProps } from "./Input.types";

export const DefaultProps: InputProps = {
};

export const Input = (props: InputProps) => {
  return <InputComponent { ...props } />;
};

export default () => <InputComponent { ...DefaultProps } />;