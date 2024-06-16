import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Box, Heading, VStack, Button, FormControl, FormLabel, Input, Select, Image } from '@chakra-ui/react';

const CharacterCreationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  color: Yup.string().required('Color is required'),
  accessory: Yup.string().required('Accessory is required'),
});

const CharacterCreation = () => {
  return (
    <Container centerContent maxW="container.md" py={6}>
      <Box p={4} borderWidth={1} borderRadius="lg" width="100%">
        <Heading as="h2" size="lg" mb={4}>Create Your Teddy Bear</Heading>
        <Formik
          initialValues={{ name: '', color: '', accessory: '' }}
          validationSchema={CharacterCreationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <VStack spacing={4} align="start">
                <FormControl isInvalid={errors.name && touched.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field as={Input} id="name" name="name" placeholder="Enter teddy bear's name" />
                </FormControl>
                <FormControl isInvalid={errors.color && touched.color}>
                  <FormLabel htmlFor="color">Color</FormLabel>
                  <Field as={Select} id="color" name="color" placeholder="Select color">
                    <option value="brown">Brown</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                  </Field>
                </FormControl>
                <FormControl isInvalid={errors.accessory && touched.accessory}>
                  <FormLabel htmlFor="accessory">Accessory</FormLabel>
                  <Field as={Select} id="accessory" name="accessory" placeholder="Select accessory">
                    <option value="bow">Bow</option>
                    <option value="hat">Hat</option>
                    <option value="scarf">Scarf</option>
                  </Field>
                </FormControl>
                <Button type="submit" colorScheme="teal" size="lg">Create Teddy Bear</Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
      <Box mt={6}>
        <Image src="/images/teddy-bear.png" alt="Teddy Bear" boxSize="200px" />
      </Box>
    </Container>
  );
};

export default CharacterCreation;