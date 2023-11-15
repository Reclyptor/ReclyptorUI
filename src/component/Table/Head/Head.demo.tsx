import HeadComponent from "./Head";
import { HeadProps } from "./Head.types";

export const DefaultProps: HeadProps = {
};

export const Head = (props: HeadProps) => {
  return <HeadComponent { ...props } />;
};

export default () => <HeadComponent { ...DefaultProps } />;