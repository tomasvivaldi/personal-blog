import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-white2": "#e0e0e0",
  "--my-black": "#1a1a1a",
  "--primary-color": "#d80000",
  "--my-red": "#db4437",
  "--my-yellow": "#fee502",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  /* Brand */
  "--brand-primary": props["--primary-color"],

  // Default button
  "--default-button-color": "#666",

  "--default-button-primary-color": props["--my-white2"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--primary-color"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--primary-color"],
});
