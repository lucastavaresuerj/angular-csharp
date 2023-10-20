using API.Models.Domain;

namespace API.DTO {
  public class CreateCategoryRequestDto {
    public required string Name { get; set; }
    public required string UrlHandler { get; set; }

    public Category ToDomain() {
      return new Category {
        Name = Name,
        UrlHandler = UrlHandler
      };
    }
  }
}
