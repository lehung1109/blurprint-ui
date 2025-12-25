import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Hero2 } from "./Hero2";

const meta = {
  title: "Hero/Hero2",
  component: Hero2,
} satisfies Meta<typeof Hero2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
