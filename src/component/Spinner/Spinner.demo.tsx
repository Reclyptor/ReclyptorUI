import SpinnerComponent from "./Spinner";
import { SpinnerProps } from "./Spinner.types";

export const DefaultProps: SpinnerProps = {
};

export const Spinner = (props: SpinnerProps) => {
  return <SpinnerComponent { ...props } />;
};

export default () => <SpinnerComponent { ...DefaultProps } />;