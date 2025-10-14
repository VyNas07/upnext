"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { useAppStore } from "@/store/useAppStore";
import { listProgramas } from "@/lib/programas.service";
import ProgramCard from "@/features/programas/ProgramCard";
import type { Programa } from "@/types/domain";

export default function FavoritosPage() {
  const { favoritos } = useAppStore();
  const [programas, setProgramas] = useState<Programa[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProgramas = async () => {
      try {
        const data = await listProgramas();
        setProgramas(data);
      } catch (error) {
        console.error("Erro ao carregar programas:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProgramas();
  }, []);

  // Filtrar apenas os favoritos
  const programasFavoritos = programas.filter(programa => 
    favoritos.includes(programa.id)
  );

  if (isLoading) {
    return (
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h1" size="xl" mb={2}>
              Meus Favoritos
            </Heading>
            <Text color="gray.600">
              Programas que você marcou como favoritos
            </Text>
          </Box>
          <Text>Carregando...</Text>
        </VStack>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="xl" mb={2}>
            Meus Favoritos
          </Heading>
          <Text color="gray.600">
            Programas que você marcou como favoritos
          </Text>
        </Box>

        {programasFavoritos.length === 0 ? (
          <Card>
            <CardBody>
              <VStack spacing={4} py={8}>
                <Text fontSize="lg" color="gray.500" textAlign="center">
                  Nenhum favorito ainda.
                </Text>
                <Text fontSize="sm" color="gray.400" textAlign="center">
                  Explore os programas e marque seus favoritos para vê-los aqui.
                </Text>
              </VStack>
            </CardBody>
          </Card>
        ) : (
          <Box>
            <Text color="gray.600" mb={6}>
              {programasFavoritos.length} programa(s) favoritado(s)
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {programasFavoritos.map((programa) => (
                <ProgramCard key={programa.id} data={programa} />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </VStack>
    </Container>
  );
}
