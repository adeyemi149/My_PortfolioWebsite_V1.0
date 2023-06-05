import React from "react";
import Layout from "@/src/components/Layout/layout";
import Title from "@/src/components/title/title";
import { Box, List, ListItem, Link, Text, SimpleGrid } from "@chakra-ui/react";
import Meta from "@/src/components/meta/meta";
import { LinkIcon } from "@chakra-ui/icons";
import WorkGridItem from "@/src/components/workGridItem/WorkGridItem";
import { teslaMenu, teslaPage } from "../../public/images";

const Tesla = () => {
  return (
    <Layout>
      <Box
        maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
        py="5rem"
        mx="auto"
        mt={3}
      >
        <Title>Tesla</Title>
        <Text mt={5} textIndent={15}>
          A Tesla Clone Landing Page
        </Text>
        <List mt={5}>
          <ListItem mb="10px">
            <Meta>VIEW DEMO</Meta>
            <Link href="">tesla.netlify.com</Link>
            <LinkIcon ml={1} color="#ff506f" />
          </ListItem>
          <ListItem mb="10px">
            <Meta>SOURCE CODE</Meta>
            <Link
              target="_blank"
              href="https://github.com/adeyemi149/tesla-clone-app"
            >
              tesla.Github
            </Link>
          </ListItem>
          <ListItem mb="10px">
            <Meta>STACK</Meta>
            <span>React, Redux, Styled-component</span>
          </ListItem>
        </List>
        <SimpleGrid mt={4} columns={[1, 1, 2]} gap={6}>
          <WorkGridItem thumbnail={teslaMenu.default.src} title="Vmware" />
          <WorkGridItem thumbnail={teslaPage.default.src} title="Vmware" />
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Tesla;
