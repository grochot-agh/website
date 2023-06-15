using Microsoft.EntityFrameworkCore;

namespace website.Models;

public class SockContext : DbContext
{
    public SockContext(DbContextOptions<SockContext> options)
        : base(options)
    {
    }

    public DbSet<Sock> Socks { get; set; } = null!;
}