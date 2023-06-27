namespace website.Models;
public class Sock
{
    public int Id { get; set; }
    public SockLength? Length { get; set; } // 4 typy dlugosci skarpetek 
    public string? Name { get; set; }
    public string? Color {get; set;}
    public string? Material {get; set;}
    public int Price { get; set;}
    public string? Image { get; set; }
    
}