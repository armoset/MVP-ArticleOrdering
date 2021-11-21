using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MVP_Article_Frontend.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class AuthorizationController : ControllerBase
    {
        [HttpGet(nameof(Login))]
        public ActionResult Login()
        {
            var isUsernameDelivered = HttpContext.Request.Headers.TryGetValue("Username", out StringValues username);
            var isPasswordDelivered = HttpContext.Request.Headers.TryGetValue("Password", out StringValues password);

            if (!isUsernameDelivered || !isPasswordDelivered)
                return new BadRequestResult();

            if (!(username == "Dustin" || username == "Armin"))
                return Unauthorized();

                List<Claim> claims = new List<Claim>();

                claims.Add(new Claim("Name", username));
                claims.Add(new Claim("Admin", true.ToString()));


            ClaimsIdentity identity = new ClaimsIdentity(claims);
            return Ok(GenerateToken(identity));
        }

        private string GenerateToken(ClaimsIdentity identity)
        {
            var mySecret = "asdsx4234^&%&^%&^hjsdsr2%%%";
            var mySecurityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(mySecret));

            var myIssuer = "MVP Article";
            var myAudience = "MVP Article";

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = identity,
                Expires = DateTime.UtcNow.AddDays(7),
                Issuer = myIssuer,
                Audience = myAudience,
                SigningCredentials = new SigningCredentials(mySecurityKey, SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
