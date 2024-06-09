// tailwindColors.ts

export const generateTailwindColorClasses = () => {
  const colors = [
    "black",
    "white",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const colorClasses: string[] = [];

  colors.forEach((color) => {
    shades.forEach((shade) => {
      colorClasses.push(`text-${color}-${shade}`);
    });
  });

  return colorClasses;
};
