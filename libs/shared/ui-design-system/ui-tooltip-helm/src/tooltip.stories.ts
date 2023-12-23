import { Component, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { radixPlus } from '@ng-icons/radix-icons';
import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmTooltipComponent } from './lib/hlm-tooltip.component';
import { BrnTooltipContentDirective } from '@spartan-ng/ui-tooltip-brain';
import { HlmTooltipTriggerDirective } from './lib/hlm-tooltip-trigger.directive';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

const meta: Meta<HlmTooltipComponent> = {
  title: 'Tooltip',
  component: HlmTooltipComponent,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [
        HlmButtonDirective,
        HlmTooltipComponent,
        BrnTooltipContentDirective,
        HlmTooltipTriggerDirective,
        HlmIconComponent,
      ],
      providers: [provideIcons({ radixPlus })],
    }),
  ],
};

export default meta;
type Story = StoryObj<HlmTooltipComponent>;
export const Default: Story = {
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['above', 'below', 'left', 'right'],
      defaultValue: 'above',
    },
  },
  render: ({ ...args }) => ({
    props: args,
    template: `
<div class='p-40'>
  <hlm-tooltip>
    <button hlmTooltipTrigger ${argsToTemplate(
      args,
    )} aria-describedby='Hello world' hlmBtn variant='outline'>Test</button>
    <span *brnTooltipContent class='flex items-center'>
      Add to library <hlm-icon class='ml-2' size='sm' name='radixPlus'/>
     </span>
  </hlm-tooltip>
</div>
`,
  }),
};

@Component({
  selector: 'disabled-tooltip-story',
  standalone: true,
  imports: [
    HlmButtonDirective,
    HlmTooltipComponent,
    BrnTooltipContentDirective,
    HlmTooltipTriggerDirective,
    HlmIconComponent,
  ],
  providers: [provideIcons({ radixPlus })],
  template: `
    <div class="p-40">
      <hlm-tooltip>
        <button
          (click)="disabled.set(!disabled())"
          hlmTooltipTrigger
          [hlmTooltipDisabled]="disabled()"
          aria-describedby="Hello world"
          hlmBtn
          variant="outline"
        >
          Test
        </button>
        <span *brnTooltipContent class="flex items-center">
          Add to library
          <hlm-icon class="ml-2" size="sm" name="radixPlus" />
        </span>
      </hlm-tooltip>
      <p>{{ disabled() ? 'disabled' : 'enabled' }}</p>
    </div>
  `,
})
class DisabledTooltip {
  protected readonly disabled = signal(false);
}

export const Disabled: Story = {
  render: () => ({
    moduleMetadata: {
      imports: [DisabledTooltip],
    },
    template: `<disabled-tooltip-story/>`,
  }),
};
