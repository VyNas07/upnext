import { listProgramas } from "@/lib/programas.service";
import ProgramList from "@/features/programas/ProgramList";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";

export default async function Home() {
  const programas = await listProgramas();

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" size="2xl">
            UpNext: Conectando Talentos a Oportunidades
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Sua jornada na tecnologia começa aqui. Encontre os melhores
            programas de formação.
          </Text>
        </VStack>

        <ProgramList serverProgramas={programas} />
      </VStack>
    </Container>
  );
}