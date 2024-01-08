import { FormsModule } from '@angular/forms';
import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { HlmInputDirective } from './lib/hlm-input.directive';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

const meta: Meta<HlmInputDirective> = {
  title: 'Atom/Input',
  component: HlmInputDirective,
  tags: ['autodocs'],
  args: {
    size: 'default',
    error: 'auto',
  },
  argTypes: {
    size: {
      options: ['default', 'sm', 'lg'],
      control: {
        type: 'select',
      },
    },
    error: {
      options: ['auto', 'true'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [HlmInputDirective, HlmButtonDirective, FormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<HlmInputDirective>;

export const Default: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
    <input aria-label='Email' class='w-80' hlmInput ${argsToTemplate(
      args,
    )} type='email' placeholder='Email'/>
    `,
  }),
};

export const File: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <input class='w-80' hlmInput ${argsToTemplate(
        args,
      )} id="picture" type="file" />
    </div>`,
  }),
};

export const Disabled: Story = {
  render: ({ ...args }) => ({
    props: args,
    template: `
    <input aria-label='Email' disabled class='w-80' hlmInput ${argsToTemplate(
      args,
    )} type='email' placeholder='Email'/>
    `,
  }),
};

export const Required: Story = {
  render: ({ ...args }) => ({
    props: { value: '', ...args },
    template: `
    <input aria-label='Email *' [(ngModel)]="value" class='w-80' hlmInput ${argsToTemplate(
      args,
    )} type='email' required placeholder='Email *'/>
    `,
  }),
};

export const Error: Story = {
  render: ({ ...args }) => ({
    props: { ...args, error: 'true' },
    template: `
    <input aria-label='Email' class='w-80' hlmInput ${argsToTemplate(
      args,
    )} type='email' placeholder='Email' />
    `,
  }),
};

export const WithButton: Story = {
  name: 'With Button',
  render: ({ ...args }) => ({
    props: args,
    template: `
    <div class="flex w-full max-w-sm items-center space-x-2">
    <input aria-label='Email' class='w-80' hlmInput ${argsToTemplate(
      args,
    )} type='email' placeholder='Email'/>
    <button hlmBtn>Subscribe</button>
    </div>
    `,
  }),
};
