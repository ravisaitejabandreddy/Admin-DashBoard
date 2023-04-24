import { muiTheme } from "storybook-addon-material-ui5";
import { theme } from "../src/themes/theme";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { BrowserRouter } from "react-router-dom";
import { addDecorator } from "@storybook/react";
const customViewports = {
  table: {
    name: "table",
    styles: {
      width: "920px",
      height: "646px",
    },
  },
  courtSearch: {
    name: "court",
    styles: {
      width: "1060px",
      height: "340px",
    },
  },
};
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "background",
    values: [
      {
        name: "background",
        value: "#F7F8FA",
      },
    ],
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
};
export const decorators = [muiTheme(theme)];
addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>);
