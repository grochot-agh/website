namespace website.Services.CartService
{
    public interface ICartService
    {
        Task<Cart?> GetCart(int id);
        Task<List<Cart>?> PostCart(Cart cart);
        Task<List<Cart>?> DeleteCart(int id);
    }
}