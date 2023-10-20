using API.Models.Domain;

namespace API.DTO {
  public class UpdateCategoryRequestDto {
    public required string Name { get; set; }
    public required string UrlHandler { get; set; }

    public Category ToDomain(Guid id) {
      return new Category {
        Id = id,
        Name = Name,
        UrlHandler = UrlHandler
      };
    }
  }
}
