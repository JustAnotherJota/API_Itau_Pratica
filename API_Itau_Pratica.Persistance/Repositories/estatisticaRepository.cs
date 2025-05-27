using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Domain.Repostory;
using API_Itau_Pratica.Domain.Entidades;
using API_Itau_Pratica.Domain.Dtos;

namespace API_Itau_Pratica.Persistance.Repositories
{
    public class estatisticaRepository : IestatisticaRepository
    {
        private readonly transacaoRepository _transacaoRepository;

        public estatisticaRepository(transacaoRepository transacaoRepository) 
        {
            _transacaoRepository = transacaoRepository;
        }

        public getEstatisticaTransacao GetEstatistica()
        {
            getEstatisticaTransacao estasticas = new(contadorId(), soma(), average(), minimo(), maximo());
            return estasticas;
        }

        public int contadorId()
        {
            var contadorTempo = _transacaoRepository.transacaoList.Where(transacao => transacao.dataHora > DateTime.Now.AddSeconds(-60)).Count();
            return contadorTempo;
        }

        public double soma() //Sem LINQ
        {
            double somaTransacao = 0;

            foreach (transacao transacao in _transacaoRepository.transacaoList) //Soma total do valor transacionado nos últimos 60 segundos	
            {              //12:30:59            //12:35:59  - 12:35
                if ((transacao.dataHora > DateTime.Now.AddSeconds(-60)))
                    somaTransacao += transacao.valor;
            }
            return somaTransacao;
        }

        public double average() //Média do valor transacionado nos últimos 60 segundos	- Sem LINQ
        {
            double averageTransacao = 0;
            double contador = 0;

            foreach (transacao transacao in _transacaoRepository.transacaoList)
            {
                if ((transacao.dataHora > DateTime.Now.AddSeconds(-60)))
                {
                    averageTransacao += transacao.valor;
                    contador++;
                }
            }
            return averageTransacao / contador;
        }

        public double minimo()  //usando LINQ
        {
            var minimoTransacao = _transacaoRepository.transacaoList.Where(transacao => transacao.dataHora > DateTime.Now.AddSeconds(-60));

            return minimoTransacao.Min(transacao => transacao.valor);

        }

        public double maximo()  //usando LINQ
        {
            var maximoTransacao = _transacaoRepository.transacaoList.Where(transacao => transacao.dataHora > DateTime.Now.AddSeconds(-60));
            return maximoTransacao.Max(transacao => transacao.valor);
        }
    }
}