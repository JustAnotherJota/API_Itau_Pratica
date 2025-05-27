using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Domain.Entidades;
using API_Itau_Pratica.Domain.Repostory;

namespace API_Itau_Pratica.Persistance.Repositories
{
    public class transacaoRepository : ItransacaoRepository
    {
        List<transacao> transacaoList;
        public transacao FazendoTransacao(double valor, DateTime dateTime)
        {
            transacao transacao1 = new(valor, dateTime);
            transacaoList.Add(transacao1);
            return transacao1;

        }

        public string DeletandoTransacao(int id)
        {
            foreach (transacao transacao in transacaoList)
            {
                if(transacao.id == id) 
                    transacaoList.Remove(transacao);
                return "Todas as informações foram apagadas com sucesso";
            }
            return "Todas as informações foram apagadas com sucesso (diferenciando que aqui não houve id encontrado para ser apagado)";
        }
    }
}