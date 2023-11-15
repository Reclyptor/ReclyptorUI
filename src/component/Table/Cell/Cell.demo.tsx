import CellComponent from "./Cell";
import { CellProps } from "./Cell.types";

export const DefaultProps: CellProps = {
};

export const Cell = (props: CellProps) => {
  return <CellComponent { ...props } />;
};

export default () => <CellComponent { ...DefaultProps } />;