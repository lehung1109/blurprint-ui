import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Hero1 } from "./Hero1";

const meta = {
  title: "Hero/Hero1",
  component: Hero1,
} satisfies Meta<typeof Hero1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
