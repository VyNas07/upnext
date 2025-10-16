import { Container, VStack, Skeleton, SkeletonText, HStack } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Container maxW="container.lg" py={12}>
      <VStack spacing={6} align="stretch">
        <Skeleton height="40px" width="70%" />
        <HStack spacing={4}>
          <Skeleton height="24px" width="80px" />
          <Skeleton height="24px" width="80px" />
          <Skeleton height="24px" width="80px" />
        </HStack>
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <Skeleton height="1px" />
        <Skeleton height="30px" width="200px" />
        <SkeletonText mt="4" noOfLines={3} spacing="4" />
        <Skeleton height="48px" width="220px" />
      </VStack>
    </Container>
  );
}