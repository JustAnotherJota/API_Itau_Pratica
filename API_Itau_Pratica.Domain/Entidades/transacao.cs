using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace API_Itau_Pratica.Domain.Entidades
{
    public class transacao
    {
        public double valor;
        public DateTime dataHora;
        public int id;
        public transacao()
        {
            id++;
        } 
        public transacao(double valor1, DateTime dataHora1)
        {
            valor = valor1;
            dataHora = dataHora1;
            id++;
        }
    }
}
