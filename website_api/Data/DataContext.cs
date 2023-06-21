using Microsoft.EntityFrameworkCore;

namespace website.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){

        }


        public DbSet<Sock> Socks => Set<Sock>();
        public DbSet<User> Users => Set<User>();
        public DbSet<Cart> Carts => Set<Cart>();
        public DbSet<CartSocks> CartSocks=> Set<CartSocks>();
    }
}