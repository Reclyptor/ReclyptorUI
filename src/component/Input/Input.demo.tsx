import InputComponent from "./Input";
import { InputProps } from "./Input.types";

export const DefaultProps: InputProps = {
};

export const Input = (props: InputProps) => {
  return <InputComponent { ...props } placeholder="Input Field" className="w-80" />;
};

export default () => <InputComponent { ...DefaultProps } />;