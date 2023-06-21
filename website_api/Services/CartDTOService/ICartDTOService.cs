namespace website.Services.CartDTOService
{
    public interface ICartDTOService
    {
        Task<List<CartSocks>?> GetSocksFromUserCart(int id);
        Task<CartSocks?> AddSocksToUserCart(int id,int sockid);
        Task<List<CartSocks>?> DeleteAllFromCart(int cartid);
        Task<CartSocks?> DeleteOneFromCart(int cartid, int sockid);

    }
}