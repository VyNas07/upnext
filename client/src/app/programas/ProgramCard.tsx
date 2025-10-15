
'use client';

import {
  Card,
  CardBody,
  Heading,
  Text,
  Stack,
  HStack,
  Badge,
  IconButton,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import { Programa } from '@/types/domain';
import { useAppStore } from '@/store/useAppStore';

interface ProgramCardProps {
  programa: Programa;
}

export function ProgramCard({ programa }: ProgramCardProps) {
  const { favoritos, toggleFavorito } = useAppStore();

  const isFavorito = favoritos.includes(programa.id);

  return (
    <Card
      as={Link}
      href={`/programas/${programa.id}`}
      _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
      transition="all 0.2s"
      height="100%"
    >
      <CardBody>
        <Stack spacing={4}>
          <Heading size="md" noOfLines={2}>
            {programa.titulo}
          </Heading>
          
          <Text noOfLines={3} color="gray.600">
            {programa.resumo}
          </Text>

          <HStack wrap="wrap">
            <Badge colorScheme="teal">{programa.nivel}</Badge>
            <Badge colorScheme="purple">{programa.modalidade}</Badge>
          </HStack>
        </Stack>

        <IconButton
          aria-label={isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          aria-pressed={isFavorito}
          icon={isFavorito ? <FaHeart color="red" /> : <FaRegHeart />}
          variant="ghost"
          isRound
          position="absolute"
          top={4}
          right={4}
          onClick={(e) => {
            e.preventDefault();
            toggleFavorito(programa.id);
          }}
        />
      </CardBody>
    </Card>
  );
}