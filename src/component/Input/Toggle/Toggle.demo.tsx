import ToggleComponent from './Toggle';
import { ToggleProps } from './Toggle.types';

export const DefaultProps: ToggleProps = {
  toggled: false,
  size: "md"
};

export const Toggle = (props: ToggleProps) => {
  return <ToggleComponent { ...props } />;
};

export default () => <ToggleComponent { ...DefaultProps } />;