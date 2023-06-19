namespace website.Services.UserService

{
    public class UserService : IUserService
    {
        private readonly DataContext _context;
        public UserService(DataContext context)
        {
            _context = context;
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
            _context.Users.Add(user);
            user.UserCart = cart;
            
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

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return await _context.Users.ToListAsync();
        }
    }
}