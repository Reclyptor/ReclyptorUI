import BodyComponent from "./Body";
import { BodyProps } from "./Body.types";

export const DefaultProps: BodyProps = {
};

export const Body = (props: BodyProps) => {
  return <BodyComponent { ...props } />;
};

export default () => <BodyComponent { ...DefaultProps } />;