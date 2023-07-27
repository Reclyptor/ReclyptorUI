import React from 'react';
import { CheckboxProps } from './Checkbox.types';
import { Checkbox as CheckboxComponent, DefaultProps } from './Checkbox.demo';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import documentation from './Checkbox.mdx';
import { useArgs } from "@storybook/addons";

export default {
  title: 'Input/Checkbox',
  component: CheckboxComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof CheckboxComponent>;

const Template = (args: CheckboxProps) => {
  const [, updateArgs] = useArgs();

  const onChange = (checked: boolean): void => {
    args.onChange?.(checked);
    updateArgs({ checked });
  };

  return (
    <CheckboxComponent { ...args } onChange={ onChange } />
  );
};

export const Checkbox: ComponentStory<typeof CheckboxComponent> = Template.bind({});
Checkbox.args = { ...DefaultProps };