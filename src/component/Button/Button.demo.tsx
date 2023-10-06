import ButtonComponent from "./Button";
import { ButtonProps } from "./Button.types";

export const DefaultProps: ButtonProps = {
};

export const Button = (props: ButtonProps) => {
  return <ButtonComponent { ...props } className="px-2">Button</ButtonComponent>;
};

export default () => <Button { ...DefaultProps } />;