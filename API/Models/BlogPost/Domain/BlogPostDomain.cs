namespace API.Models.Domain {
  public class BlogPost {
    public Guid Id { get; set; }

    public required string Title { get; set; }
    public required string ShortDescription { get; set; }
    public required string Content { get; set; }
    public required string FeaturedImageUrl { get; set; }
    public required string UrlHandler { get; set; }
    public DateTime PublishDate { get; set; }
    public required string Author { get; set; }
    public required bool IsVisible { get; set; }

  }
}

