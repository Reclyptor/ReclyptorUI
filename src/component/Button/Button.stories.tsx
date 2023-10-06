import React from "react";
import { ButtonProps } from "./Button.types";
import { Button as ButtonComponent, DefaultProps } from "./Button.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./Button.mdx";

export default {
  title: "Button",
  component: ButtonComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof ButtonComponent>;

const Template = (args: ButtonProps) => <ButtonComponent { ...args } />;

export const Button: ComponentStory<typeof ButtonComponent> = Template.bind({});
Button.args = { ...DefaultProps };