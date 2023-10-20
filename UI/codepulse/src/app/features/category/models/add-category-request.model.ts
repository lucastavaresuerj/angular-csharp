export interface IAddCategoryRequest {
  name: string;
  urlHandler: string;
}

export class AddCategoryRequest implements IAddCategoryRequest {
  name: string;
  urlHandler: string;

  constructor({ name, urlHandler }: IAddCategoryRequest) {
    this.name = name;
    this.urlHandler = urlHandler;
  }
}
