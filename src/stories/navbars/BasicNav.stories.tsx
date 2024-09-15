import type { Meta, StoryObj } from '@storybook/react';

import BasicNav from '@/components/navbars/BasicNav';
import Logo from '../../../public/assets/images/logo.png';

const meta = {
  component: BasicNav,
  tags: ['autodocs'],
} satisfies Meta<typeof BasicNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    srcLogo: Logo,
  },
};
