import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Feature1 } from "./Feature1";

const meta = {
  title: "Feature/Feature1",
  component: Feature1,
} satisfies Meta<typeof Feature1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
