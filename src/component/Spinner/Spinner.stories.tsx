import React from "react";
import { SpinnerProps } from "./Spinner.types";
import { Spinner as SpinnerComponent, DefaultProps } from "./Spinner.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./Spinner.mdx";

export default {
  title: "Spinner",
  component: SpinnerComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof SpinnerComponent>;

const Template = (args: SpinnerProps) => <SpinnerComponent { ...args } />;

export const Spinner: ComponentStory<typeof SpinnerComponent> = Template.bind({});
Spinner.args = { ...DefaultProps };