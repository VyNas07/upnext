
import { listProgramas } from '@/lib/programas.service';
import { Container, Heading, VStack } from '@chakra-ui/react';
import { ProgramList } from '@/app/programas/ProgramList'; 

export default async function ProgramasPage() {
 
  const programas = await listProgramas();

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl">
          Programas Disponíveis
        </Heading>

        <ProgramList serverProgramas={programas} />
      </VStack>
    </Container>
  );
}