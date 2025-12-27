import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header1 } from './Header1';

const meta = {
  title: 'Header/Header1',
  component: Header1
} satisfies Meta<typeof Header1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
