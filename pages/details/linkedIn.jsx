import Layout from "@/src/components/Layout/layout";
import Title from "@/src/components/title/title";
import { Box, List, ListItem, Link, Text, SimpleGrid } from "@chakra-ui/react";
import Meta from "@/src/components/meta/meta";
import { LinkIcon } from "@chakra-ui/icons";
import WorkGridItem from "@/src/components/workGridItem/WorkGridItem";
import { LinkedInPageOne } from "../../public/images";

const LinkedIn = () => {
  return (
    <Layout>
      <Box
        maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
        py="5rem"
        mx="auto"
        mt={3}
      >
        <Title>LinkedIn Clone</Title>
        <Text mt={5} textIndent={15}>
          A LinkedIn Clone website that uses firebase as the Backend Service
        </Text>
        <List mt={5}>
          <ListItem mb="10px">
            <Meta>VIEW DEMO</Meta>
            <Link href="">LinkedIn.netlify.com</Link>
            <LinkIcon ml={1} color="#FF70C4" />
          </ListItem>
          <ListItem mb="10px">
            <Meta>SOURCE CODE</Meta>
            <Link
              target="_blank"
              href="https://github.com/adeyemi149/Linked-Clone"
            >
              LinkedIn.Github
            </Link>
          </ListItem>
          <ListItem mb="10px">
            <Meta>STACK</Meta>
            <span>React, Firebase, Redux</span>
          </ListItem>
        </List>
        <SimpleGrid mt={4} columns={[1, 1, 2]} gap={6}>
          <WorkGridItem
            thumbnail={LinkedInPageOne.default.src}
            title="LinkedIn_PageOne"
          />
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default LinkedIn;
