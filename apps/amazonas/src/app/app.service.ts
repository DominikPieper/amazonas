import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendBaseUrl } from '@amazonas/shared/utils';
import { toSignal } from '@angular/core/rxjs-interop';

export type Category = {
  id: string;
  name: string;
  subcategories: { id: string; name: string }[];
};

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(BackendBaseUrl);

  public getCategories() {
    return toSignal(this.http.get<Category[]>(`${this.baseUrl}/categories`));
  }
}
