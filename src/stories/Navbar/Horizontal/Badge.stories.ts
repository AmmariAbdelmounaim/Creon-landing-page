import type { Meta, StoryObj } from "@storybook/react"

import { Badge } from "@/components/Navbar/Horizontal/Badge"

const meta = {
  title: "Navbar/Horizontal/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const LinkVariant: Story = {
  args: {
    variant: "link",
  },
}
export const CardVariant: Story = {
  args: {
    variant: "card",
  },
}
