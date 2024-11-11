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
      <Heading mt={0} as="h3" variant="section-title" fontSize={20} mb={5}>
        Projects & Freelance
      </Heading>

      <SimpleGrid columns={[0.5, 0.5, 1]} gap={10}>
        <Section>
          <WorkGridItem
            id="Best in Role (peaked 50k+ users)"
            title="Best in Role (peaked 50k+ users)"
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
                  <div style={{ marginBottom: '4px' }}>
                    Esports Voting Platform + Leaderboard.
                    <br />
                    Created for the 2023 League of Legends World Championship
                    event.
                  </div>
                </Flex>
                <Flex pt={1} justifyContent="center">
                  <div>
                    <Badge colorScheme="teal" mb={1}>
                      Tech:{' '}
                    </Badge>{' '}
                    Next.js with App Router and Route handlers · React ·
                    TypeScript · React Query (Tanstack) · Tailwind CSS · MySQL ·
                    Zod
                  </div>
                </Flex>
              </>
            }
          >
            <div style={{ textAlign: 'start' }}>
              <Badge textAlign={'start'} colorScheme="teal" mb={1} mt={2}>
                Targeted App Requirements:
              </Badge>
              <br /> 1- Performance: Immediate reactivity through{' '}
              <Text fontWeight="bold" textColor="green.400" as="span">
                optimistic updates
              </Text>
              ,{' '}
              <Text fontWeight="bold" textColor="green.400" as="span">
                lazy loading
              </Text>
              ,{' '}
              <Text fontWeight="bold" textColor="green.400" as="span">
                SSR
              </Text>
              ,{' '}
              <Text fontWeight="bold" textColor="green.400" as="span">
                DB indexing
              </Text>
              , and {''}
              <Text fontWeight="bold" textColor="green.400" as="span">
                efficient caching
              </Text>
              . <br />
              Lighthouse {''}
              <Text fontWeight="bold" textColor="green.400" as="span">
                performance score : 100
              </Text>
              .
              <br />
              2- Intuitive, clean UX/UI design: color shades, whitespace,{' '}
              <Text fontWeight="bold" textColor="green.400" as="span">
                visual hierarchy
              </Text>
              , attention allocation.
              <br />
              3- SEO: Metadata, Favicons, Sitemaps, and OpenGraph images.
              <br />
              Lighthouse{' '}
              <Text fontWeight="bold" textColor="green.400" as="span">
                {' '}
                SEO score : 100
              </Text>
              .
              <br />
              Advertised the project through contacting influencers on X
              (Twitter), Reddit, and Twitch.
              <br />
              4- Responsiveness for all targeted devices (Desktop, multiple
              laptop screens, tablets, and mobile) & Cross-browser
              compatibility.
              <br />
              5- Maintainability:{' '}
              <Text fontWeight="bold" textColor="green.400" as="span">
                end-to-end type safety
              </Text>
              ,{' '}
              <Text fontWeight="bold" textColor="green.400" as="span">
                schema validation
              </Text>
              ,{' '}
              <Text fontWeight="bold" textColor="green.400" as="span">
                clear and scalable codebase folder structure
              </Text>
              , and highly customizable & typesafe reusable components.
            </div>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="E-Commerce + Dashboard & CMS App"
            title="E-Commerce + Dashboard & CMS (Freelance)"
            thumbnail={thumbEcommerce}
            demo="https://www.youtube.com/watch?v=ehZJeeosPIY&list=PLJ49vJop9dCb7H0oM_fc_BOuwrDlkKB_e&index=2&ab_channel=tommy123"
            link="https://docs.google.com/document/d/1wSqbOiCfpHEPJPZTRCb_4H66-GKOvYg3TPVubPu5tHc/edit?usp=sharing"
            source="https://docs.google.com/document/d/1s_0ewuUSAj8Oy1KuAYOSilre4TZta7k1zdSLU4mbQ7E/edit?usp=sharing"
            tech={
              <Flex pt={0.5} justifyContent="center">
                <div>
                  <Badge colorScheme="teal" mb={1}>
                    Tech:{' '}
                  </Badge>{' '}
                  Next.js · React · TypeScript · Tailwind CSS · Shadcn UI ·
                  React Query (TanStack) · React Hook Form · MySQL · Zod ·
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
            Management | Payment with Stripe.
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
                    Tech:{' '}
                  </Badge>{' '}
                  Next.js · React · TypeScript · TailwindCSS ·<br />{' '}
                  Unopinionated Radix UI primitives · Upstash · NextAuth
                </div>
              </Flex>
            }
          >
            Implementation and exposition of an API that quantifies the
            similarity between two pieces of text through making use of OpenAI's
            utilities. This app includes a{' '}
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
            demoPrio={true}
            tech={
              <Flex pt={0.5} justifyContent="center">
                <div>
                  <Badge colorScheme="teal" mb={1}>
                    Tech:{' '}
                  </Badge>{' '}
                  Next.js · React ·
                  <Link
                    px={1}
                    href="https://developer.spotify.com/documentation/web-api/"
                    target="_blank"
                  >
                    Official Spotify API
                  </Link>{' '}
                  · NextAuth · OAuth & JWT
                </div>
              </Flex>
            }
          >
            A redesigned Spotify experience with SSO authentication that fetches
            your{' '}
            <Text fontWeight="bold" textColor="green.400" as="span">
              playlists from your real Spotify account
            </Text>
            . From playing playlists and tweaking volume levels to skipping to
            next or previous tracks, choosing a track, and controlling music
            playback.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Covid-19 Tracker"
            title="Covid-19 Tracker"
            thumbnail={thumbCovidTracker}
            demo="https://www.youtube.com/watch?v=husGEgLmAmU&list=PLJ49vJop9dCb7H0oM_fc_BOuwrDlkKB_e&index=2&ab_channel=TommyVariety"
            link="https://covid-19-tracker-8732b.web.app/"
            source="https://github.com/Hatem902/covid-19-tracker"
            tech={
              <Flex pt={0.5} justifyContent="center">
                <div>
                  <Badge colorScheme="teal" mb={1}>
                    Tech:{' '}
                  </Badge>{' '}
                  React ·{' '}
                  <Link px={1} href="https://disease.sh/docs" target="_blank">
                    Covid-19 API
                  </Link>
                  · React Leaflet · React Chart.js
                </div>
              </Flex>
            }
          >
            A Covid-19 Tracker Web-app, using a free Covid-19 API. This app
            tracks live, relevant, and diverse Covid-19 Data, fetched and then
            filtered & exposed through graphs, maps, tables and info-boxes.
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
                  Tech:{' '}
                </Badge>{' '}
                 React.js · Next.js · TailwindCSS · TypeScript ·
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
                    Tech:{' '}
                  </Badge>{' '}
                  Angular · TailwindCSS · TypeScript ·
                  <br/>FastAPI · Python · Azure
                  Storage
                </div>
              </Flex>
            }
          >
            A File Converter Web-App, to convert everything from documents to
            images.
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
                    Tech:{' '}
                  </Badge>{' '}
                  Next.js · Framer Motion · Three.js
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
