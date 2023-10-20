import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category, ICategory } from '../models/category.model';
import toPromise from 'src/app/utils/observableToPromise';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories?: Category[];

  constructor(private _categoryService: CategoryService) {}

  async ngOnInit(): Promise<void> {
    this.categories = (
      await toPromise(this._categoryService.getAllCategories())
    ).map((category: ICategory) => Category.fromRemote(category));
  }
}
