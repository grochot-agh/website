

using website.Services.CartSocksService;

namespace website.Services.SockService
{
    public class SockService : ISockService
    {
        private readonly DataContext _context;
        private readonly ICartSocksService _cartSocksService;
        public SockService(DataContext context, ICartSocksService cartDTOService)
        {
            _context = context;
            _cartSocksService = cartDTOService;
        }

       public async Task<List<Sock>?> GetSocks()
       {
            var socks = await _context.Socks.ToListAsync();
            
            if(socks==null)
            {
                return null;
            }
            
            return socks;
       }
        public async Task<Sock?> GetSock(int id)
        {
            var sock = await _context.Socks.FindAsync(id);
            
            if(sock==null)
            {
                return null;
            }

            return sock;
        }

        public async Task<List<Sock>?> PutSock(int id, Sock request)
        {
            var sock = await _context.Socks.FindAsync(id);
            
            if (sock==null)
            {
                return null;
            }

            sock.Length = request.Length;
            sock.Name = request.Name;
            sock.Color = request.Color;
            sock.Material = request.Material;
            sock.Price =request.Price;
            sock.Image = request.Image;

            await _context.SaveChangesAsync();
            return await _context.Socks.ToListAsync();

        }

        public async Task<List<Sock>?> PostSock(Sock sock)
        {
            sock.Image = "Images/"+sock.Image;
            _context.Socks.Add(sock);
            await _context.SaveChangesAsync();
            return await _context.Socks.ToListAsync();
        }
        public async Task<List<Sock>?> DeleteSock(int id)
        { 
            var sock = await _context.Socks.FindAsync(id);
            if (sock == null)
            {
                return null;
            }
            await _cartSocksService.DeleteAllCartSocksBySockId(id);
            _context.Socks.Remove(sock);
            await _context.SaveChangesAsync();

            return await _context.Socks.ToListAsync();
        }
    
    }
}