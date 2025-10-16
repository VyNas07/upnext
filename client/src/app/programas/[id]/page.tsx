import { getProgramaById } from "@/lib/programas.service";
import {
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  Box,
  Divider,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default async function ProgramaDetalhePage({
  params,
}: {
  params: { id: string };
}) {
  const programa = await getProgramaById(params.id);

  if (!programa) {
    return (
      <Container maxW="container.md" py={10}>
        <Heading>Programa não encontrado</Heading>
        <Text>O programa que você está procurando não existe.</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg" py={12}>
      <VStack spacing={6} align="stretch">
        <Box>
          <Heading as="h1" size="xl" mb={4}>
            {programa.titulo}
          </Heading>
          <HStack spacing={4}>
            <Badge colorScheme="blue">{programa.area}</Badge>
            <Badge colorScheme="green">{programa.modalidade}</Badge>
            <Badge colorScheme="purple">{programa.nivel}</Badge>
          </HStack>
        </Box>

        <Text fontSize="lg" color="gray.600">
          {programa.resumo}
        </Text>

        <Divider />

        <VStack align="stretch" spacing={3}>
          <Heading as="h3" size="md">
            Detalhes do Programa
          </Heading>
          <Text>
            <strong>Público-alvo:</strong> {programa.publicoAlvo.join(", ")}
          </Text>
          <Text>
            <strong>Período de Inscrição:</strong>{" "}
            {new Date(programa.periodoInscricao.inicio).toLocaleDateString()} a{" "}
            {new Date(programa.periodoInscricao.fim).toLocaleDateString()}
          </Text>
          {programa.cidade && programa.estado && (
            <Text>
              <strong>Localização:</strong> {programa.cidade}, {programa.estado}
            </Text>
          )}
        </VStack>

        {programa.editalUrl && (
          <Button
            as="a"
            href={programa.editalUrl}
            target="_blank"
            colorScheme="blue"
            rightIcon={<ExternalLinkIcon />}
            size="lg"
            alignSelf="flex-start"
          >
            Acessar Edital/Inscrição
          </Button>
        )}
      </VStack>
    </Container>
  );
}