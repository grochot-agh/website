global using Microsoft.EntityFrameworkCore;
global using website.Models;
global using website.Data;
global using website.Services.SockService;
global using website.Services.UserService;
global using website.Services.CartService;
global using website.Services.CartDTOService;
global using website.Services.CartSocksService;
global using System;
global using System.Drawing;
global using System.IO;
global using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddDbContext<DataContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ICartSocksService, CartSocksService>();
builder.Services.AddScoped<ISockService, SockService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<ICartService, CartService>();
builder.Services.AddScoped<ICartDTOService, CartDTOService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.UseCors(options =>
{
    options.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
});
app.UseHttpsRedirection();


app.MapControllers();

app.Run();
