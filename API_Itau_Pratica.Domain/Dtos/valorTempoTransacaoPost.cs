using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Domain.Entidades;

namespace API_Itau_Pratica.Domain.Dtos
{
    public class valorTempoTransacaoPost : transacao
    {
        public valorTempoTransacaoPost(double valor1, DateTime dataHora1)
        {
            valor = valor1;
            dataHora = dataHora1;
        }
    }
}
