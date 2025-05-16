import { useState, useEffect } from "react";
import fetchNews from "../news";
import Card_3d from "./Card-3d";
import { SimpleGrid, Container, Heading, Flex, Text } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import LangSelector from "./LangSelector";
import CountrySelector from "./CountrySelector";
import CategorySelector from "./CategorySelector";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Spotlight } from "@/components/ui/spotlight-new";
import Spin from "./Spin";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [news, setNews] = useState([]);
  const [lang, setLang] = useState("en");
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("general");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getNews() {
      const articles = await fetchNews(lang, country, category);
      setLoading(false);
      setNews(articles);
    }
    getNews();
  }, [lang, country, category]);

  return (
    <>
      <div className="relative w-full min-h-screen">
        {/* Dot Background Layer */}
        <div className="absolute inset-0 z-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]" />

        {/* Radial Gradient Fading Layer */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* Spotlight Layer */}
        <Spotlight />

        {/* Main Content Container */}
        <div className="relative z-20 flex flex-col w-full min-h-screen">
          <Flex justify="space-between" align="center" m={10}>
            <Heading fontSize={["4xl","5xl","5xl","6xl"]} fontWeight={700}>
              <AuroraText speed={2}>UpdateMe</AuroraText>
            </Heading>
            <ColorModeButton />
          </Flex>

          <Flex justify="center" align="center" w="dvw">
            <SimpleGrid
              justify="space-between"
              align="center"
              columns={[1, 2, 3, 3]}
              gap="15px"
              minWidth={80}
            >
              <LangSelector m="7" onLangChange={setLang} />
              <CountrySelector m="7" onCountryChange={setCountry} />
              <CategorySelector m="7" onCategoryChange={setCategory} />
            </SimpleGrid>
          </Flex>

          <TracingBeam className="px-6 w-full h-auto min-h-screen">
            {isLoading ? (
              <Spin />
            ) : news && news.length !== 0 ? (
              <Container>
                <SimpleGrid
                  columns={[1, 1, 2, 2]}
                  gap="40px"
                  spacing={10}
                  px={5}
                  py={10}
                >
                  {news.map((newsItem) => (
                    <Card_3d
                      key={newsItem.title}
                      sourceName={newsItem.source.name}
                      sourceURL={newsItem.source.url}
                      time={newsItem.publishedAt}
                      heading={newsItem.title}
                      alt={newsItem.description}
                      content={newsItem.content}
                      image={newsItem.image}
                      url={newsItem.url}
                    />
                  ))}
                </SimpleGrid>
              </Container>
            ) : (
              <Text mt="5">Could not fetch any results..</Text>
            )}
          </TracingBeam>
        </div>
        <Analytics />
      </div>
    </>
  );
}

export default App;
