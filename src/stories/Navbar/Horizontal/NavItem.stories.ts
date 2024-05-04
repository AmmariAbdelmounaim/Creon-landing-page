import type { Meta, StoryObj } from "@storybook/react"

import NavItem from "@/components/Navbar/Horizontal/NavItem"

const meta = {
  title: "Navbar/Horizontal/NavItem",
  component: NavItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavItem>

export default meta
type Story = StoryObj<typeof meta>

export const WithBadge: Story = {
  args: {
    text: "Creon Pass",
    withBadge: false,
  },
}
export const WithoutBadge: Story = {
  args: {
    text: "AI Revenue",
    withBadge: true,
  },
}
