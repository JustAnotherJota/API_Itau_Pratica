using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Domain.Entidades;

namespace API_Itau_Pratica.Domain.Dtos
{
    public class getEstatisticaTransacao : estatistica
    {
        public getEstatisticaTransacao(int count ,double soma, double avg, double min, double max) 
        {
        }

    }
}
