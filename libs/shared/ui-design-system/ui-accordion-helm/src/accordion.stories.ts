import { radixChevronDown } from '@ng-icons/radix-icons';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import {
  BrnAccordionDirective,
  BrnAccordionImports,
} from '@spartan-ng/ui-accordion-brain';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { HlmAccordionDirective, HlmAccordionImports } from './index';

const meta: Meta<HlmAccordionDirective> = {
  title: 'Accordion',
  component: BrnAccordionDirective,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [BrnAccordionImports, HlmAccordionImports, HlmIconComponent],
      providers: [provideIcons({ radixChevronDown })],
    }),
  ],
};

export default meta;
type Story = StoryObj<HlmAccordionDirective>;

export const Default: Story = {
  render: () => ({
    template: `
      <div hlmAccordion>
        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
            Is it accessible?
            <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>Yes. It adheres to the WAI-ARIA design pattern.</brn-accordion-content>
        </div>

        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
            Is it styled?
            <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>
            Yes. It comes with default styles that match the other components' aesthetics.
          </brn-accordion-content>
        </div>

        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
            Is it animated?
            <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>
            Yes. It's animated by default, but you can disable it if you prefer.
          </brn-accordion-content>
        </div>
      </div>
    `,
  }),
};
export const TwoAccordions: Story = {
  render: () => ({
    template: `
      <div hlmAccordion>
        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
            Is it accessible?
            <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>Yes. It adheres to the WAI-ARIA design pattern.</brn-accordion-content>
        </div>

        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
            Is it styled?
            <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>
            Yes. It comes with default styles that match the other components' aesthetics.
          </brn-accordion-content>
        </div>

        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
            Is it animated?
            <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>
            Yes. It's animated by default, but you can disable it if you prefer.
          </brn-accordion-content>
        </div>
      </div>
      <div hlmAccordion>
        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
            Is it accessible?
            <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>Yes. It adheres to the WAI-ARIA design pattern.</brn-accordion-content>
        </div>

        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
            Is it styled?
            <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>
            Yes. It comes with default styles that match the other components' aesthetics.
          </brn-accordion-content>
        </div>

        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
            Is it styled?
            <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>
            Yes. It comes with default styles that match the other components' aesthetics.
          </brn-accordion-content>
        </div>

        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
              Is it styled?
              <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>
            Yes. It comes with default styles that match the other components' aesthetics.
          </brn-accordion-content>
        </div>

      </div>
    `,
  }),
};
