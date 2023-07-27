import React from 'react';
import { DockProps } from './Dock.types';
import { Dock as DockComponent, DefaultProps } from './Dock.demo';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import documentation from './Dock.mdx';

export default {
  title: 'Surface/Dock',
  component: DockComponent,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof DockComponent>;

const Template = (args: DockProps) => <DockComponent { ...args } />;

export const Dock: ComponentStory<typeof DockComponent> = Template.bind({});
Dock.args = { ...DefaultProps };