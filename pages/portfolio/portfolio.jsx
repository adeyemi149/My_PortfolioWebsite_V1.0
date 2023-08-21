import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tab,
  TabIndicator,
} from "@chakra-ui/react";
import Layout from "@/src/components/Layout/layout";
import WebProject from "@/src/components/webprojects/web";
import { EmailProject } from "@/src/components/EmailProjects/EmailProject";

const Portfolio = () => {
  return (
    <Layout>
      <Box
        maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
        mx="auto"
        py="5rem"
        mt={5}
      >
        <Heading as="h1" size="lg" variant="section-title">
          Portfolio
        </Heading>
        <Tabs align="center" variant="unstyled">
          <TabList>
            <Tab>Web</Tab>
            <Tab>Email</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="4px"
            bg="#FF70C4"
            borderRadius="5px"
          />
          <TabPanels>
            <TabPanel>
              <WebProject />
            </TabPanel>
            <TabPanel>
              <EmailProject />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Layout>
  );
};

export default Portfolio;
