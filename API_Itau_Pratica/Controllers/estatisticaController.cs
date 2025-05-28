using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Application.Services;
using API_Itau_Pratica.Domain.Repostory;
using API_Itau_Pratica.Persistance.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace API_Itau_Pratica.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class estatisticaController : ControllerBase
    {
        private readonly estatisticaService _estatisticaService;
        public estatisticaController(estatisticaService estatisticaService) 
        {
            _estatisticaService = estatisticaService;
        }
        [HttpGet("GetEstatistica")]
        public IActionResult GetEstatistica() 
        {
            var resultado = _estatisticaService.GetEstatistica();
            return Ok(resultado);
        }
    }

}