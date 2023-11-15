import React from "react";
import { TableProps } from "./Table.types";
import { Table as TableComponent, DefaultProps } from "./Table.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./Table.mdx";

export default {
  title: "Table",
  component: TableComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof TableComponent>;

const Template = (args: TableProps) => <TableComponent { ...args } />;

export const Table: ComponentStory<typeof TableComponent> = Template.bind({});
Table.args = { ...DefaultProps };