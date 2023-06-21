using System.Linq;
using System.Security.Cryptography;

namespace website.Services.CartDTOService
{
    public class CartDTOService : ICartDTOService
    {
        private readonly DataContext _context;
        
         public CartDTOService(DataContext context)
        {
            _context = context;
        
        }




        public async Task<List<CartSocks>?> GetSocksFromUserCart(int id)
        {
            
            var cartSocks = _context.CartSocks.Where(cs => cs.CartId == id).ToList();
            await _context.SaveChangesAsync();

            return cartSocks;
        }
        public async Task<CartSocks?> AddSocksToUserCart(int id,int sockid)
    {
        var user = await _context.Users.FindAsync(id);
        if (user==null)
        {
            return null;
        }
        
        var cartid = user.CartId;

        var sock = await _context.Socks.FindAsync(sockid);
        if (sock==null)
        {
            return null;
        }
        var socki= sock.Id;
        
            CartSocks cartSocks = new()
            {
                CartId = cartid,
                SockId = socki
            };
        _context.CartSocks.Add(cartSocks);
        await _context.SaveChangesAsync();
        return cartSocks;
        }
        public async Task<List<CartSocks>?> DeleteAllFromCart(int cartid)
        {
            var cart = await _context.Carts.FindAsync(cartid);
            if (cart==null)
            {
                return null;
            }
            var cartSocks = await GetSocksFromUserCart(cartid);
            if(cartSocks==null)
            {
                return null;
            }
            _context.CartSocks.RemoveRange(cartSocks);
            
           

            await _context.SaveChangesAsync();
            return cartSocks;

        }
        public async Task<CartSocks?> DeleteOneFromCart(int cartid, int sockid)
        {
            var cart = await _context.Carts.FindAsync(cartid);
            if (cart==null)
            {
                return null;
            }
            var cartSock = await _context.CartSocks.FirstOrDefaultAsync(cs => cs.CartId == cartid && cs.SockId == sockid);
            if (cartSock == null)
            {
                return null;
            }

            _context.CartSocks.RemoveRange(cartSock);
            await _context.SaveChangesAsync();

            return cartSock;
        
        }
    }
}
