"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Heading,
  Input,
  Select,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";
import { useAppStore } from "@/store/useAppStore";
import ProgramCard from "./ProgramCard";
import type { Programa } from "@/types/domain";

interface ProgramListProps {
  serverProgramas: Programa[];
}

export default function ProgramList({ serverProgramas }: ProgramListProps) {
  const { filtros, setBusca, setFiltro, resetFiltros } = useAppStore();
  const [buscaLocal, setBuscaLocal] = useState(filtros.busca);
  const [isLoading, setIsLoading] = useState(true);

  // Simular loading inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Debounce para busca
  useEffect(() => {
    const timer = setTimeout(() => {
      setBusca(buscaLocal);
    }, 400);

    return () => clearTimeout(timer);
  }, [buscaLocal, setBusca]);

  // Aplicar filtros
  const filteredProgramas = useMemo(() => {
    if (!serverProgramas || serverProgramas.length === 0) return [];

    let resultado = serverProgramas;

    // Filtro de busca
    if (filtros.busca) {
      const termoBusca = filtros.busca.toLowerCase();
      resultado = resultado.filter((programa) =>
        programa.titulo.toLowerCase().includes(termoBusca) ||
        (programa.resumo && programa.resumo.toLowerCase().includes(termoBusca)) ||
        (programa.tags && programa.tags.some(tag => tag.toLowerCase().includes(termoBusca)))
      );
    }

    // Filtro por área
    if (filtros.area) {
      resultado = resultado.filter((programa) => programa.area === filtros.area);
    }

    // Filtro por modalidade
    if (filtros.modalidade) {
      resultado = resultado.filter((programa) => programa.modalidade === filtros.modalidade);
    }

    // Filtro por nível
    if (filtros.nivel) {
      resultado = resultado.filter((programa) => programa.nivel === filtros.nivel);
    }

    return resultado;
  }, [serverProgramas, filtros]);

  const handleLimparFiltros = () => {
    setBuscaLocal("");
    resetFiltros();
  };

  // Loading skeletons
  if (isLoading) {
    return (
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box>
            <Skeleton height="40px" width="300px" mb={2} />
            <SkeletonText noOfLines={2} spacing="4" skeletonHeight="2" />
          </Box>

          <Card>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <Skeleton height="30px" width="100px" />
                <Box
                  display="grid"
                  gridTemplateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr auto" }}
                  gap={4}
                  alignItems="end"
                >
                  <Box>
                    <Skeleton height="20px" width="60px" mb={2} />
                    <Skeleton height="40px" />
                  </Box>
                  <Box>
                    <Skeleton height="20px" width="40px" mb={2} />
                    <Skeleton height="40px" />
                  </Box>
                  <Box>
                    <Skeleton height="20px" width="80px" mb={2} />
                    <Skeleton height="40px" />
                  </Box>
                  <Box>
                    <Skeleton height="20px" width="50px" mb={2} />
                    <Skeleton height="40px" />
                  </Box>
                  <Box>
                    <Skeleton height="40px" width="120px" />
                  </Box>
                </Box>
              </VStack>
            </CardBody>
          </Card>

          <Box>
            <HStack justify="space-between" mb={6}>
              <Skeleton height="30px" width="200px" />
              <Skeleton height="20px" width="150px" />
            </HStack>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} variant="outline">
                  <CardBody>
                    <VStack align="stretch" spacing={3}>
                      <Skeleton height="25px" />
                      <SkeletonText noOfLines={2} spacing="4" skeletonHeight="2" />
                      <HStack spacing={2}>
                        <SkeletonCircle size="4" />
                        <SkeletonCircle size="4" />
                        <SkeletonCircle size="4" />
                      </HStack>
                    </VStack>
                  </CardBody>
                  <CardBody>
                    <Skeleton height="40px" />
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    );
  }

  // Error state
  if (!serverProgramas || serverProgramas.length === 0) {
    return (
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h1" size="xl" mb={2}>
              Programas de Formação
            </Heading>
            <Text color="gray.600">
              Encontre o programa ideal para sua carreira em tecnologia
            </Text>
          </Box>
          <Card>
            <CardBody>
              <VStack spacing={4} py={8}>
                <Text fontSize="lg" color="red.500" textAlign="center">
                  Erro ao carregar programas. Tente novamente mais tarde.
                </Text>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        {/* Título da página */}
        <Box>
          <Heading as="h1" size="xl" mb={2}>
            Programas de Formação
          </Heading>
          <Text color="gray.600">
            Encontre o programa ideal para sua carreira em tecnologia
          </Text>
        </Box>

        {/* Seção de Filtros */}
        <Card>
          <CardBody>
            <VStack spacing={4} align="stretch">
              <Heading as="h2" size="md">
                Filtros
              </Heading>

              <Box
                display="grid"
                gridTemplateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr auto" }}
                gap={4}
                alignItems="end"
              >
                {/* Input de busca */}
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Buscar
                  </Text>
                  <Input
                    placeholder="Buscar por título, resumo ou tags..."
                    size="md"
                    value={buscaLocal}
                    onChange={(e) => setBuscaLocal(e.target.value)}
                    aria-label="Buscar programas"
                  />
                </Box>

                {/* Select Área */}
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Área
                  </Text>
                  <Select
                    placeholder="Todas as áreas"
                    size="md"
                    value={filtros.area || ""}
                    onChange={(e) => setFiltro("area", e.target.value || undefined)}
                    aria-label="Filtrar por área"
                  >
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="dados">Dados</option>
                    <option value="cloud">Cloud</option>
                    <option value="ux">UX</option>
                    <option value="mobile">Mobile</option>
                    <option value="seguranca">Segurança</option>
                  </Select>
                </Box>

                {/* Select Modalidade */}
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Modalidade
                  </Text>
                  <Select
                    placeholder="Todas as modalidades"
                    size="md"
                    value={filtros.modalidade || ""}
                    onChange={(e) => setFiltro("modalidade", e.target.value || undefined)}
                    aria-label="Filtrar por modalidade"
                  >
                    <option value="presencial">Presencial</option>
                    <option value="online">Online</option>
                    <option value="hibrido">Híbrido</option>
                  </Select>
                </Box>

                {/* Select Nível */}
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb={2}>
                    Nível
                  </Text>
                  <Select
                    placeholder="Todos os níveis"
                    size="md"
                    value={filtros.nivel || ""}
                    onChange={(e) => setFiltro("nivel", e.target.value || undefined)}
                    aria-label="Filtrar por nível"
                  >
                    <option value="iniciante">Iniciante</option>
                    <option value="intermediario">Intermediário</option>
                    <option value="avancado">Avançado</option>
                  </Select>
                </Box>

                {/* Botão Limpar Filtros */}
                <Box>
                  <Button
                    variant="outline"
                    colorScheme="gray"
                    size="md"
                    width="full"
                    onClick={handleLimparFiltros}
                    aria-label="Limpar todos os filtros"
                  >
                    Limpar Filtros
                  </Button>
                </Box>
              </Box>
            </VStack>
          </CardBody>
        </Card>

        {/* Grid de Cards */}
        <Box>
          <HStack justify="space-between" mb={6}>
            <Heading as="h2" size="lg">
              Programas Disponíveis
            </Heading>
            <Text color="gray.600">
              {filteredProgramas.length} programa(s) encontrado(s)
            </Text>
          </HStack>

          {filteredProgramas.length === 0 ? (
            <Card>
              <CardBody>
                <VStack spacing={4} py={8}>
                  <Text fontSize="lg" color="gray.500" textAlign="center">
                    Nenhum programa encontrado. Tente outros filtros.
                  </Text>
                  <Button
                    variant="outline"
                    colorScheme="blue"
                    onClick={handleLimparFiltros}
                  >
                    Limpar todos os filtros
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {filteredProgramas.map((programa) => (
                <ProgramCard key={programa.id} data={programa} />
              ))}
            </SimpleGrid>
          )}
        </Box>
      </VStack>
    </Container>
  );
}
