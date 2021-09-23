using System.Security.Claims;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Security
{
    public class UserAccessor : IUserAccessor
    {
        private readonly IHttpContextAccessor _context;
        public UserAccessor(IHttpContextAccessor context)
        {
            _context = context;
        }

        public string GetUsername()
        {
            return _context.HttpContext.User.FindFirstValue(ClaimTypes.Name);
        }
    }
}