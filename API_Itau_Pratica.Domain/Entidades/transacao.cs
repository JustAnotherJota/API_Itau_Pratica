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

        public static int identityManual = 1;
        public int id { get; private set; }
        public transacao()
        {
            id = identityManual++;
        }

    }
}
