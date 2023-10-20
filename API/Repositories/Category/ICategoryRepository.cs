using API.Models.Domain;

namespace APi.Repositories.Interface {
  public interface ICategoryRepository {
    public Task<Category> CreateAsync(Category category);
    public Task<IEnumerable<Category>> GetAllAsync();

    public Task<Category?> GetByIdAsync(Guid id);

    public Task<Category?> UpdateAsync(Category category);

    public Task<Category?> DeleteByIdAsync(Guid id);

  }
}