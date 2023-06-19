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

        
        [HttpGet]
        public async Task<ActionResult<List<Sock>>> GetSocks()
        {
            var result = await _sockService.GetSocks();
           if (result == null)
           {
              return NotFound("Socks not found :c");
           }
            return Ok(result);
        }

    
        [HttpGet("{id}")]
        public async Task<ActionResult<Sock>> GetSock(int id)
        {
            var result = await _sockService.GetSock(id);
            
            if (result == null)
            {
                return NotFound("Sock not found :c");
            }

            return Ok(result);
        }

        
        [HttpPut("{id}")]
        public async Task<ActionResult<List<Sock>>> PutSock(int id, Sock sock)
        {
            var result = await _sockService.PutSock(id, sock);
            if (result == null)
            {
                return NotFound("Sock with that id not found");
            }
            return Ok(result);
        }

        
        [HttpPost]
        public async Task<ActionResult<List<Sock>>> PostSock(Sock sock)
        {
            var result = await _sockService.PostSock(sock);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Sock>>> DeleteSock(int id)
        {
            var result = await _sockService.DeleteSock(id);
            if (result ==null)   
            {
                return NotFound("Sock with that id not found");
            }
            return Ok(result);
        }

        
    }
}
