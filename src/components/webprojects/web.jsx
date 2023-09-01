import React from "react";
import { PortfolioGridItem } from "@/src/components/portfolioGridItem/portfolioGridItem";
import { Container, SimpleGrid } from "@chakra-ui/react";
import {
  VmwareURL,
  TeslaCloneURL,
  LinkedCloneURL,
  disneyHomePage,
  comingSoon,
  comingSoonURL,
} from "@/public/images";
import { ArchivedProject } from "../Archived/ArchivedProject";
import Layout from "../Layout/layout";
import { ComingSoonProject } from "../ComingSoon/comingSoonProject";

const WebProject = () => {
  return (
    <Container maxW="1240px">
      <Layout>
        <SimpleGrid mt={5}>
          <PortfolioGridItem
            className="fade-in-left"
            id="Disney Clone"
            title="Movie App"
            thumbnail={disneyHomePage.default.src}
            toPage="/webDetails/disney"
            url="https://disneyclone-a864c.web.app/"
            github="https://github.com/adeyemi149/Disney-Clone"
            skills={["React", "Firebase", "Redux", "themoviedb API"]}
            about="A Disney-inspired app that features Firebase authentication for user login, TMDB API for different movie category selection, Redux for efficient state management, and a React player for viewing movie trailers. Users can also add movies to a watchlist for later viewing."
          />
          <PortfolioGridItem
            id="CloudHive"
            title="CloudHive"
            thumbnail={VmwareURL.default.src}
            toPage="/webDetails/cloudHive"
            url="https://cloudhive.vercel.app/"
            github="https://github.com/adeyemi149/cloudhive"
            skills={["React", "Tailwind CSS", "Jest"]}
            about="A cloud-hosting website landing page that uses Tailwind css for styling, as well as React Router DOM to enable smooth navigation between different sections of the website's pages"
          />
          <PortfolioGridItem
            id="LinkedIn Clone"
            title="LinkedIn Clone App"
            thumbnail={LinkedCloneURL.default.src}
            toPage="/webDetails/linkedIn"
            url="https://linkedin-clone-6c9be.web.app/"
            github="https://github.com/adeyemi149/LinkedIn-Clone"
            skills={["React", "Firebase", "Redux", "Styled component"]}
            about="Built a LinkedIn-inspired app that allows users to make post using a postmodal and add photos/videos that are stored in firebase database. It also incorporates firebase authenticaton for secure login or logout"
          />
          <ComingSoonProject
            id="Workbench"
            title="Workbench"
            skills={["Next.Js", "MaterialUI", "Asp.net Core Web API", "SQL"]}
            about=""
            url=""
            github=""
            thumbnail={comingSoonURL.default.src}
            toPage=""
          />
          <ArchivedProject />
        </SimpleGrid>
      </Layout>
    </Container>
  );
};

export default WebProject;
