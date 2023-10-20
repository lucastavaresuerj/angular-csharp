export interface IEditCategoryRequest {
  name?: string;
  urlHandler?: string;
}

export class EditCategoryRequest implements IEditCategoryRequest {
  name?: string;
  urlHandler?: string;

  constructor({ name, urlHandler }: IEditCategoryRequest) {
    this.name = name;
    this.urlHandler = urlHandler;
  }
}
