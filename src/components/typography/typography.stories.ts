import Typography from ".";

const meta = {
  title: "Typography",
  component: Typography,
  argvariants: {
    tag: {
      control: {
        variant: "select",
        options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "a"],
      },
    },
    variant: {
      control: {
        variant: "select",
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
          "link"
        ],
      },
    },
    weight: {
      control: {
        variant: "select",
        options: ["light", "regular", "medium", "bold"],
      },
    },
  },
  args: {
    children: "Typography",
  },
};

export default meta;

export const Default = {
  args: {
    children: "Default Typography",
  },
};

export const Title = {
  args: {
    children: "Title Typography",
    tag: "h1",
    variant: "h1",
    weight: "bold",
  },
};

export const TextBlock = {
  args: {
    children:
      "Proin feugiat mi nec lectus placerat, quis malesuada ipsum porttitor. Mauris quis lorem at metus convallis molestie. Fusce malesuada eu est eu semper. Donec ac lorem rutrum, porta diam a, efficitur mauris. In hac habitasse platea dictumst. Pellentesque metus leo, cursus sed orci eu, dictum ultrices tortor. Vivamus consectetur semper sagittis. Phasellus eget dui quis turpis condimentum tincidunt nec nec libero. Nam et metus sagittis, facilisis mi ut, varius felis. Donec at mi posuere, condimentum felis in, varius urna. Fusce venenatis nibh sed pharetra iaculis. Duis blandit pulvinar nisi, at efficitur erat molestie hendrerit. Suspendisse porta purus id lacus imperdiet congue. Mauris arcu tortor, aliquet vitae finibus quis, elementum vitae risus.",
    tag: "p",
    variant: "body1",
    weight: "regular",
  },
};

export const ClickableText = {
  args: {
    children: "Click me",
    tag: "a",
    variant: "link",
    weight: "light",
  },
};