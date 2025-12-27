import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Testimonial1 } from "./Testimonial1";

const meta = {
  title: "Testimonial/Testimonial1",
  component: Testimonial1,
} satisfies Meta<typeof Testimonial1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
