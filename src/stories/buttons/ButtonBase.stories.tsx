import type { Meta, StoryObj } from '@storybook/react';

import ButtonBase from '@/components/buttons/ButtonBase';

const meta = {
  component: ButtonBase,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonBase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: 'solid',
    size: 'lg',
    radius: 'sm',
    title: 'Enter your title',
  },
};
