import FootComponent from "./Foot";
import { FootProps } from "./Foot.types";

export const DefaultProps: FootProps = {
};

export const Foot = (props: FootProps) => {
  return <FootComponent { ...props } />;
};

export default () => <FootComponent { ...DefaultProps } />;