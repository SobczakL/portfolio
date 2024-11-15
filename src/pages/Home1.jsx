import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/header/Header";
import portfolioData from "../data/data.json";
import AboutSection from "../components/sections/aboutSection/AboutSection"
import ProjectSection from "../components/sections/projectSection/ProjectSection"

export default function Home() {
    return (
        <Flex position="relative" direction="column" h="100%">
            <Header />
            <Flex
                bg="mainBg"
                color="white"
                rowSpan="1fr"
                boxSizing="border-box"
                padding={["12px", "16px"]}
                display="flex"
                h="100%"
                maxH="100%"
                flexDirection="column"
                border="solid white 1px"
                fontFamily="honey"
                fontSize={["subheader.sm", "subheader.md", "subheader.lg"]}
                _hover={{
                    bg: "hoverBg",
                }}
            >
                <AboutSection />
                <ProjectSection projectData={portfolioData.Projects}/>
            </Flex>
        </Flex>
    )
}
