using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.DTO.Request;
using Models.DTO.Response;
using Models.Tables.Identity;
using Services.IService;

namespace API.Controllers
{
    public class UserController : BaseController
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("getAllUsers")]
        public async Task<ActionResult<List<ApplicationUser>>> GetAllUser()
        {
            return await _userService.getAllUser();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ApplicationUser>> GetUser(string id)
        {
            Guid guidId = new Guid(id);
            return await _userService.getUser(guidId);
        }

        [HttpPost]
        public async Task<ActionResult<UserResponse>> PostUser(PostUser entity)
        {
            return await _userService.postUser(entity);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<UserResponse>> DeleteUser(string id)
        {
            Guid guidId = new Guid(id);
            return await _userService.deleteUser(guidId);
        }

        [HttpPut]
        public async Task<ActionResult<UserResponse>> EditUser(EditUser entity)
        {
            return await _userService.editUser(entity);
        }
    }
}
