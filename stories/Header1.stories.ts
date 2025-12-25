import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header } from './Header1';

const meta = {
  title: 'Header/Header1',
  component: Header
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
