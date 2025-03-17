import type { Meta, StoryObj } from '@storybook/react';
import InputField from "./InputField";
import { object } from 'yup';
import CustomIcon from '../custom-icon/CustomIcon';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const meta = {
  title: "Atoms/InputField",
  component: InputField,
  parameters: {
    controls: { expanded: true },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    startIcon: { control: object },
    endIcon: { control: 'text' },
    onEndIconClick: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    labelVariant: { control: 'select',
    options: ["caption",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "title1",
    "title2",
    "body",
    "caption"], },
    value: { control: 'text' },
    increasedHeight:{control: 'boolean'}
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Hostel: Story = {
  args: {
    label: 'First name',
    placeholder: 'First name',
    error: false,
    errorMessage: 'First name is required',
    id: 'id',
    labelVariant: 'title2',
  },
};

export const Floor: Story = {
  args: {
    label: 'Last name',
    placeholder: 'Last name',
    error: false,
    errorMessage: 'Last name is required',
    id: 'id',
    labelVariant: 'title2',
  },
};

export const LoginEmail: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your Email',
    error: false,
    errorMessage: 'Email is required',
    id: 'id',
    labelVariant: 'title2',
    increasedHeight: true
  },
};

export const LoginEmailWithIcon: Story = {
    args: {
      label: 'Email',
      placeholder: 'Enter your Email',
      error: false,
      startIcon: <CustomIcon icon={faEnvelope}/>,
      errorMessage: 'Email is required',
      id: 'id',
      labelVariant: 'title2',
      increasedHeight: true
    },
  };