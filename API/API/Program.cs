using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Models;
using Models.Tables.Identity;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddIdentity<ApplicationUser, ApplicationRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders()
    .AddUserStore<UserStore<ApplicationUser, ApplicationRole, ApplicationDbContext, Guid>>()
    .AddRoleStore<RoleStore<ApplicationRole, ApplicationDbContext, Guid>>();

builder.Services.AddCors(options =>
options.AddDefaultPolicy(builder => builder.WithOrigins("http://localhost:4200")
    .WithHeaders("Authorization", "origin", "accept", "content-type")
    .WithMethods("GET", "POST", "DELETE", "PUT")
));

builder.Services.AddControllers();

var app = builder.Build();

app.UseStaticFiles();

IServiceScopeFactory serviceScopeFactory = app.Services.GetRequiredService<IServiceScopeFactory>();
using (IServiceScope scope = serviceScopeFactory.CreateScope())
{
    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<ApplicationRole>>();
    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();

    if (!await roleManager.RoleExistsAsync("Admin"))
    {
        var role = new ApplicationRole();
        role.Name = "Admin";
        await roleManager.CreateAsync(role);
    }

    if (await userManager.FindByNameAsync("Admin") == null)
    {
        var user = new ApplicationUser();
        user.UserName = "aatman50@gmail.com";
        user.Name = "Admin50";
        user.Email = "aatman50@gmail.com";
        user.Role = "Admin";
        var userPassword = "Aatman50@";
        var chkUser = await userManager.CreateAsync(user, userPassword);
        if (chkUser.Succeeded)
        {
            await userManager.AddToRoleAsync(user, "Admin");
        }
    }
}

// Configure the HTTP request pipeline.

app.UseAuthorization();

app.MapControllers();

app.Run();
