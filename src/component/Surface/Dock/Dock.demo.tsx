import DockComponent from "./Dock";
import { DockProps } from "./Dock.types";

export const DefaultProps: DockProps = {
};

export const Dock = (props: DockProps) => {
  return <DockComponent { ...props } />;
};

export default () => <DockComponent { ...DefaultProps } />;