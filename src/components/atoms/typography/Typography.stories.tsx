import type { Meta, StoryObj } from '@storybook/react';
import TypographyStyles from './TypographyStyles';

const meta = {
  title: 'Atoms/TypographyStyles',
  component: TypographyStyles,
  parameters: {
    controls: { expanded: true },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'overline'],
    },
  },
} as Meta<typeof TypographyStyles>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'body',
    children: 'Hello',
  },
};