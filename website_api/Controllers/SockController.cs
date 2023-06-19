using Microsoft.AspNetCore.Mvc;

namespace website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SockController : ControllerBase
    {
        private readonly ISockService _sockService;

        public SockController(ISockService sockService)
        {
            _sockService = sockService;
        }

        // GET: api/Sock
        // [HttpGet]
        // public async Task<ActionResult<IEnumerable<Sock>>> GetSocks()
        // {
        //   if (_context.Socks == null)
        //   {
        //       return NotFound();
        //   }
        //     return await _context.Socks.ToListAsync();
        // }

        // // GET: api/Sock/5
        // [HttpGet("{id}")]
        // public async Task<ActionResult<Sock>> GetSock(int id)
        // {
        //   if (_context.Socks == null)
        //   {
        //       return NotFound();
        //   }
        //     var sock = await _context.Socks.FindAsync(id);

        //     if (sock == null)
        //     {
        //         return NotFound();
        //     }

        //     return sock;
        // }

        // // PUT: api/Sock/5
        // // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        // [HttpPut("{id}")]
        // public async Task<IActionResult> PutSock(int id, Sock sock)
        // {
        //     if (id != sock.Id)
        //     {
        //         return BadRequest();
        //     }

        //     _context.Entry(sock).State = EntityState.Modified;

        //     try
        //     {
        //         await _context.SaveChangesAsync();
        //     }
        //     catch (DbUpdateConcurrencyException)
        //     {
        //         if (!SockExists(id))
        //         {
        //             return NotFound();
        //         }
        //         else
        //         {
        //             throw;
        //         }
        //     }

        //     return NoContent();
        // }

        // // POST: api/Sock
        // // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        // [HttpPost]
        // public async Task<ActionResult<Sock>> PostSock(Sock sock)
        // {
        //   if (_context.Socks == null)
        //   {
        //       return Problem("Entity set 'SockContext.Socks'  is null.");
        //   }
        //     _context.Socks.Add(sock);
        //     await _context.SaveChangesAsync();

        //     return CreatedAtAction("GetSock", new { id = sock.Id }, sock);
        // }

        // // DELETE: api/Sock/5
        // [HttpDelete("{id}")]
        // public async Task<IActionResult> DeleteSock(int id)
        // {
        //     if (_context.Socks == null)
        //     {
        //         return NotFound();
        //     }
        //     var sock = await _context.Socks.FindAsync(id);
        //     if (sock == null)
        //     {
        //         return NotFound();
        //     }

        //     _context.Socks.Remove(sock);
        //     await _context.SaveChangesAsync();

        //     return NoContent();
        // }

        // private bool SockExists(int id)
        // {
        //     return (_context.Socks?.Any(e => e.Id == id)).GetValueOrDefault();
        // }
    }
}
