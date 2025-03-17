import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

// const menuItem = [
//   {
//     name: 'Products & Features',
//     path: '',
//   },
//   {
//     name: 'Plan & Pricing',
//     path: '',
//   },
//   {
//     name: 'Learn & Support',
//     path: '',
//   },
// ];


const meta = {
  title: 'Molecules/NavBar',
  component: Navbar,
  parameters: {
    controls: { expanded: true },
  },
  tags: ['autodocs'],
  
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
