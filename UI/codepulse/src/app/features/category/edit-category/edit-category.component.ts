import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import toPromise from 'src/app/utils/observableToPromise';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  category?: Category;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _categoryService: CategoryService
  ) {}

  async ngOnInit(): Promise<void> {
    const params = await toPromise(this._route.paramMap);
    const id = params.get('id');

    if (id) {
      this.category = Category.fromRemote(
        await toPromise(this._categoryService.getCategoryById(id))
      );
    }
  }

  async onSubmit() {
    if (this.category) {
      await toPromise(
        this._categoryService.editCategoryById(
          this.category.id,
          this.category.toRemoteEdit()
        )
      );

      this._router.navigateByUrl('/admin/categories');
    }
  }

  async onDelete() {
    if (this.category) {
      await toPromise(
        this._categoryService.deleteCategoryById(this.category.id)
      );
    }

    this._router.navigateByUrl('/admin/categories');
  }
}
