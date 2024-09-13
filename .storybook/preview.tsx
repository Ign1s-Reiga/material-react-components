import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (story) => (
      <div style={{ display: 'flex', margin: '3em', justifyContent: 'center' }}>
        {story()}
      </div>
    )
  ],
};

export default preview;
