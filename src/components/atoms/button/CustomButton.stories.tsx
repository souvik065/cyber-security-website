import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from './customButton';
// import {CustomIcon} from '../../atoms/custom-icon';

const meta = {
  title: 'Atoms/CustomButton',
  component: CustomButton,
  parameters: {
    controls: { expanded: true },
  },
  tags: ['autodocs'],

  argTypes: {
    color: { control: 'color' },
    variant: {
      control: 'select',
      options: ['text','primary', 'secondary', 'transparent'],
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    children: { control: 'select', options: ['Login', 'Google Account', 'Click me', 'Button'] },
    startIcon: { control: 'object' },
    endIcon: { control: 'object' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    type: { control: 'text' },
  },
} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    color: 'primary',
    variant: 'primary',
    size: 'medium',
    startIcon: '',
    endIcon: '',
    disabled: false,
    fullWidth: false,
    children: 'Button',
  },
};

export const SecondaryButton: Story = {
  args: {
    color: 'secondary',
    variant: 'secondary',
    size: 'small',
    startIcon: '',
    endIcon: '',
    disabled: false,
    fullWidth: false,
    children: 'Button',
  },
};



export const TransparentButton: Story = {
  args: {
    color: 'customBlack',
    children: 'Google Account',
    variant: 'transparent',
    size: 'small',
    //startIcon: <CrewIcon icon={`google`} />,
    endIcon: '',
    disabled: false,
    fullWidth: false,
  },
};
