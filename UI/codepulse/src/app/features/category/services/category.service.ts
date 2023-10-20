import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { ICategory } from '../models/category.model';
import { EditCategoryRequest } from '../models/edit-category-request.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private BASE_URL = environment.baseUrl;
  constructor(private _httpClient: HttpClient) {}

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this._httpClient.post<void>(
      `${this.BASE_URL}/api/Categories`,
      model
    );
  }

  getAllCategories(): Observable<ICategory[]> {
    return this._httpClient.get<ICategory[]>(`${this.BASE_URL}/api/Categories`);
  }

  getCategoryById(id: string): Observable<ICategory> {
    return this._httpClient.get<ICategory>(
      `${this.BASE_URL}/api/Categories/${id}`
    );
  }

  editCategoryById(
    id: string,
    model: EditCategoryRequest
  ): Observable<ICategory> {
    return this._httpClient.put<ICategory>(
      `${this.BASE_URL}/api/Categories/${id}`,
      model
    );
  }

  deleteCategoryById(id: string): Observable<ICategory> {
    return this._httpClient.delete<ICategory>(
      `${this.BASE_URL}/api/Categories/${id}`
    );
  }
}
