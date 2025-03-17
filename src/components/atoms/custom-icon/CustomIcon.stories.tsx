import type { Meta, StoryObj } from '@storybook/react';
import CustomIcon from './CustomIcon';
import { faClose, faTrash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';



const icons = {
    Google: faGoogle,
    Close: faClose,
    Trash: faTrash,
    Envelope: faEnvelope,
  };

const meta = {
  title: 'Atoms/CustomIcon',
  component: CustomIcon,
  parameters: {
    controls: { expanded: true },
    darkMode: {
        current: 'dark', 
      },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
        control: 'select',
        options: Object.keys(icons),
        mapping: icons,
     },
    size: { 
        control: 'select',
        options: ['small', 'regular', 'medium', 'large']
    },
    sx: { control: 'text' },
  },
} as Meta<typeof CustomIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Brand: Story = {
    args: {
      icon: faGoogle,
      size: 'medium',
    },
  };

export const Close: Story = {
  args: {
    icon: faClose,
    size: 'medium',
  },
};

export const Trash: Story = {
  args: {
    icon: faTrash,
    size: 'medium',
  },
};

export const Envolope: Story = {
  args: {
    icon: faEnvelope,
    size: 'medium',
  },
};


