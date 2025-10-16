import { Container, Heading, VStack, Text, Wrap, Tag } from "@chakra-ui/react";

const usuarioSimulado = {
  nome: "Usuário Teste",
  email: "usuario@teste.com",
  interesses: ["frontend", "react", "ux", "dados"],
};

export default function PerfilPage() {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="lg">Meu Perfil</Heading>
        <VStack align="stretch" spacing={3} p={5} borderWidth="1px" borderRadius="md">
          <Text><strong>Nome:</strong> {usuarioSimulado.nome}</Text>
          <Text><strong>Email:</strong> {usuarioSimulado.email}</Text>
        </VStack>
        <VStack align="stretch" spacing={3}>
          <Heading as="h3" size="md">Meus Interesses</Heading>
          <Text fontSize="sm" color="gray.500">Estes são os tópicos que usamos para recomendar programas para você.</Text>
          <Wrap spacing={2}>
            {usuarioSimulado.interesses.map((interesse) => (
              <Tag key={interesse} size="lg" colorScheme="blue">{interesse}</Tag>
            ))}
          </Wrap>
        </VStack>
      </VStack>
    </Container>
  );
}