import React from "react";
import { CardProps } from "./Card.types";
import { Card as CardComponent, DefaultProps } from "./Card.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./Card.mdx";

export default {
  title: "Surface/Card",
  component: CardComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof CardComponent>;

const Template = (args: CardProps) => <CardComponent { ...args } />;

export const Card: ComponentStory<typeof CardComponent> = Template.bind({});
Card.args = { ...DefaultProps };