namespace website.Services.CartSocksService
{
    public interface ICartSocksService
    {
        Task<List<CartSocks>?> GetCartSocksBySockId(int id);
        Task<List<CartSocks>?> DeleteAllCartSocksBySockId(int sockId);
        
    }
}