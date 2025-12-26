import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Hero5 } from "./Hero5";

const meta = {
  title: "Hero/Hero5",
  component: Hero5,
} satisfies Meta<typeof Hero5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
