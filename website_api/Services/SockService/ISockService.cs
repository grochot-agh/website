using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Services.SockService
{
    public interface ISockService
    {
        Task<List<Sock>?> GetSocks();
        Task<Sock?> GetSock(int id);
        Task<List<Sock>?> PutSock(int id, Sock sock);
        Task<List<Sock>?> PostSock(Sock sock);
        Task<List<Sock>?> DeleteSock(int id);
    }
}