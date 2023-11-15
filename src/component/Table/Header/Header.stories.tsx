import React from "react";
import { HeaderProps } from "./Header.types";
import { Header as HeaderComponent, DefaultProps } from "./Header.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./Header.mdx";

export default {
  title: "Header",
  component: HeaderComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof HeaderComponent>;

const Template = (args: HeaderProps) => <HeaderComponent { ...args } />;

export const Header: ComponentStory<typeof HeaderComponent> = Template.bind({});
Header.args = { ...DefaultProps };