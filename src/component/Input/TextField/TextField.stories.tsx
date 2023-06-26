import React from "react";
import { TextFieldProps } from "./TextField.types";
import { TextField as TextFieldComponent, DefaultProps } from "./TextField.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./TextField.mdx";

export default {
  title: "/TextField",
  component: TextFieldComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof TextFieldComponent>;

const Template = (args: TextFieldProps) => <TextFieldComponent { ...args } />;

export const TextField: ComponentStory<typeof TextFieldComponent> = Template.bind({});
TextField.args = { ...DefaultProps };