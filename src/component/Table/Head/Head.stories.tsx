import React from "react";
import { HeadProps } from "./Head.types";
import { Head as HeadComponent, DefaultProps } from "./Head.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./Head.mdx";

export default {
  title: "Head",
  component: HeadComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof HeadComponent>;

const Template = (args: HeadProps) => <HeadComponent { ...args } />;

export const Head: ComponentStory<typeof HeadComponent> = Template.bind({});
Head.args = { ...DefaultProps };