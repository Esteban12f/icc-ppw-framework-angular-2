import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {
  readonly brand = signal('PPW Angular');
  readonly showInfo = signal(false);

  readonly toggleLabel = computed(() => this.showInfo() ? 'Ocultar Info' : 'Mostrar Info');

  changeBrand(): void {
    this.brand.update((valor) => valor + '!');
  }

  resetBrand(): void {
    this.brand.set('PPW Angular');
  }

  toggleInfo(): void {
    this.showInfo.update((value) => !value);
  }

}
