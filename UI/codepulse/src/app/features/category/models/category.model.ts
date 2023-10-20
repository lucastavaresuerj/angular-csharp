import { EditCategoryRequest } from './edit-category-request.model';

export interface ICategory {
  id: string;
  name: string;
  urlHandler: string;
}

export class Category implements ICategory {
  id!: string;
  name!: string;
  urlHandler!: string;

  constructor({ id, name, urlHandler }: ICategory) {
    this.id = id;
    this.name = name;
    this.urlHandler = urlHandler;
  }

  static fromRemote(params: ICategory) {
    return new Category(params);
  }

  toRemoteEdit() {
    return new EditCategoryRequest({
      name: this.name,
      urlHandler: this.urlHandler,
    });
  }
}
