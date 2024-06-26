import {
  radixExclamationTriangle,
  radixInfoCircled,
} from '@ng-icons/radix-icons';
import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { HlmAlertDirective } from './lib/hlm-alert.directive';
import { HlmAlertImports } from './index';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';

const meta: Meta<HlmAlertDirective> = {
  title: 'Alert',
  component: HlmAlertDirective,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'destructive'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [HlmAlertImports, HlmIconComponent],
      providers: [provideIcons({ radixInfoCircled, radixExclamationTriangle })],
    }),
  ],
  render: ({ ...args }) => ({
    props: args,
    template: `
     <div class='max-w-xl' hlmAlert ${argsToTemplate(args)}>
      <hlm-icon name='radixInfoCircled' hlmAlertIcon />
      <h4 hlmAlertTitle>Introducing SPARTAN helm & brain</h4>
      <p hlmAlertDesc>
        The components used on this page are also the intial building blocks of a new UI library. It is made up of
        headless UI providers, the brain components/directives, which add ARIA compliant markup and interactions. On top
        of the brain we add helm(et) directives, which add shadcn-like styles to
        our application.
      </p>
    </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<HlmAlertDirective>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: ({ ...args }) => ({
    props: args,
    template: `
     <div hlmAlert class='max-w-xl' ${argsToTemplate(args)}>
      <hlm-icon name='radixExclamationTriangle' hlmAlertIcon />
      <h4 hlmAlertTitle>Something went wrong...</h4>
      <p hlmAlertDesc>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam at autem culpa debitis eius eveniet exercitationem, facilis illo magni mollitia, necessitatibus nesciunt quam quos recusandae tempore ullam velit veniam!
      </p>
     </div>
    `,
  }),
};
