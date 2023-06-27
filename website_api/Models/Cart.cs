namespace website.Models;
public class Cart
{
    public int Id { get; set; }
    public List<Sock> Socks { get; set; } = new List<Sock>();//cos nie tak
    public int Sum { get; set; }
    
}