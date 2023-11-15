import React from "react";
import { BodyProps } from "./Body.types";
import { Body as BodyComponent, DefaultProps } from "./Body.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./Body.mdx";

export default {
  title: "Body",
  component: BodyComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof BodyComponent>;

const Template = (args: BodyProps) => <BodyComponent { ...args } />;

export const Body: ComponentStory<typeof BodyComponent> = Template.bind({});
Body.args = { ...DefaultProps };