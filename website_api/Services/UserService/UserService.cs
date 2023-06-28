using website.Services.CartSocksService;

namespace website.Services.UserService

{
    public class UserService : IUserService
    {
        private readonly DataContext _context;
        private readonly ICartService _cartService;
        private readonly ICartDTOService _cartDTOService;
        
        public UserService(DataContext context,ICartService cartService, ICartDTOService cartDTOService)
        {
            _context = context;
            _cartService = cartService;
            _cartDTOService = cartDTOService;
            
        }

       public async Task<List<User>?> GetUsers()
       {
            var users = await _context.Users.ToListAsync();
            
            if(users==null)
            {
                return null;
            }
            
            return users;
       }
        public async Task<User?> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            
            if(user==null)
            {
                return null;
            }

            return user;
        }

        public async Task<List<User>?> PutUser(int id, User request)
        {
            var user = await _context.Users.FindAsync(id);
            
            if (user==null)
            {
                return null;
            }

            user.Name = request.Name;
            user.Surname=request.Surname;
            user.Email = request.Email;
            user.Password = request.Password;
            user.Email=request.Email;
            user.Age=request.Age;
            
            await _context.SaveChangesAsync();
            return await _context.Users.ToListAsync();

        }

        public async Task<List<User>?> PostUser(User user)
        {   
            Cart cart = new();
            await _cartService.PostCart(cart);
            user.CartId=cart.Id;
            _context.Users.Add(user);
           
            await _context.SaveChangesAsync();
            return await _context.Users.ToListAsync();
        }
        public async Task<List<User>?> DeleteUser(int id)
        { 
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return null;
            }
            var cartid = user.CartId;

            _context.Users.Remove(user);
            await _cartService.DeleteCart(cartid);
            await _cartDTOService.DeleteAllCartSocksByCartId(cartid);

            await _context.SaveChangesAsync();
            
            return await _context.Users.ToListAsync();
        }
    }
}