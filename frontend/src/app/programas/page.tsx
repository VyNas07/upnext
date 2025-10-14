'use client';

// TODO: Esta lógica será substituída futuramente pela API real
import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Input,
    Select,
    Text,
    VStack,
    HStack,
    Badge,
    Container
} from '@chakra-ui/react';
import { programasMock, Programa } from '@/mocks/programas';
import { useAppStore } from '@/store';

export default function ProgramasPage() {
    const { filtros, setBusca, setFiltro, resetFiltros } = useAppStore();
    const [buscaLocal, setBuscaLocal] = useState(filtros.busca);
    const [programasFiltrados, setProgramasFiltrados] = useState<Programa[]>(programasMock);

    // Debounce para busca
    useEffect(() => {
        const timer = setTimeout(() => {
            setBusca(buscaLocal);
        }, 300);

        return () => clearTimeout(timer);
    }, [buscaLocal, setBusca]);

    // Aplicar filtros
    useEffect(() => {
        let resultado = programasMock;

        // Filtro de busca
        if (filtros.busca) {
            const termoBusca = filtros.busca.toLowerCase();
            resultado = resultado.filter(programa =>
                programa.titulo.toLowerCase().includes(termoBusca) ||
                programa.resumo.toLowerCase().includes(termoBusca) ||
                programa.area.toLowerCase().includes(termoBusca)
            );
        }

        // Filtro por área
        if (filtros.area) {
            resultado = resultado.filter(programa => programa.area === filtros.area);
        }

        // Filtro por modalidade
        if (filtros.modalidade) {
            resultado = resultado.filter(programa => programa.modalidade === filtros.modalidade);
        }

        // Filtro por nível
        if (filtros.nivel) {
            resultado = resultado.filter(programa => programa.nivel === filtros.nivel);
        }

        setProgramasFiltrados(resultado);
    }, [filtros]);

    const handleLimparFiltros = () => {
        setBuscaLocal('');
        resetFiltros();
    };

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
                                        value={filtros.area}
                                        onChange={(e) => setFiltro('area', e.target.value)}
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
                                        value={filtros.modalidade}
                                        onChange={(e) => setFiltro('modalidade', e.target.value)}
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
                                        value={filtros.nivel}
                                        onChange={(e) => setFiltro('nivel', e.target.value)}
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
                            {programasFiltrados.length} programa(s) encontrado(s)
                        </Text>
                    </HStack>

                    {programasFiltrados.length === 0 ? (
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
                        <Box
                            display="grid"
                            gridTemplateColumns={{
                                base: "1fr",
                                md: "repeat(2, 1fr)",
                                lg: "repeat(3, 1fr)"
                            }}
                            gap={6}
                        >
                            {programasFiltrados.map((programa) => (
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
                        </Box>
                    )}
                </Box>
            </VStack>
        </Container>
    );
}