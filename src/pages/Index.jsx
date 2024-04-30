import React from "react";
import { Box, Button, Text, VStack, Image, useColorMode, useColorModeValue, IconButton, Heading } from "@chakra-ui/react";
import { FaSun, FaMoon, FaCity } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <VStack minH="100vh" bg={bgColor} p={5} spacing={8} alignItems="center" justifyContent="center">
      <IconButton aria-label="Toggle dark mode" icon={useColorModeValue(<FaMoon />, <FaSun />)} onClick={toggleColorMode} isRound />
      <Box textAlign="center">
        <Heading mb={4}>Virtual Tour of Saudi Arabia</Heading>
        <Text fontSize="xl" color={textColor}>
          Explore the landmarks and cultural heritage of Saudi Arabia.
        </Text>
        <Image src="https://images.unsplash.com/photo-1533280385001-c32ffcbd52a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMGxhbmRtYXJrc3xlbnwwfHx8fDE3MTQ1MTI5MzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Saudi Arabia Landmarks" borderRadius="lg" mt={4} boxSize="300px" objectFit="cover" />
      </Box>
      <Button leftIcon={<FaCity />} colorScheme="teal" variant="solid">
        Explore Cities
      </Button>
    </VStack>
  );
};

export default Index;
