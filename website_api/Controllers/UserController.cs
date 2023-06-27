using Microsoft.AspNetCore.Mvc;
using website.Services.UserService;

namespace website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            var result = await _userService.GetUsers();
           if (result == null)
           {
              return NotFound("Users not found :c");
           }
            return Ok(result);
        }

    
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var result = await _userService.GetUser(id);
            
            if (result == null)
            {
                return NotFound("User not found :c");
            }

            return Ok(result);
        }

        
        [HttpPut("{id}")]
        public async Task<ActionResult<List<User>>> PutUser(int id, User user)
        {
            var result = await _userService.PutUser(id, user);
            if (result == null)
            {
                return NotFound("User with that id not found");
            }
            return Ok(result);
        }

        
        [HttpPost]
        public async Task<ActionResult<List<User>>> PostUser(User user)
        {
            var result = await _userService.PostUser(user);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<User>>> DeleteUser(int id)
        {
            var result = await _userService.DeleteUser(id);
            if (result ==null)   
            {
                return NotFound("User with that id not found");
            }
            return Ok(result);
        }

        
    }
}
