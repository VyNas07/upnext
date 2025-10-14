"use client";

import {
    Card,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Button,
    HStack,
    Badge,
    VStack,
    IconButton,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useAppStore } from "@/store/useAppStore";
import type { Programa } from "@/types/domain";

interface ProgramCardProps {
    data: Programa;
}

export default function ProgramCard({ data }: ProgramCardProps) {
    const { favoritos, toggleFavorito } = useAppStore();
    const isFavorito = favoritos.includes(data.id);

    return (
        <Card variant="outline" _hover={{ shadow: "md" }}>
            <CardBody>
                <VStack align="stretch" spacing={3}>
                    <Heading as="h3" size="md" color="blue.500">
                        {data.titulo}
                    </Heading>

                    {data.resumo && (
                        <Text color="gray.600" fontSize="sm">
                            {data.resumo}
                        </Text>
                    )}

                    <HStack spacing={2} flexWrap="wrap">
                        <Badge colorScheme="blue" variant="subtle">
                            {data.area}
                        </Badge>
                        <Badge colorScheme="orange" variant="subtle">
                            {data.modalidade}
                        </Badge>
                        <Badge colorScheme="green" variant="subtle">
                            {data.nivel}
                        </Badge>
                    </HStack>

                    {data.tags && data.tags.length > 0 && (
                        <HStack spacing={1} flexWrap="wrap">
                            {data.tags.map((tag) => (
                                <Badge key={tag} colorScheme="gray" variant="outline" size="sm">
                                    {tag}
                                </Badge>
                            ))}
                        </HStack>
                    )}
                </VStack>
            </CardBody>

            <CardFooter>
                <HStack spacing={2} width="full">
                    <Button
                        as={Link}
                        href={`/programas/${data.id}`}
                        colorScheme="blue"
                        variant="solid"
                        flex={1}
                        size="md"
                    >
                        Ver detalhes
                    </Button>
                    <IconButton
                        aria-label={isFavorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                        aria-pressed={isFavorito}
                        icon={<StarIcon />}
                        colorScheme={isFavorito ? "yellow" : "gray"}
                        variant={isFavorito ? "solid" : "outline"}
                        onClick={() => toggleFavorito(data.id)}
                        size="md"
                    />
                </HStack>
            </CardFooter>
        </Card>
    );
}
