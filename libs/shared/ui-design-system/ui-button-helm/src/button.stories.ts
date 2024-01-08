import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { HlmButtonDirective } from './index';

const meta: Meta<HlmButtonDirective> = {
  title: 'Atom/Button',
  component: HlmButtonDirective,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [HlmButtonDirective],
    }),
  ],
  render: ({ ...args }) => ({
    props: args,
    template: `<button hlmBtn ${argsToTemplate(args)}>Click me</button>`,
  }),
};

export default meta;
type Story = StoryObj<HlmButtonDirective>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
  },
};
