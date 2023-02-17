import React from 'react';
import { CheckboxProps } from './Checkbox.types';
import { Checkbox as CheckboxComponent, DefaultProps } from './Checkbox.demo';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import documentation from './Checkbox.mdx';

export default {
  title: 'Input/Checkbox',
  component: CheckboxComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof CheckboxComponent>;

const Template = (args: CheckboxProps) => <CheckboxComponent { ...args } />;

export const Checkbox: ComponentStory<typeof CheckboxComponent> = Template.bind({});
Checkbox.args = { ...DefaultProps };