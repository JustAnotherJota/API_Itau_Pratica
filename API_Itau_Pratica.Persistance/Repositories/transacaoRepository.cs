﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Domain.Entidades;
using API_Itau_Pratica.Domain.Repository;
using API_Itau_Pratica.Domain.Dtos;
using System.Security.Cryptography.X509Certificates;
using System.Reflection;

namespace API_Itau_Pratica.Persistance.Repositories
{
    public class transacaoRepository : ItransacaoRepository
    {
        public List<transacao> transacaoList = new List<transacao>(); //criando uma lista das transacoes que acontecerem;
        public string FazendoTransacao(postTransacao transacao) 
        {
            postTransacao transacao1 = new(transacao.valor);
            transacaoList.Add(transacao1);

            return $"{transacao1.valor} \n" +
                $"{transacao1.dataHora}";

        }

        public string DeletandoTransacao(int id)
        {
            foreach (transacao transacao in transacaoList)
            {
                if (transacao.id == id)
                {
                    transacaoList.Remove(transacao);
                    return "Todas as informações foram apagadas com sucesso";
                }
                    
            }
            return "Esse ID não existe";

        }
    }
}