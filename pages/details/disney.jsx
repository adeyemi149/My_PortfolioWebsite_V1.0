import Layout from "@/src/components/Layout/layout";
import Title from "@/src/components/title/title";
import { Box, List, ListItem, Link, Text, SimpleGrid } from "@chakra-ui/react";
import Meta from "@/src/components/meta/meta";
import { LinkIcon } from "@chakra-ui/icons";
import WorkGridItem from "@/src/components/workGridItem/WorkGridItem";
import {
  disneyPageOne,
  disneySearchPage,
  disneyTrailer,
  disneyWatchList,
} from "../../public/images";

const Disney = () => {
  return (
    <Layout>
      <Box
        maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
        py="5rem"
        mx="auto"
        mt={3}
      >
        <Title>disney Clone</Title>
        <Text mt={5} textIndent={15}>
          A Disney Clone website that uses firebase as the Backend Service
        </Text>
        <List mt={5}>
          <ListItem mb="10px">
            <Meta>VIEW DEMO</Meta>
            <Link href="https://disneyclone-a864c.web.app/">
              Disney-Plus.web.app
            </Link>
            <LinkIcon ml={1} color="#FF70C4" />
          </ListItem>
          <ListItem mb="10px">
            <Meta>SOURCE CODE</Meta>
            <Link
              target="_blank"
              href="https://github.com/adeyemi149/Disney-Clone"
            >
              Disney.Github
            </Link>
          </ListItem>
          <ListItem mb="10px">
            <Meta>STACK</Meta>
            <span>React, Firebase, Redux, themoviedb API</span>
          </ListItem>
        </List>
        <SimpleGrid mt={4} columns={[1, 1, 2]} gap={6}>
          <WorkGridItem
            thumbnail={disneyPageOne.default.src}
            title="disneyHomePage"
          />
          <WorkGridItem
            thumbnail={disneySearchPage.default.src}
            title="disneySearchPage"
          />
          <WorkGridItem thumbnail={disneyTrailer.default.src} title="Trailer" />
          <WorkGridItem
            thumbnail={disneyWatchList.default.src}
            title="Trailer"
          />
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Disney;
