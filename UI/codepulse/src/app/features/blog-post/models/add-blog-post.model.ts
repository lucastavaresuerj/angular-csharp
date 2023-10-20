export interface IAddBlogPostRequest {
  title: string;
  shortDescription: string;
  content: string;
  featuredImageUrl: string;
  urlHandler: string;
  author: string;
  publishedDate: Date;
  isVisible: boolean;
}

export class AddBlogPostRequest implements IAddBlogPostRequest {
  title: string;
  shortDescription: string;
  content: string;
  featuredImageUrl: string;
  urlHandler: string;
  author: string;
  publishedDate: Date;
  isVisible: boolean;

  constructor({
    title,
    shortDescription,
    content,
    featuredImageUrl,
    urlHandler,
    author,
    publishedDate,
    isVisible,
  }: IAddBlogPostRequest) {
    this.title = title ?? '';
    this.shortDescription = shortDescription ?? '';
    this.content = content ?? '';
    this.featuredImageUrl = featuredImageUrl ?? '';
    this.urlHandler = urlHandler ?? '';
    this.author = author ?? '';
    this.publishedDate = publishedDate ?? new Date();
    this.isVisible = isVisible ?? false;
  }
}
