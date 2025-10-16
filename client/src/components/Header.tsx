'use client';

import { Box, Container, HStack, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
  return (
    <Box as="header" borderBottomWidth="1px" py={4} mb={8}>
      <Container maxW="container.xl">
        <HStack justifyContent="space-between">
          <Link href="/" passHref>
            <Heading as="h1" size="md" color="blue.600">
              UpNext
            </Heading>
          </Link>
          <HStack as="nav" spacing={4}>
            <Link href="/programas" passHref>
              <Button variant="ghost">Programas</Button>
            </Link>
            <Link href="/instituicoes" passHref>
              <Button variant="ghost">Instituições</Button>
            </Link>
            <Link href="/favoritos" passHref>
              <Button variant="ghost">Favoritos</Button>
            </Link>
            <Link href="/perfil" passHref>
              <Button variant="ghost">Perfil</Button>
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}