import type { Meta, StoryObj } from '@storybook/react';

import { ButtonRoot } from './ButtonRoot';

const meta = {
  component: ButtonRoot,
} satisfies Meta<typeof ButtonRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};