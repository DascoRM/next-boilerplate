import type { Meta, StoryObj } from '@storybook/react';

import RoundedNav from '@/components/navbars/RoundedNav';
import Logo from '../../../public/assets/images/logo.png';

const meta = {
  component: RoundedNav,
  tags: ['autodocs'],
} satisfies Meta<typeof RoundedNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Rounded: Story = {
  args: {
    srcLogo: Logo,
  },
  parameters: {
    background: {
      default: 'dark',
    },
  },
};
