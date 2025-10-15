
'use client';

import { useMemo, useState, useEffect } from 'react';
import { SimpleGrid, Text, Box, Input } from '@chakra-ui/react';
import { useAppStore } from '@/store/useAppStore';
import { Programa } from '@/types/domain';
import { ProgramCard } from './ProgramCard';

interface ProgramListProps {
  serverProgramas: Programa[];
}

export function ProgramList({ serverProgramas }: ProgramListProps) {
  const { filtros, setFiltros } = useAppStore();
  
  const [busca, setBusca] = useState(filtros.busca);

  useEffect(() => {
    const handler = setTimeout(() => {
      setFiltros({ ...filtros, busca });
    }, 400);

    return () => {
      clearTimeout(handler);
    };
  }, [busca]);


  const filteredProgramas = useMemo(() => {
    return serverProgramas.filter((programa) => {
      const matchBusca = programa.titulo
        .toLowerCase()
        .includes(filtros.busca.toLowerCase());


      return matchBusca;
    });
  }, [serverProgramas, filtros]);

  if (filteredProgramas.length === 0) {
    return (
      <Box textAlign="center" p={10} borderWidth="1px" borderRadius="md">
        <Text fontSize="lg">Nenhum programa encontrado.</Text>
        <Text color="gray.500">Tente ajustar seus filtros de busca.</Text>
      </Box>
    );
  }

  return (
    <Box>
      <Input
        placeholder="Buscar por nome do programa..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        mb={8}
        size="lg"
      />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {filteredProgramas.map((programa) => (
          <ProgramCard key={programa.id} programa={programa} />
        ))}
      </SimpleGrid>
    </Box>
  );
}