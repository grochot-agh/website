using Microsoft.AspNetCore.Mvc;

namespace website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }

        
        [HttpGet("{id}")]
        public async Task<ActionResult<Cart>> GetCart(int id)
        {
            var result = await _cartService.GetCart(id);
            
            if (result == null)
            {
                return NotFound("Cart not found :c");
            }

            return Ok(result);
        }

    
        [HttpPost]
        public async Task<ActionResult<List<Cart>>> PostCart(Cart cart)
        {
            var result = await _cartService.PostCart(cart);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Cart>>> DeleteCart(int id)
        {
            var result = await _cartService.DeleteCart(id);
            if (result ==null)   
            {
                return NotFound("Cart with that id not found");
            }
            return Ok(result);
        }

        
    }
}
