using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Domain.Entidades;

namespace API_Itau_Pratica.Domain.Repostory
{
    public interface ItransacaoRepository
    {
        public transacao FazendoTransacao(double valor, DateTime dateTime);
        public string DeletandoTransacao(int id);

    }
}
