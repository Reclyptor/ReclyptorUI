import React from "react";
import { InputProps } from "./Input.types";
import { Input as InputComponent, DefaultProps } from "./Input.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./Input.mdx";

export default {
  title: "Input",
  component: InputComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof InputComponent>;

const Template = (args: InputProps) => <InputComponent { ...args } />;

export const Input: ComponentStory<typeof InputComponent> = Template.bind({});
Input.args = { ...DefaultProps };