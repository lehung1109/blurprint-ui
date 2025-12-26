import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Hero4 } from "./Hero4";

const meta = {
  title: "Hero/Hero4",
  component: Hero4,
} satisfies Meta<typeof Hero4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
