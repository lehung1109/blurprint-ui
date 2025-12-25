import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Hero3 } from "./Hero3";

const meta = {
  title: "Hero/Hero3",
  component: Hero3,
} satisfies Meta<typeof Hero3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
