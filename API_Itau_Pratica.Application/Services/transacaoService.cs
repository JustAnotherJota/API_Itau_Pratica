using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Domain.Dtos;
using API_Itau_Pratica.Persistance.Repositories;

namespace API_Itau_Pratica.Application.Services
{
    public class transacaoService
    {
        private readonly transacaoRepository _transacaoRepository;

        public transacaoService(transacaoRepository transacaoRepository) 
        {
            _transacaoRepository = transacaoRepository;
        }

        public postTransacao FazendoTransacao(double valor, DateTime dateTime) 
        {
            return _transacaoRepository.FazendoTransacao(valor, dateTime);

        }

        public string DeletandoTransacao(int id) 
        {
            return _transacaoRepository.DeletandoTransacao(id);
        }
    }
}