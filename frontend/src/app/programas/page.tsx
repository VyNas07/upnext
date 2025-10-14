'use client';

// TODO: Esta lógica será substituída futuramente pela API real
import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    CardBody,
    CardFooter,
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
            <VStack gap={8} align="stretch">
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
                <Box borderWidth="1px" borderRadius="lg" p={4}>
                    <CardBody>
                        <VStack gap={4} align="stretch">
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
                                    <Select.Root
                                        collection={['frontend', 'backend', 'dados', 'cloud', 'ux', 'mobile', 'seguranca'].map(item => ({ label: item.charAt(0).toUpperCase() + item.slice(1), value: item }))}
                                        value={filtros.area ? [filtros.area] : []}
                                        onValueChange={(details) => setFiltro('area', details.value[0] || '')}
                                        size="md"
                                    >
                                        <Select.Trigger>
                                            <Select.Value placeholder="Todas as áreas" />
                                        </Select.Trigger>
                                        <Select.Positioner>
                                            <Select.Content>
                                                {['frontend', 'backend', 'dados', 'cloud', 'ux', 'mobile', 'seguranca'].map(item => (
                                                    <Select.Item key={item} value={item}>
                                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                                    </Select.Item>
                                                ))}
                                            </Select.Content>
                                        </Select.Positioner>
                                    </Select.Root>
                                </Box>

                                {/* Select Modalidade */}
                                <Box>
                                    <Text fontSize="sm" fontWeight="medium" mb={2}>
                                        Modalidade
                                    </Text>
                                    <Select.Root
                                        collection={['presencial', 'online', 'hibrido'].map(item => ({ label: item.charAt(0).toUpperCase() + item.slice(1), value: item }))}
                                        value={filtros.modalidade ? [filtros.modalidade] : []}
                                        onValueChange={(details) => setFiltro('modalidade', details.value[0] || '')}
                                        size="md"
                                    >
                                        <Select.Trigger>
                                            <Select.Value placeholder="Todas as modalidades" />
                                        </Select.Trigger>
                                        <Select.Positioner>
                                            <Select.Content>
                                                {['presencial', 'online', 'hibrido'].map(item => (
                                                    <Select.Item key={item} value={item}>
                                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                                    </Select.Item>
                                                ))}
                                            </Select.Content>
                                        </Select.Positioner>
                                    </Select.Root>
                                </Box>

                                {/* Select Nível */}
                                <Box>
                                    <Text fontSize="sm" fontWeight="medium" mb={2}>
                                        Nível
                                    </Text>
                                    <Select.Root
                                        collection={['iniciante', 'intermediario', 'avancado'].map(item => ({ label: item.charAt(0).toUpperCase() + item.slice(1), value: item }))}
                                        value={filtros.nivel ? [filtros.nivel] : []}
                                        onValueChange={(details) => setFiltro('nivel', details.value[0] || '')}
                                        size="md"
                                    >
                                        <Select.Trigger>
                                            <Select.Value placeholder="Todos os níveis" />
                                        </Select.Trigger>
                                        <Select.Positioner>
                                            <Select.Content>
                                                {['iniciante', 'intermediario', 'avancado'].map(item => (
                                                    <Select.Item key={item} value={item}>
                                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                                    </Select.Item>
                                                ))}
                                            </Select.Content>
                                        </Select.Positioner>
                                    </Select.Root>
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
                </Box>

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
                        <Box borderWidth="1px" borderRadius="lg" p={4}>
                            <CardBody>
                                <VStack gap={4} py={8}>
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
                        </Box>
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
                                <Box key={programa.id} borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{ shadow: "md" }}>
                                    <CardBody>
                                        <VStack align="stretch" gap={3}>
                                            <Heading as="h3" size="md" color="blue.500">
                                                {programa.titulo}
                                            </Heading>

                                            <Text color="gray.600" fontSize="sm">
                                                {programa.resumo}
                                            </Text>

                                            <HStack gap={2} flexWrap="wrap">
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
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            </VStack>
        </Container>
    );
}