import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Page1 } from "./Page1";

const meta = {
  title: "Page/Page1",
  component: Page1,
} satisfies Meta<typeof Page1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
