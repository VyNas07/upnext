import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            {/* Header fixo no topo */}
            <Box
                as="header"
                bg="blue.500"
                color="white"
                py={4}
                position="sticky"
                top={0}
                zIndex={10}
                boxShadow="md"
            >
                <Container maxW="container.xl">
                    <Heading as="h1" size="lg" textAlign="center">
                        Programas de Formação
                    </Heading>
                </Container>
            </Box>

            {/* Conteúdo principal */}
            <Box as="main" flex={1} py={8}>
                <Container maxW="container.xl" px={4}>
                    {children}
                </Container>
            </Box>

            {/* Footer */}
            <Box
                as="footer"
                bg="gray.100"
                py={4}
                borderTop="1px"
                borderColor="gray.200"
            >
                <Container maxW="container.xl">
                    <Text textAlign="center" color="gray.600">
                        © 2025 - Plataforma de Programas de Formação
                    </Text>
                </Container>
            </Box>
        </Box>
    );
}
