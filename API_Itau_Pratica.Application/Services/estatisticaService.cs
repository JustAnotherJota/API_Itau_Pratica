using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_Itau_Pratica.Domain.Dtos;
using API_Itau_Pratica.Persistance.Repositories;

namespace API_Itau_Pratica.Application.Services
{
    public class estatisticaService
    {
        private readonly estatisticaRepository _estasticaRepository;
        public estatisticaService(estatisticaRepository estatisticaRepository) 
        {
            _estasticaRepository = estatisticaRepository;
        }

        public getEstatistica GetEstatistica() 
        {
            return _estasticaRepository.GetEstatistica();
        }
    }
}
