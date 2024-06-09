import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from ".";

const meta = {
  title: "Form/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["button", "submit", "reset"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "danger", "warning", "success"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["contained", "outlined", "text"],
      },
    },
    rounded: {
      control: {
        type: "boolean",
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    color: "secondary",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    color: "danger",
    variant: "contained",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    color: "warning",
    disabled: true,
    variant: "contained",
  },
};
