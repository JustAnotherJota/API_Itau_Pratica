using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace API_Itau_Pratica.Controllers 
{
    [ApiController]
    [Route("[Controller]")]
    public class transacaoController : ControllerBase
    {
        transacaoService _transacaoService;
        public transacaoController(transacaoService transacaoservice) 
        {
            _transacaoService = transacaoservice;
        }

        [HttpPost("fazendoTransacao")]
        public IActionResult FazendoTransacao([FromBody]double valor, DateTime dateTime) 
        {
            var resultado = _transacaoService.FazendoTransacao(valor, dateTime);
            return Ok(resultado);
        }

        [HttpDelete("deletandoTransacao")]
        public IActionResult DeletandoTransacao([FromBody]int id) 
        {
            var resultado = _transacaoService.DeletandoTransacao(id);
            return Ok(resultado);
        }
    }
}