import type { Meta, StoryObj } from '@storybook/react';

import Logo from './CustomLogo';
import Image from '../../../assets/images/01crew_logo.jpeg';

const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    controls: { expanded: true },
  },
  tags: ['autodocs'],
  argTypes: {
    alt: { control: 'text' },
    height: { control: 'text' },
    src: { control: 'text' },
    width: { control: 'text' },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: '01 Crew Logo',
    height: 100,
    src: Image,
    width: 200,
  },
};
