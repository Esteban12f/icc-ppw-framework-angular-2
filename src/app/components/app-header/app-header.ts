import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {
  readonly brand = signal('PPW Angular');
  readonly showInfo = signal(false);

  readonly toggleLabel = computed(() => this.showInfo() ? 'Ocultar Info' : 'Mostrar Info');
uppercase: string | undefined;

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
