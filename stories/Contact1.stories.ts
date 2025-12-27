import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Contact1 } from "./Contact1";

const meta = {
  title: "Contact/Contact1",
  component: Contact1,
} satisfies Meta<typeof Contact1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
