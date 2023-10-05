using Models.DTO.Request;
using Models.DTO.Response;
using Models.Tables.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.IService
{
    public interface IUserService
    {
        public Task<List<ApplicationUser>> getAllUser();
        public Task<UserResponse> postUser(PostUser entity);
        public Task<UserResponse> deleteUser(Guid id);
        public Task<ApplicationUser> getUser(Guid id);
        public Task<UserResponse> editUser(EditUser entity);
    }
}
