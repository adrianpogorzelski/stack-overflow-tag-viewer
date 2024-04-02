import { Provider } from "react-redux"
import { store } from "../src/store/store"

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
  ),
]

export default preview;
