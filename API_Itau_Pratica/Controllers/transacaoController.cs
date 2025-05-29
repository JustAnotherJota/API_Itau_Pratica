using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Application.Services;
using API_Itau_Pratica.Domain.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace API_Itau_Pratica.Controllers 
{
    [ApiController]
    [Route("[Controller]")]
    public class transacaoController : ControllerBase
    {
        private readonly transacaoService _transacaoService;
        public transacaoController(transacaoService transacaoservice) 
        {
            _transacaoService = transacaoservice;
        }

        [HttpPost("fazendoTransacao")]
        public IActionResult FazendoTransacao([FromBody] postTransacao transacao) 
        {
            var resultado = _transacaoService.FazendoTransacao(transacao);
            return Ok(resultado);
        }

        [HttpDelete("deletandoTransacao/{id}")]
        public IActionResult DeletandoTransacao(int id) 
        {
            var resultado = _transacaoService.DeletandoTransacao(id);
            return Ok(resultado);
        }
    }
}