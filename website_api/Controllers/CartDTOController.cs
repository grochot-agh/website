using Microsoft.AspNetCore.Mvc;

namespace website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartDTOController : ControllerBase
    {
        private readonly ICartDTOService _cartDTOService;

        public CartDTOController(ICartDTOService cartDTOService)
        {
            _cartDTOService = cartDTOService;
        }

        
        [HttpGet("{id}")]
        public async Task<ActionResult<List<CartSocks>>> GetSocksFromUserCart(int id)
        {
            var result = await _cartDTOService.GetCartSocksByCartId(id);
            
            if (result == null)
            {
                return NotFound("Socks not found :c");
            }

            return Ok(result);
        }

    
        [HttpPost]
        public async Task<ActionResult<List<CartSocks>>> AddSocksToUserCart(int id,int sockid)
        {
            var result = await _cartDTOService.AddSocksToUserCart(id,sockid);
            return Ok(result);
        }
        [HttpDelete("{cartid}")]
        public async Task<ActionResult<List<CartSocks>>> DeleteAllFromCart(int cartid)
        {
            var result = await _cartDTOService.DeleteAllCartSocksByCartId(cartid);
            if (result ==null)   
            {
                return NotFound("CartSocks with that id not found");
            }
            return Ok(result);
        }
        [HttpDelete("{cartid},{sockid}")]
        public async Task<ActionResult<CartSocks>> DeleteOneFromCart(int cartid,int sockid)
        {
            var result = await _cartDTOService.DeleteOneFromCart(cartid, sockid);
            if (result == null)
            {
                return NotFound("CartSocks not found");
            }
            return Ok(result);
        }

        

        
    }
}
