import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer1 } from "./Footer1";

const meta = {
  title: "Footer/Footer1",
  component: Footer1,
} satisfies Meta<typeof Footer1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
