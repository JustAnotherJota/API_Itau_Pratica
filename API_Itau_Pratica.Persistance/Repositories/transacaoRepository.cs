using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Domain.Entidades;
using API_Itau_Pratica.Domain.Repostory;
using API_Itau_Pratica.Domain.Dtos;
using System.Security.Cryptography.X509Certificates;
using System.Reflection;

namespace API_Itau_Pratica.Persistance.Repositories
{
    public class transacaoRepository : ItransacaoRepository
    {
        public List<transacao> transacaoList = new List<transacao>(); //criando uma lista das transacoes que acontecerem;
        public postTransacao FazendoTransacao(double valor, DateTime dateTime) 
        {
            postTransacao transacao1 = new(valor, dateTime);
            transacaoList.Add(transacao1);

            return transacao1;

        }

        public string DeletandoTransacao(int id)
        {
            foreach (transacao transacao in transacaoList)
            {
                if (transacao.id == id)
                    transacaoList.Remove(transacao);
                return "Todas as informações foram apagadas com sucesso";
            }
            return "Todas as informações foram apagadas com sucesso (diferenciando que aqui não houve id encontrado para ser apagado)";
        }
    }
}