using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Domain.Entidades;

namespace API_Itau_Pratica.Domain.Dtos
{
    public class postTransacao : transacao
    {
        public postTransacao(double valor1)
        {
            valor = valor1;
            dataHora = DateTime.Now;
        }

        public postTransacao() { }
    }
}
