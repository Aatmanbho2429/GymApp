using Microsoft.AspNetCore.Identity;
using Models.DTO.Request;
using Models.DTO.Response;
using Models.Tables.Identity;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Services.Service
{
    public class UserService
    {
        private readonly ApplicationDbContext _db;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public UserService(ApplicationDbContext db, UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager, SignInManager<ApplicationUser> signInManager)
        {
            _db = db;
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
        }

        public async Task<UserResponse> deleteUser(Guid id)
        {
            ApplicationUser user = await _db.Users.FindAsync(id);
            if (user != null)
            {
                _db.Remove(user);
                await _db.SaveChangesAsync();
            }
            UserResponse userResponse = new UserResponse() { Name = user.Name, Email = user.Email, Id = user.Id };
            return userResponse;
        }

        public async Task<UserResponse> editUser(EditUser entity)
        {
            ApplicationUser user = await _db.Users.FindAsync(entity.Id);
            //await _db.UserRoles.FindAsync(entity.Id);
            UserResponse userResponse = new UserResponse();

            if (user != null)
            {
                user.Name = entity.Name;
                user.Email = entity.Email;
                user.Role = entity.Role;
                await _db.SaveChangesAsync();

                userResponse.Id = user.Id;
                userResponse.Name = user.Name;
                userResponse.Email = user.Email;
                return userResponse;
            }
            else
            {
                return null;
            }
        }

        public async Task<List<ApplicationUser>> getAllUser()
        {
            return await _db.Users.ToListAsync();
        }

        public async Task<ApplicationUser> getUser(Guid id)
        {
            if (id != null)
            {
                return await _db.Users.FindAsync(id);
            }
            else
            {
                return null;
            }
        }

        public async Task<UserResponse> postUser(PostUser entity)
        {
            ApplicationUser applicationUser = new ApplicationUser()
            {
                Name = entity.Name,
                UserName = entity.Email
            };

            UserResponse userResponse = new UserResponse();

            IdentityResult result = await _userManager.CreateAsync(applicationUser, entity.Password);
            if (result.Succeeded)
            {
                //Member
                if (entity.Role == "Member")
                {
                    if (await _roleManager.FindByNameAsync("Member") == null)
                    {
                        ApplicationRole role = new ApplicationRole() { Name = "Member" };
                        await _roleManager.CreateAsync(role);
                    }
                    await _userManager.AddToRoleAsync(applicationUser, "Member");
                    applicationUser.Role = "Member";
                    await _db.SaveChangesAsync();

                    userResponse.Email = applicationUser.Email;
                    userResponse.Name = applicationUser.Name;
                    userResponse.Id = applicationUser.Id;
                }
                //Trainer
                if (entity.Role == "Trainer")
                {
                    if (await _roleManager.FindByNameAsync("Trainer") == null)
                    {
                        ApplicationRole role = new ApplicationRole() { Name = "Trainer" };
                        await _roleManager.CreateAsync(role);
                    }
                    await _userManager.AddToRoleAsync(applicationUser, "Trainer");
                    applicationUser.Role = "Trainer";
                    await _db.SaveChangesAsync();
                    userResponse.Email = applicationUser.Email;
                    userResponse.Name = applicationUser.Name;
                    userResponse.Id = applicationUser.Id;

                }
            }
            return userResponse;
        }
    }
}
