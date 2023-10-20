using APi.Repositories.Interface;
using API.Data;
using API.DTO;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers {
  [Route("api/[controller]")]
  [ApiController]
  public class CategoriesController : ControllerBase {
    private readonly ICategoryRepository _categoryRepository;
    public CategoriesController(ICategoryRepository categoryRepository) {
      _categoryRepository = categoryRepository;
    }

    [HttpPost]
    public async Task<IActionResult> CreateCategory(CreateCategoryRequestDto request) {
      var category = request.ToDomain();

      await _categoryRepository.CreateAsync(category);

      return Ok(category.ToDto());
    }

    [HttpGet]
    public async Task<IActionResult> GetAllCategories() {
      Console.WriteLine("aqui");
      var categories = await _categoryRepository.GetAllAsync();

      var response = new List<CategoryDto>();

      foreach (var category in categories) {
        response.Add(category.ToDto());
      }

      return Ok(response);
    }

    [HttpGet]
    [Route("{id:Guid}")]
    public async Task<IActionResult> GetById([FromRoute] Guid id) {
      var category = await _categoryRepository.GetByIdAsync(id);

      if (category is null) {
        return NotFound();
      }

      return Ok(category.ToDto());

    }

    [HttpPut]
    [Route("{id:Guid}")]
    public async Task<IActionResult> UpdateCategory([FromRoute] Guid id, [FromBody] UpdateCategoryRequestDto request) {
      var category = await _categoryRepository.UpdateAsync(request.ToDomain(id));

      if (category is null) {
        return NotFound();
      }

      return Ok(category.ToDto());

    }

    [HttpDelete]
    [Route("{id:Guid}")]
    public async Task<IActionResult> DeleteCategory([FromRoute] Guid id) {
      var category = await _categoryRepository.DeleteByIdAsync(id);

      if (category is null) {
        return NotFound();
      }

      return Ok(category.ToDto());
    }
  }
}


