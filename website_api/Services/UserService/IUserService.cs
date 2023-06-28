namespace website.Services.UserService
{
    public interface IUserService
    {
        Task<List<User>?> GetUsers();
        Task<User?> GetUser(int id);
        Task<List<User>?> PutUser(int id, User user);
        Task<List<User>?> PostUser(User user);
        Task<List<User>?> DeleteUser(int id);
    }
}