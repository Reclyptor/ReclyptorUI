import ButtonComponent from './Button';
import { ButtonProps } from './Button.types';

export const DefaultProps: ButtonProps = {
  className: ''
};

export const Button = (props: ButtonProps) => {
  return <ButtonComponent { ...props }>Button</ButtonComponent>;
};

export default () => <Button { ...DefaultProps } />;