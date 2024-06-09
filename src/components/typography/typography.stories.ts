import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./";

import { generateTailwindColorClasses } from "../../utils/tailwindColors";

const meta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tag: {
      control: {
        type: "select",
        options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "a"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "subtitle1",
          "subtitle2",
          "body1",
          "body2",
          "caption",
          "overline",
          "link",
        ],
      },
    },
    weight: {
      control: {
        type: "select",
        options: ["light", "regular", "medium", "bold"],
      },
    },
    color: {
      control: "select",
      options: generateTailwindColorClasses(),
    },
  },
  args: {
    children: "Typography",
    color: "text-gray-800",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Typography",
  },
};

export const Title: Story = {
  args: {
    children: "Title Typography",
    tag: "h1",
    variant: "h1",
    weight: "bold",
  },
};

export const TextBlock: Story = {
  args: {
    children:
      "Proin feugiat mi nec lectus placerat, quis malesuada ipsum porttitor. Mauris quis lorem at metus convallis molestie. Fusce malesuada eu est eu semper. Donec ac lorem rutrum, porta diam a, efficitur mauris. In hac habitasse platea dictumst. Pellentesque metus leo, cursus sed orci eu, dictum ultrices tortor. Vivamus consectetur semper sagittis. Phasellus eget dui quis turpis condimentum tincidunt nec nec libero. Nam et metus sagittis, facilisis mi ut, varius felis. Donec at mi posuere, condimentum felis in, varius urna. Fusce venenatis nibh sed pharetra iaculis. Duis blandit pulvinar nisi, at efficitur erat molestie hendrerit. Suspendisse porta purus id lacus imperdiet congue. Mauris arcu tortor, aliquet vitae finibus quis, elementum vitae risus.",
    tag: "p",
    variant: "body1",
    weight: "regular",
  },
};

export const ClickableText: Story = {
  args: {
    children: "Click me",
    tag: "a",
    variant: "link",
    weight: "light",
  },
};

export const Subtitle: Story = {
  args: {
    children: "Subtitle Text",
    tag: "h4",
    variant: "subtitle1",
    weight: "medium",
  },
};

export const Caption: Story = {
  args: {
    children: "Caption Text",
    tag: "span",
    variant: "caption",
    weight: "regular",
  },
};

export const Overline: Story = {
  args: {
    children: "Overline Text",
    tag: "span",
    variant: "overline",
    weight: "regular",
  },
};

export const Colored: Story = {
  args: {
    children: "Colored Body 2 Text",
    tag: "p",
    variant: "body2",
    weight: "regular",
    color: "text-blue-500",
  },
};