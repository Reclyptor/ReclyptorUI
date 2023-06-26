import ButtonComponent from './Button';
import { ButtonProps } from "./Button.types";

export const DefaultProps: ButtonProps = {
  size: "md"
};

export const Button = (props: ButtonProps) => {
  return <ButtonComponent { ...props }>Button</ButtonComponent>;
};

export default () => <Button { ...DefaultProps } />;