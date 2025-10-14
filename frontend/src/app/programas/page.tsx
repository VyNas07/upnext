'use client';

import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Grid,
    Heading,
    Input,
    Select,
    Text,
    VStack,
    HStack,
    Badge,
    Container
} from '@chakra-ui/react';
import { programasMock } from '@/mocks/programas';

export default function ProgramasPage() {
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

                            <Grid templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr auto" }} gap={4} alignItems="end">
                                {/* Input de busca */}
                                <Box>
                                    <Text fontSize="sm" fontWeight="medium" mb={2}>
                                        Buscar
                                    </Text>
                                    <Input
                                        placeholder="Buscar por título, resumo ou tags..."
                                        size="md"
                                    />
                                </Box>

                                {/* Select Área */}
                                <Box>
                                    <Text fontSize="sm" fontWeight="medium" mb={2}>
                                        Área
                                    </Text>
                                    <Select placeholder="Todas as áreas" size="md">
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
                                    <Select placeholder="Todas as modalidades" size="md">
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
                                    <Select placeholder="Todos os níveis" size="md">
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
                                    >
                                        Limpar Filtros
                                    </Button>
                                </Box>
                            </Grid>
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
                            {programasMock.length} programa(s) encontrado(s)
                        </Text>
                    </HStack>

                    <Grid
                        templateColumns={{
                            base: "1fr",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)"
                        }}
                        gap={6}
                    >
                        {programasMock.map((programa) => (
                            <Card key={programa.id} variant="outline" _hover={{ shadow: "md" }}>
                                <CardBody>
                                    <VStack align="stretch" spacing={3}>
                                        <Heading as="h3" size="md" color="blue.500">
                                            {programa.titulo}
                                        </Heading>

                                        <Text color="gray.600" fontSize="sm">
                                            {programa.resumo}
                                        </Text>

                                        <HStack spacing={2} flexWrap="wrap">
                                            <Badge colorScheme="blue" variant="subtle">
                                                {programa.area}
                                            </Badge>
                                            <Badge colorScheme="orange" variant="subtle">
                                                {programa.modalidade}
                                            </Badge>
                                            <Badge colorScheme="green" variant="subtle">
                                                {programa.nivel}
                                            </Badge>
                                        </HStack>
                                    </VStack>
                                </CardBody>

                                <CardFooter>
                                    <Button
                                        colorScheme="blue"
                                        variant="solid"
                                        width="full"
                                        size="md"
                                    >
                                        Ver detalhes
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </Grid>
                </Box>
            </VStack>
        </Container>
    );
}
