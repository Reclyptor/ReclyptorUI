import TableComponent from "./Table";
import { TableProps } from "./Table/Table.types";

export const DefaultProps: TableProps = {
};

export const Table = (props: TableProps) => {
  return <TableComponent { ...props } />;
};

export default () => <TableComponent { ...DefaultProps } />;