import CheckboxComponent from './Checkbox';
import { CheckboxProps } from "./Checkbox.types";

export const DefaultProps: CheckboxProps = {
  size: "md"
};

export const Checkbox = (props: CheckboxProps) => {
  return <CheckboxComponent { ...props } />;
};

export default () => <CheckboxComponent { ...DefaultProps } />;