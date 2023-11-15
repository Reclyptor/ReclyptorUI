import React from "react";
import { RowProps } from "./Row.types";
import { Row as RowComponent, DefaultProps } from "./Row.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./Row.mdx";

export default {
  title: "Row",
  component: RowComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof RowComponent>;

const Template = (args: RowProps) => <RowComponent { ...args } />;

export const Row: ComponentStory<typeof RowComponent> = Template.bind({});
Row.args = { ...DefaultProps };