import { Component } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import toPromise from 'src/app/utils/observableToPromise';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent {
  model: AddCategoryRequest;

  constructor(
    private _categoryService: CategoryService,
    private _router: Router
  ) {
    this.model = new AddCategoryRequest({
      name: '',
      urlHandler: '',
    });
  }

  async onSubmit() {
    await toPromise(this._categoryService.addCategory(this.model));

    this._router.navigateByUrl('admin/categories');
    this._categoryService.getAllCategories();
  }
}
