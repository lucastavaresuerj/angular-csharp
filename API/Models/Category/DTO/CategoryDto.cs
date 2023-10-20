namespace API.DTO {
  public class CategoryDto {
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public required string UrlHandler { get; set; }
  }
}

