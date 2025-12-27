import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Cta1 } from "./Cta1";

const meta = {
  title: "CTA/Cta1",
  component: Cta1,
} satisfies Meta<typeof Cta1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
