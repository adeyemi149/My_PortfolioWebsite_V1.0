import React from "react";
import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { PortfolioGridItem } from "@/src/components/portfolioGridItem/portfolioGridItem";
import {
  VmwareURL,
  TeslaCloneURL,
  LinkedCloneURL,
  disneyHomePage,
} from "@/public/images";
import { motion } from "framer-motion";
import Layout from "@/src/components/Layout/layout";
import { ArchivedProject } from "@/src/components/Archived/ArchivedProject";

const Portfolio = () => {
  return (
    <Layout>
      <Box
        maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
        mx="auto"
        py="5rem"
        mt={10}
      >
        <Heading as="h1" size="lg" variant="section-title">
          Projects
        </Heading>
        <SimpleGrid mt={5}>
          <PortfolioGridItem
            className="fade-in-left"
            id="Disney Clone"
            title="Disney Clone App"
            thumbnail={disneyHomePage.default.src}
            toPage="/details/disney"
            url="https://disneyclone-a864c.web.app/"
            github="https://github.com/adeyemi149/Disney-Clone"
            skills={["React", "Firebase", "Redux", "themoviedb API"]}
            about="I developed a Disney-inspired app that features Firebase authentication for user login, TheMovie API for different movie category selection, Redux for efficient state management, and a React player for viewing trailers. Users can also add movies to a watchlist for later viewing."
          />
          <PortfolioGridItem
            id="LinkedIn Clone"
            title="LinkedIn Clone App"
            thumbnail={LinkedCloneURL.default.src}
            toPage="/details/linkedIn"
            url="https://linkedin-clone-6c9be.web.app/"
            github="https://github.com/adeyemi149/LinkedIn-Clone"
            skills={["React", "Firebase", "Redux", "Styled component"]}
            about="Built a LinkedIn-inspired app that allows users to make post using a postmodal and add photos/videos that are stored in firebase database. It also incorporates firebase authenticaton for secure login or logout"
          />
          <PortfolioGridItem
            id="Tesla Clone"
            title="Tesla Clone"
            thumbnail={TeslaCloneURL.default.src}
            toPage="/details/tesla"
            url="https://clone-tesla-site.netlify.app/"
            github="https://github.com/adeyemi149/tesla-clone-website"
            skills={["React", "Typescript", "Redux", "Styled component"]}
            about="I created a website modelled after Tesla's design and branding that utilizes latest technologies such as Redux for efficient state management and Styled Components for dynamic CSS styling"
          />
          <PortfolioGridItem
            id="Vmware"
            title="Vmware"
            thumbnail={VmwareURL.default.src}
            toPage="/details/vmware"
            url="https://vmware-lime.vercel.app/"
            github="https://github.com/adeyemi149/VMware"
            skills={["React", "Tailwind CSS", "Jest"]}
            about="Created a simple cloud-hosting website landing page that uses Tailwind css for styling, as well as React Router DOM to enable smooth navigation between different sections of the website's pages"
          />
        </SimpleGrid>
      </Box>
      <ArchivedProject />
    </Layout>
  );
};

export default Portfolio;
