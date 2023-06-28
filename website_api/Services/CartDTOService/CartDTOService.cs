using System.Linq;
using System.Security.Cryptography;

namespace website.Services.CartDTOService
{
    public class CartDTOService : ICartDTOService
    {
        private readonly DataContext _context;
        private readonly ISockService _sockService;
        
         public CartDTOService(DataContext context, ISockService sockService)
        {
            _context = context;
            _sockService = sockService;
        
        }


        public async Task<List<Sock>?> GetSocks(int id)
        {

            var cartSockAssignments= await GetCartSocksByCartId(id); //update model :))
            
            var cart = await _context.Carts.FindAsync(id);
            var allsocks = await _sockService.GetSocks();
           


            if (cartSockAssignments == null || cart ==null || allsocks == null)
            {
                return null;
            }
             var cartsocks = cartSockAssignments.ToList();
             var allsockscopy = allsocks.ToList();

            var socks = cart.Socks;
            socks.Clear();
            foreach(CartSocks cs in cartsocks)
            {
                Sock? sock = null;
                for(int i=0; i<allsockscopy.Count; i++)
                {
                    
                    if (allsockscopy[i].Id == cs.SockId)
                    {
                        sock = allsockscopy[i];
                        break;
                    }
                }
                
                if (sock == null)
                {
                    return null;
                }
                socks.Add(sock);   
            }
            await _context.SaveChangesAsync();

            return socks;
        }

        public async Task<List<CartSocks>?> GetCartSocksByCartId(int id)
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
        var cart = await _context.Carts.FindAsync(cartid);
        if (cart==null)
        {
            return null;
        }
        cart.Sum += sock.Price;

        _context.CartSocks.Add(cartSocks);
        await _context.SaveChangesAsync();
        return cartSocks;
        }
        public async Task<List<CartSocks>?> DeleteAllCartSocksByCartId(int cartid)
        {
            var cart = await _context.Carts.FindAsync(cartid);
            if (cart==null)
            {
                return null;
            }

            var cartSocks = await GetCartSocksByCartId(cartid);
            if(cartSocks==null)
            {
                return null;
            }
            _context.CartSocks.RemoveRange(cartSocks);
            cart.Sum = 0;
            
           

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
            var sock = await _context.Socks.FindAsync(sockid);
            if (sock==null)
            {
                return null;
            }
            cart.Sum =- sock.Price;
            _context.CartSocks.RemoveRange(cartSock);
            await _context.SaveChangesAsync();

            return cartSock;
        
        }
    }
}
