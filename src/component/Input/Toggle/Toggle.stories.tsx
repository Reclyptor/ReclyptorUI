import React from 'react';
import { ToggleProps } from './Toggle.types';
import { Toggle as ToggleComponent, DefaultProps } from './Toggle.demo';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import documentation from './Toggle.mdx';

export default {
  title: 'Input/Toggle',
  component: ToggleComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof ToggleComponent>;

const Template = (args: ToggleProps) => <ToggleComponent { ...args } />;

export const Toggle: ComponentStory<typeof ToggleComponent> = Template.bind({});
Toggle.args = { ...DefaultProps };