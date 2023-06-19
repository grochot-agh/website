using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace website.Services.SockService
{
    public class SockService : ISockService
    {

       public  Task<List<Sock>?> GetSocks()
       {
            throw new NotImplementedException();
       }
        public Task<Sock?> GetSock(int id)
        {
            throw new NotImplementedException();
        }
        public Task<List<Sock>?> PutSock(int id, Sock sock)
        {
            throw new NotImplementedException();
        }
        public Task<List<Sock>?> PostSock(Sock sock)
        {
            throw new NotImplementedException();
        }
        public Task<List<Sock>?> DeleteSock(int id)
        { 
            throw new NotImplementedException();
        }
    }
}