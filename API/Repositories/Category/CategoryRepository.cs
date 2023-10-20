using APi.Repositories.Interface;
using API.Data;
using API.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories.Implementation {
  class CategoryRepository : ICategoryRepository {
    private readonly ApplicationDbContext _dbContext;

    public CategoryRepository(ApplicationDbContext dbContext) {
      _dbContext = dbContext;
    }

    public async Task<Category> CreateAsync(Category category) {
      await _dbContext.Categories.AddAsync(category);
      await _dbContext.SaveChangesAsync();

      return category;
    }

    public async Task<Category?> DeleteByIdAsync(Guid id) {
      var existingCategory = await _dbContext.Categories.FirstOrDefaultAsync(cat => cat.Id == id);

      if (existingCategory is null) {
        return null;
      }

      _dbContext.Categories.Remove(existingCategory);
      await _dbContext.SaveChangesAsync();
      return existingCategory;
    }

    public async Task<IEnumerable<Category>> GetAllAsync() {
      return await _dbContext.Categories.ToListAsync();
    }

    public async Task<Category?> GetByIdAsync(Guid id) {
      return await _dbContext.Categories.FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<Category?> UpdateAsync(Category category) {
      var existingCategory = await _dbContext.Categories.FirstOrDefaultAsync(cat => cat.Id == category.Id);

      if (existingCategory is null) {
        return null;
      }

      _dbContext.Categories.Entry(existingCategory).CurrentValues.SetValues(category);
      await _dbContext.SaveChangesAsync();
      return category;
    }
  }
}