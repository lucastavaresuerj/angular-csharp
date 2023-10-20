using API.DTO;

namespace API.Models.Domain {
  public class Category {
    public Guid Id { get; set; }

    public required string Name { get; set; }
    public required string UrlHandler { get; set; }

    public CategoryDto ToDto() {
      return new CategoryDto {
        Id = Id,
        Name = Name,
        UrlHandler = UrlHandler
      };
    }
  }

}
