import { Box, Button, Heading, useColorModeValue, Center } from '@chakra-ui/react'
import { motion } from "framer-motion"
import React from 'react'
import NextLink from "next/link"
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Layout from '@/src/components/Layout/layout';


const NotFoundPage = () => {
  const bg = useColorModeValue("#67c2c0", "#22948e");
	const color = useColorModeValue("", "#ffffff")
	
	return (
	  <Layout>		
		<Box textAlign="center" mt={7} py="5rem">
			<NextLink href="/">
			<Button
				as={motion.button}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "spring", stiffness: 400, damping: 10 }}
				_hover={{ bg: "#81E6D9" }}
				backIcon={<ChevronLeftIcon />}
				bg={bg}
			>
				Back to Home
			</Button>
			</NextLink>
			</Box>
			<Center>
			<Heading mt={4} as="h1" color={color}>Error, Page doesn&#39;t exist!</Heading>
			</Center>
	  </Layout>
  )
}

export default NotFoundPage