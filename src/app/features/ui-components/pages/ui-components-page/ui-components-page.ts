import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FeatureChipList } from './Components/feature-chip-list/feature-chip-list';
import { GradientCtaBanner } from './Components/gradient-cta-banner/gradient-cta-banner';
import { GlassStatCard } from './Components/glass-stat-card/glass-stat-card';


@Component({
  selector: 'app-ui-components-page',
  imports: [GlassStatCard, GradientCtaBanner, FeatureChipList],
  templateUrl: './ui-components-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponentsPage {
  readonly quickChips = [
    'Glass Surface',
    'Gradient CTA',
    'Responsive Grid',
    'Standalone Components',
    'Tailwind + DaisyUI',
  ];
}
