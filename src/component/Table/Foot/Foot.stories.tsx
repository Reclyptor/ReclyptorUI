import React from "react";
import { FootProps } from "./Foot.types";
import { Foot as FootComponent, DefaultProps } from "./Foot.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./Foot.mdx";

export default {
  title: "Foot",
  component: FootComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof FootComponent>;

const Template = (args: FootProps) => <FootComponent { ...args } />;

export const Foot: ComponentStory<typeof FootComponent> = Template.bind({});
Foot.args = { ...DefaultProps };