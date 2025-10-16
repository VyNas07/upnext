import {
    Container,
    VStack,
    Skeleton,
    SkeletonText,
    SimpleGrid,
    Card,
    CardBody,
    HStack,
  } from "@chakra-ui/react";
  
  export default function Loading() {
    return (
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Skeleton height="40px" width="350px" />
          <Card>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <Skeleton height="30px" width="100px" mb={4} />
                <SimpleGrid columns={{ base: 1, md: 5 }} spacing={4}>
                  <Skeleton height="40px" />
                  <Skeleton height="40px" />
                  <Skeleton height="40px" />
                  <Skeleton height="40px" />
                  <Skeleton height="40px" />
                </SimpleGrid>
              </VStack>
            </CardBody>
          </Card>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} variant="outline"><CardBody><VStack align="stretch" spacing={4}><Skeleton height="20px" /><SkeletonText mt="4" noOfLines={3} spacing="4" /><HStack><Skeleton height="20px" width="70px" /><Skeleton height="20px" width="70px" /></HStack></VStack></CardBody></Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    );
  }