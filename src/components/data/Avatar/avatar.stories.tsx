import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Avatar from "./";

const meta: Meta<typeof Avatar> = {
  title: "Data/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "danger", "warning", "success"],
      },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "https://i.pravatar.cc/300",
    altText: "Avatar",
  },
};

export const Small: Story = {
  args: {
    imageUrl: "https://i.pravatar.cc/300",
    altText: "Avatar",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    imageUrl: "https://i.pravatar.cc/300",
    altText: "Avatar",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    imageUrl: "https://i.pravatar.cc/300",
    altText: "Avatar",
    size: "large",
  },
};

export const WithInitials: Story = {
  args: {
    altText: "John Doe",
  },
};

export const LargeWithInitials: Story = {
  args: {
    altText: "John Doe",
    size: "large",
  },
};

export const ColoredDanger: Story = {
  args: {
    altText: "John Doe",
    color: "danger",
  },
};

export const ColoredSuccess: Story = {
  args: {
    altText: "John Doe",
    color: "success",
  },
};

export const InvalidSize: Story = {
  args: {
    altText: "John Doe",
    size: "invalid-size" as never,
  },
};
