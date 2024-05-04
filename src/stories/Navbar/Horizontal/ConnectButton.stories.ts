import type { Meta, StoryObj } from "@storybook/react"

import ConnectButton from "@/components/Navbar/Horizontal/ConnectButton"

const meta = {
  title: "Navbar/Horizontal/ConnectButton",
  component: ConnectButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ConnectButton>

export default meta
type Story = StoryObj<typeof meta>

export const Button: Story = {}
