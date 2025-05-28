using API_Itau_Pratica.Persistance;
using API_Itau_Pratica;
using API_Itau_Pratica.Application;
using API_Itau_Pratica.Domain;
using API_Itau_Pratica.Controllers;
using API_Itau_Pratica.Application.Services;
using API_Itau_Pratica.Persistance.Repositories;

var builder = WebApplication.CreateBuilder(args);

var service = builder.Services;
// Add services to the container.



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
service.AddEndpointsApiExplorer();
service.AddSwaggerGen();

service.AddSingleton<transacaoRepository>();
service.AddSingleton<estatisticaRepository>();

service.AddScoped<transacaoService>();
service.AddScoped<estatisticaService>();


var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();


//NÃO ESQUECER DE INSTANCIAR AS CLASSES E COLOCAR O ACESSO A MEMORIA LOCAL