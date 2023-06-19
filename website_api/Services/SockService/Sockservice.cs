using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Services.SockService
{
    public class SockService : ISockService
    {
        private readonly DataContext _context;
        public SockService(DataContext context)
        {
            _context = context;
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
            sock.Maretial = request.Maretial;
            sock.Price =request.Price;

            await _context.SaveChangesAsync();
            return await _context.Socks.ToListAsync();

        }

        public async Task<List<Sock>?> PostSock(Sock sock)
        {
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

            _context.Socks.Remove(sock);
            await _context.SaveChangesAsync();

            return await _context.Socks.ToListAsync();
        }
    }
}