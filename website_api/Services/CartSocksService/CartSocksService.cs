namespace website.Services.CartSocksService
{
    public class CartSocksService : ICartSocksService
    {
        private readonly DataContext _context;
        public CartSocksService(DataContext context)
        {
            _context = context;
        }
             public async Task<List<CartSocks>?> GetCartSocksBySockId(int id)
        {
            
            var cartSocks = _context.CartSocks.Where(cs => cs.SockId == id).ToList();

       
            
            await _context.SaveChangesAsync();

            return cartSocks;
        }
        public async Task<List<CartSocks>?> DeleteAllCartSocksBySockId(int sockId)
        {
            var sock = await _context.Socks.FindAsync(sockId);
            var cartSocks = await GetCartSocksBySockId(sockId);
            if(cartSocks==null || sock == null)
            {
                return null;
            }
            foreach(CartSocks cs in cartSocks)
            {
                var cart = await _context.Carts.FindAsync(cs.CartId);
                if (cart==null)
                {
                   return null;
                }
                cart.Sum -= sock.Price;
            }
            _context.CartSocks.RemoveRange(cartSocks);
            
            
           

            await _context.SaveChangesAsync();
            return cartSocks;

        }
    }
}