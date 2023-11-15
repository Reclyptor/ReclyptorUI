import React from "react";
import { CellProps } from "./Cell.types";
import { Cell as CellComponent, DefaultProps } from "./Cell.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./Cell.mdx";

export default {
  title: "Cell",
  component: CellComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof CellComponent>;

const Template = (args: CellProps) => <CellComponent { ...args } />;

export const Cell: ComponentStory<typeof CellComponent> = Template.bind({});
Cell.args = { ...DefaultProps };