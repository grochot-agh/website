namespace website.Services.CartService
{
    public class CartService : ICartService
    {
        private readonly DataContext _context;
        private readonly ICartDTOService _cartDTOService;
        public CartService(DataContext context, ICartDTOService cartDTOService)
        {
            _context = context;
            _cartDTOService = cartDTOService;
        }

        public async Task<Cart?> GetCart(int id)
        {
            var cart = await _context.Carts.FindAsync(id);
            if (cart == null)
            {
                return null;
            }
            await _cartDTOService.GetSocks(cart.Id);
            

            return cart;
        }

        

        public async Task<List<Cart>?> PostCart(Cart cart)
        {
            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();
            return await _context.Carts.ToListAsync();
        }
        public async Task<List<Cart>?> DeleteCart(int id)
        { 
            var cart = await _context.Carts.FindAsync(id);
            if (cart == null)
            {
                return null;
            }

            _context.Carts.Remove(cart);
            await _context.SaveChangesAsync();

            return await _context.Carts.ToListAsync();
        }
    }
}