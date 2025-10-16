import { listInstituicoes } from "@/lib/instituicoes.service";
import { Container, Heading, SimpleGrid, Card, CardBody, Text, VStack, Image, Button } from "@chakra-ui/react";

export default async function InstituicoesPage() {
  const instituicoes = await listInstituicoes();

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl">
          Instituições Parceiras
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {instituicoes.map((inst) => (
            <Card key={inst.id} variant="outline">
              <CardBody><VStack spacing={4} align="center" textAlign="center"><Image borderRadius="full" boxSize="100px" src={inst.logoUrl} alt={`Logo da ${inst.nome}`} /><Heading size="md">{inst.nome}</Heading><Text fontSize="sm" color="gray.600">{inst.descricao}</Text><Button as="a" href={inst.site} target="_blank" variant="link">Visitar site</Button></VStack></CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}