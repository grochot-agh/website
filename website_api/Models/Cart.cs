namespace website.Models;
public class Cart
{
    public int Id { get; set; }
    public List<Sock>? Socks { get; set; } = null;
    public int Sum { get; set; }
    
}