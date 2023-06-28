namespace website.Services.CartDTOService
{
    public interface ICartDTOService
    {
        Task<List<Sock>?> GetSocks(int id);
        Task<List<CartSocks>?> GetCartSocksByCartId(int id);
        Task<CartSocks?> AddSocksToUserCart(int id,int sockid);
        Task<List<CartSocks>?> DeleteAllCartSocksByCartId(int cartid);
        Task<CartSocks?> DeleteOneFromCart(int cartid, int sockid);
        

    }
}