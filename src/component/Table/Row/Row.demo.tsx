import RowComponent from "./Row";
import { RowProps } from "./Row.types";

export const DefaultProps: RowProps = {
};

export const Row = (props: RowProps) => {
  return <RowComponent { ...props } />;
};

export default () => <RowComponent { ...DefaultProps } />;