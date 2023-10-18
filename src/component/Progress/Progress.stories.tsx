import React from "react";
import { ProgressProps } from "./Progress.types";
import { Progress as ProgressComponent, DefaultProps } from "./Progress.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./Progress.mdx";

export default {
  title: "Progress",
  component: ProgressComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof ProgressComponent>;

const Template = (args: ProgressProps) => <ProgressComponent { ...args } />;

export const Progress: ComponentStory<typeof ProgressComponent> = Template.bind({});
Progress.args = { ...DefaultProps };