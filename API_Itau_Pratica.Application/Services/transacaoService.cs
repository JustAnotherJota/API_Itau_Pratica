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

        public transacaoService(transacaoRepository transacaorepository) 
        {
            _transacaoRepository = transacaorepository;
        }

        public string FazendoTransacao(postTransacao transacao) 
        {
            return _transacaoRepository.FazendoTransacao(transacao);

        }

        public string DeletandoTransacao(int id) 
        {
            return _transacaoRepository.DeletandoTransacao(id);
        }
    }
}