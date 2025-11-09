import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

const Template = args => <Button {...args}>버튼</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 'md',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  loadingText: '처리중...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  iconLeft: <i className="ri-star-fill" />,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  iconRight: <i className="ri-arrow-right-line" />,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};
