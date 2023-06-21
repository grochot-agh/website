namespace website.Models;
public class Cart
{
    public int Id { get; set; }
    public List<CartSocks> Socks { get; set; } = new List<CartSocks>();//cos nie tak
    public int Sum { get; set; }
    
}