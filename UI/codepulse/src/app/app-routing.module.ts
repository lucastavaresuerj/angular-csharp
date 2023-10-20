import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { BlogPostListComponent } from './features/blog-post/blog-post-list/blog-post-list.component';
import { AddBlogPostComponent } from './features/blog-post/add-blog-post/add-blog-post.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'categories',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: CategoryListComponent,
          },
          {
            path: 'add',
            component: AddCategoryComponent,
          },
          {
            path: 'edit-category/:id',
            component: EditCategoryComponent,
          },
        ],
      },
      {
        path: 'blog-post',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: BlogPostListComponent,
          },
          {
            path: 'add',
            component: AddBlogPostComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
