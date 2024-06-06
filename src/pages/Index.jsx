import { Container, Text, VStack, Box, Heading, Button, Flex } from "@chakra-ui/react";
import { FaTrophy, FaUsers, FaBattleNet, FaLevelUpAlt, FaTeddyBear } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={6}>The Terrible Teddies</Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to The Terrible Teddies, a strategic and interactive card-based game where players battle using teddy bears with unique abilities.
        </Text>
        <Box p={4} borderWidth={1} borderRadius="lg" width="100%" mt={6}>
          <Heading as="h2" size="lg" mb={4}>Features</Heading>
          <VStack spacing={4} align="start">
            <Flex align="center">
              <FaTeddyBear size="24px" />
              <Text ml={2}>Character Development: Collect and customize teddy bears with unique aesthetics.</Text>
            </Flex>
            <Flex align="center">
              <FaBattleNet size="24px" />
              <Text ml={2}>Battle System: Engage in turn-based battles using your teddies' special moves.</Text>
            </Flex>
            <Flex align="center">
              <FaLevelUpAlt size="24px" />
              <Text ml={2}>Progression System: Level up your teddies and unlock new abilities and features.</Text>
            </Flex>
            <Flex align="center">
              <FaUsers size="24px" />
              <Text ml={2}>Player Interaction: Evolve cards, form teams, and participate in community challenges.</Text>
            </Flex>
            <Flex align="center">
              <FaTrophy size="24px" />
              <Text ml={2}>End-Game Content: Special events and boss fights for advanced players.</Text>
            </Flex>
          </VStack>
        </Box>
        <Button colorScheme="teal" size="lg" mt={6}>Start Your Adventure</Button>
      </VStack>
    </Container>
  );
};

export default Index;