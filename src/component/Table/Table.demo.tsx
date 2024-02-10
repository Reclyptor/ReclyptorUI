import TableComponent from "./Table";
import { TableProps } from "./Table/Table.types";
import Head from "./Head";
import Body from "./Body";
import Row from "./Row";
import { Header } from "./index";
import Cell from "./Cell";
import pokemon from "./pokemon.json";

export const DefaultProps: TableProps = {
  variant: "primary"
};

type Pokemon = {
  id: number;
  species_id: number;
  identifier: string;
  height: number;
  weight: number;
  base_experience: number;
  order: number;
  is_default: boolean;
};

export const Table = (props: TableProps) => {
  return (
    <TableComponent { ...props }>
      <Head>
        <Row>
          <Header>ID</Header>
          <Header>Species ID</Header>
          <Header>Name</Header>
          <Header>Height</Header>
          <Header>Weight</Header>
          <Header>Base Experience</Header>
          <Header>Order</Header>
          <Header>Default</Header>
        </Row>
      </Head>
      <Body>
        {
          pokemon.map((p, idx) =>
            <Row>
              <Cell>{ p.id }</Cell>
              <Cell>{ p.species_id }</Cell>
              <Cell>{ p.identifier }</Cell>
              <Cell>{ p.height }</Cell>
              <Cell>{ p.weight }</Cell>
              <Cell>{ p.base_experience }</Cell>
              <Cell>{ p.order }</Cell>
              <Cell>{ p.is_default }</Cell>
            </Row>
          )
        }
      </Body>
    </TableComponent>
  );
};

export default () => <TableComponent { ...DefaultProps } />;