import {
  Badge,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text
} from '@chakra-ui/react'

import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import thumbBir from '../public/images/works/bir-eye-catch-3.png'
import thumbConvertly from '../public/images/works/convertly-eye-catch.png'
import thumbCovidTracker from '../public/images/works/covid-tracker_eyecatch.png'
import thumbEcommerce from '../public/images/works/ecommerce-eye-catch.png'
import thumbPortfolio from '../public/images/works/portfolio-eye-catch.png'
import thumbSimilarity from '../public/images/works/similarity-api-eye-catch.png'
import thumbSpotify from '../public/images/works/spotify-eye-catch.png'
const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading
        mt={0}
        as="h3"
        variant="section-title"
        fontSize={20}
        mb={5}
      ></Heading>
      <Heading mt={0} as="h3" variant="section-title" fontSize={20} mb={5}>
        My Start-up
      </Heading>
      <Section>
        <WorkGridItem
          id="BiR : Esports Voting Platform + Leaderboard"
          title="BiR : Esports Voting Platform + Leaderboard"
          thumbnail={thumbBir}
          demo="https://www.youtube.com/watch?v=cootQ0SoJ0E&list=PLJ49vJop9dCb7H0oM_fc_BOuwrDlkKB_e&index=1&ab_channel=tommy123"
          link="https://best-in-role-lol.vercel.app/"
          source="https://github.com/Hatem902/best-in-role"
          design="https://www.behance.net/gallery/184184057/Esports-Voting-Platform-Leaderboard"
          isStartUp={true}
          webVitals="https://github.com/Hatem902/best-in-role#web-vitals"
          tech={
            <>
              <Flex pt={0.5} justifyContent="center">
                <div>
                  Conceived for the 2023 League of Legends World Championship
                  event, BiR (Best in Role) has swiftly gained popularity, with{' '}
                  <Text fontWeight="bold" textColor="green.400" as="span">
                    52,000+ esports fans actively using it
                  </Text>{' '}
                  during the event.{' '}
                </div>
              </Flex>
              <Flex pt={1} justifyContent="center">
                <div>
                  <Badge colorScheme="teal" mb={1}>
                    Tech{' '}
                  </Badge>{' '}
                  : Next.js 13.4 /w App Router & Route handlers · React ·
                  TypeScript · React Query (Tanstack Query) + Axios · Tailwind
                  CSS · Shadcn UI · MySQL · PlanetScale · Prisma · Clerk · Zod
                </div>
              </Flex>
            </>
          }
        >
          <Badge colorScheme="teal" mb={1}>
            Targeted Quality Attributes:
          </Badge>{' '}
          1- Performance : Immediate reactivity through{' '}
          <Text fontWeight="bold" textColor="green.400" as="span">
            optimistic updates
          </Text>
          ,{' '}
          <Text fontWeight="bold" textColor="green.400" as="span">
            lazy loading
          </Text>
          ,{' '}
          <Text fontWeight="bold" textColor="green.400" as="span">
            efficient caching
          </Text>
          , and
          <br />
          <Text fontWeight="bold" textColor="green.400" as="span">
            parallel queries
          </Text>
          .{' '}
          <Text fontWeight="bold" textColor="green.400" as="span">
            Lighthouse Performance score : 100
          </Text>
          .
          <br />
          2- Intuitive, clean, and straightforward UI/UX Design through
          strategic structuring with whitespace, and establishing a visual
          hierarchy:
          <br /> Leaderboard & Votes take the top spot in{' '}
          <Text fontWeight="bold" textColor="green.400" as="span">
            attention allocation
          </Text>
          .
          <br />
          3- SEO & Advertising : Metadata, favicons, sitemaps, and OpenGraph
          <br />
          images + Advertising on X (Twitter), Reddit, and Twitch.{' '}
          <Text fontWeight="bold" textColor="green.400" as="span">
            LH SEO score : 100
          </Text>
          .
          <br />
          4- Maintainability :{' '}
          <Text fontWeight="bold" textColor="green.400" as="span">
            end-to-end type-safety
          </Text>{' '}
          (from backend endpoints
          <br />
          to frontend) + Highly customizable & typesafe reusable components.
        </WorkGridItem>
      </Section>
      <Heading
        as="h3"
        variant="section-title"
        fontSize={20}
        mb={5}
        mt={20}
      ></Heading>
      <Heading mt={0} as="h3" variant="section-title" fontSize={20} mb={5}>
        Side Projects
      </Heading>

      <SimpleGrid columns={[0.5, 0.5, 1]} gap={10}>
        <Section>
          <WorkGridItem
            id="E-Commerce + Dashboard & CMS App"
            title="E-Commerce + Dashboard & CMS App"
            thumbnail={thumbEcommerce}
            demo="https://www.youtube.com/watch?v=ehZJeeosPIY&list=PLJ49vJop9dCb7H0oM_fc_BOuwrDlkKB_e&index=2&ab_channel=tommy123"
            link="https://docs.google.com/document/d/1wSqbOiCfpHEPJPZTRCb_4H66-GKOvYg3TPVubPu5tHc/edit?usp=sharing"
            source="https://docs.google.com/document/d/1s_0ewuUSAj8Oy1KuAYOSilre4TZta7k1zdSLU4mbQ7E/edit?usp=sharing"
            tech={
              <Flex pt={0.5} justifyContent="center">
                <div>
                  <Badge colorScheme="teal" mb={1}>
                    Tech{' '}
                  </Badge>{' '}
                  : Next.js 13.4 with App Router · React · TypeScript · Tailwind
                  CSS · Shadcn UI · Zod · React Query (Tanstack Query) + Axios ·
                  React Hook Form · Prisma · MySQL · PlanetScale · Clerk ·
                  Stripe
                </div>
              </Flex>
            }
          >
            Full-stack E-Commerce + Dashboard & CMS App. Feature-packed with :
            Admin Dashboard exposing statistics such as total revenue, sales,
            products in stock, and more... | Highly Customizable CMS |
            Multi-platform Image Uploading | Orders history & logs |
            Authentication | Stores with seamless navigation & filtering | Cart
            Management | Payment.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Text similarity API"
            title="Text similarity API"
            thumbnail={thumbSimilarity}
            demo="https://www.youtube.com/watch?v=M6Za30l83co&list=PLJ49vJop9dCb7H0oM_fc_BOuwrDlkKB_e&index=1&ab_channel=TommyVariety"
            link="https://similarity-quantifier.vercel.app/"
            source="https://github.com/Hatem902/similarity-quantifier"
            tech={
              <Flex pt={0.5} justifyContent="center">
                <div>
                  <Badge colorScheme="teal" mb={1}>
                    Tech{' '}
                  </Badge>{' '}
                  : Next.js 13.2 · React.js · TailwindCSS · Radix UI primitives
                  · TypeScript · PlanetScale · Prisma · Upstash · NextAuth.js
                </div>
              </Flex>
            }
          >
            Full-stack implementation and exposition of an API that quantifies
            the similarity between two pieces of text through making use of
            OpenAI's utilities.This API service website includes authentication
            and a <br />
            <Text fontWeight="bold" textColor="green.400" as="span">
              comprehensive API key system
            </Text>
            , which is conveniently exposed through a dashboard. It allows users
            to create and revoke their keys, as well as monitor every request
            alongside its corresponding API key.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Spotify 2.0"
            title="Spotify 2.0"
            thumbnail={thumbSpotify}
            demo="https://www.youtube.com/watch?v=Mb2SNHR5uNs&list=PLJ49vJop9dCb7H0oM_fc_BOuwrDlkKB_e&index=3&ab_channel=TommyVariety"
            featuresShowcase="https://www.youtube.com/watch?v=mwd5kUdRO6s&list=PLJ49vJop9dCb7H0oM_fc_BOuwrDlkKB_e&index=4&ab_channel=TommyVariety"
            design="https://www.behance.net/gallery/157371967/My-Design-of-Spotify"
            link="https://spotify-2-theta.vercel.app/"
            source="https://github.com/Hatem902/spotify-2"
            tech={
              <Flex pt={0.5} justifyContent="center">
                <div>
                  <Badge colorScheme="teal" mb={1}>
                    Tech{' '}
                  </Badge>{' '}
                  : Next.js · React.js ·
                  <Link
                    px={1}
                    href="https://developer.spotify.com/documentation/web-api/"
                    target="_blank"
                  >
                    Official Spotify API
                  </Link>
                  · Recoil · NextAuth.js · OAuth & JWT
                </div>
              </Flex>
            }
          >
            A redesigned, feature-packed Spotify web app with Spotify SSO
            authentication that fetches your playlists from your real Spotify
            account and provides you with a redesigned full Spotify experience,
            from playing playlists and tweaking volume levels to skipping to
            next or previous tracks, choosing a track, and controlling music
            playback. <br />
            The latency in playback and volume control in Spotify 2.0 is only 3%
            slower than that of the real Spotify, making it almost as fast.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Covid-19 Real-Time Tracker"
            title="Covid-19 Real-Time Tracker"
            thumbnail={thumbCovidTracker}
            demo="https://www.youtube.com/watch?v=husGEgLmAmU&list=PLJ49vJop9dCb7H0oM_fc_BOuwrDlkKB_e&index=2&ab_channel=TommyVariety"
            link="https://covid-19-tracker-8732b.web.app/"
            source="https://github.com/Hatem902/covid-19-tracker"
            tech={
              <Flex pt={0.5} justifyContent="center">
                <div>
                  <Badge colorScheme="teal" mb={1}>
                    Tech{' '}
                  </Badge>{' '}
                  : React.js ·{' '}
                  <Link px={1} href="https://disease.sh/docs" target="_blank">
                    Covid-19 API
                  </Link>
                  · React Leaflet · React Chart.js
                </div>
              </Flex>
            }
          >
            A Covid-19 Real-Time Tracker Web-app, using a free
            <Link href="https://disease.sh/docs/" target="_blank">
              {' '}
              Covid-19 API
            </Link>
            . This app has been visited by 3200 users so far to track live,
            relevant, and diverse Covid-19 Data, fetched and then nicely
            filtered & exposed through graphs, maps, tables and info-boxes
          </WorkGridItem>
        </Section>
        {/* <Section>
          <WorkGridItem
            id="Netflix 2.0 ( Currently Under Development )"
            title="Netflix 2.0 ( Currently Under Development )"
            thumbnail={thumbNetflix}
            link="https://netflix-2-0-mu.vercel.app/"
            howTo="https://github.com/Hatem902/netflix-2.0/blob/main/README.md"
            source="https://github.com/Hatem902/netflix-2.0"
          >
            A Netflix Clone using{' '}
            <Link
              href="https://developers.themoviedb.org/3/trending/get-trending"
              target="_blank"
            >
              The Netflix TMDB API
            </Link>{' '}
            , with fully functioning features such as: authentication, login,
            payment & subscription, subscription cancelling or updating, as well
            as, previewing movie clips and adding them to your favourites list
            <Flex pt={1} justifyContent="center" textAlign="center">
              <div>
                <Badge colorScheme="teal" mb={1}>
                  Tech{' '}
                </Badge>{' '}
                : React.js · Next.js · TailwindCSS · TypeScript ·
                <Link
                  px={1}
                  href="https://developers.themoviedb.org/3/trending/get-trending"
                  target="_blank"
                >
                  TMDB API
                </Link>
                · Recoil · Firebase · Stripe
              </div>
            </Flex>
          </WorkGridItem>
        </Section> */}
        <Section>
          <WorkGridItem
            id="Convertly"
            title="Convertly"
            thumbnail={thumbConvertly}
            demo="https://www.youtube.com/watch?v=DHv69Kr_ut4&list=PLJ49vJop9dCb7H0oM_fc_BOuwrDlkKB_e&index=5&ab_channel=TommyVariety"
            source="https://github.com/Hatem902/convertly/"
            tech={
              <Flex pt={0.5} justifyContent="center">
                <div>
                  <Badge colorScheme="teal" mb={1}>
                    Tech{' '}
                  </Badge>{' '}
                  : Angular · TailwindCSS · TypeScript · FastAPI · Python ·
                  Azure Storage
                </div>
              </Flex>
            }
          >
            A File Converter Web-App, to convert everything from documents to
            images, with a modern UI / UX Design.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Personal Portfolio"
            title="Personal Portfolio"
            thumbnail={thumbPortfolio}
            link="http://hatem-lamine-portfolio.vercel.app/"
            source="https://github.com/Hatem902/my-portfolio"
            showMoreHide={true}
            tech={
              <Flex pt={0.5} justifyContent="center" textAlign="center">
                <div>
                  <Badge colorScheme="teal" mb={1}>
                    Tech{' '}
                  </Badge>{' '}
                  : Next.js · React.js · Chakra UI · Framer Motion · Three.js
                </div>
              </Flex>
            }
          ></WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
