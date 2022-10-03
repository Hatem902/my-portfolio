import {
  Badge,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid
} from '@chakra-ui/react'

import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import thumbCovidTracker from '../public/images/works/covid-tracker_eyecatch.png'
import thumbNetflix from '../public/images/works/netflix_eyecatch.png'
import thumbPortfolio from '../public/images/works/portfolio-eye-catch.png'
import thumbSpotify from '../public/images/works/spotify-eye-catch.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading mt={0} as="h3" variant="section-title" fontSize={20} mb={5}>
        Projects
      </Heading>

      <SimpleGrid columns={[0.5, 0.5, 1]} gap={10}>
        <Section>
          <WorkGridItem
            id="Spotify 2.0"
            title="Spotify 2.0"
            thumbnail={thumbSpotify}
            demo="https://www.youtube.com/watch?v=Mb2SNHR5uNs&feature=youtu.be&ab_channel=IcyVeins"
            featuresShowcase="https://www.youtube.com/watch?v=mwd5kUdRO6s&feature=youtu.be"
            link="https://spotify-2-theta.vercel.app/"
            source="https://github.com/Hatem902/spotify-2"
          >
            A Redesigned Feature-packed Spotify Web-app. Using the{' '}
            <Link
              href="https://developer.spotify.com/documentation/web-api/"
              target="_blank"
            >
              Official Spotify API
            </Link>{' '}
            , with SSO Authentication ( Spotify Account has to be Premium and
            Linked to the Spotify API ). This app Fetches the playlists from
            your real spotify account and allows you to play them, as well as,
            control music playback, volume level, skipping to next or previous
            track, choosing a track, etc... <br />
            The latency in Playback & Volume control in Spotify 2.0 surpasses
            that of the Real Spotify by only 3% (almost as fast as Real Spotify)
            <Flex pt={1} justifyContent="center">
              <div>
                <Badge colorScheme="teal" mb={1}>
                  Tech{' '}
                </Badge>{' '}
                : Next.js · Chakra UI ·
                <Link
                  px={1}
                  href="https://developer.spotify.com/documentation/web-api/"
                  target="_blank"
                >
                  Official Spotify API
                </Link>
                · Recoil · OAuth & JWT
              </div>
            </Flex>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Covid-19 Real-Time Tracker"
            title="Covid-19 Real-Time Tracker"
            thumbnail={thumbCovidTracker}
            demo="https://www.youtube.com/watch?v=husGEgLmAmU&feature=youtu.be&ab_channel=IcyVeins"
            link="https://covid-19-tracker-8732b.web.app/"
            source="https://github.com/Hatem902/covid-19-tracker"
          >
            A Covid-19 Real-Time Tracker Web-app, using a free
            <Link href="https://disease.sh/docs/" target="_blank">
              {' '}
              Covid-19 API
            </Link>
            . This app has been visited by 3200 users so far to track live,
            relevant, and diverse Covid-19 Data, fetched and then nicely
            filtered & exposed through graphs, maps, tables and info-boxes
            <Flex pt={1} justifyContent="center">
              <div>
                <Badge colorScheme="teal" mb={1}>
                  Tech{' '}
                </Badge>{' '}
                : React.js · Chakra UI ·{' '}
                <Link px={1} href="https://disease.sh/docs" target="_blank">
                  Covid-19 API
                </Link>
                · React Leaflet · React Chart.Js
              </div>
            </Flex>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Netflix 2.0 ( Currently Under Development )"
            title="Netflix 2.0 ( Currently Under Development )"
            thumbnail={thumbNetflix}
            link="https://netflix-2-0-mu.vercel.app/"
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
                : Next.js · TailwindCss · TypeScript ·
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
        </Section>
        <Section>
          <WorkGridItem
            id="Personal Portfolio"
            title="Personal Portfolio"
            thumbnail={thumbPortfolio}
            link="http://hatem-lamine-portfolio.vercel.app/"
            source="https://github.com/Hatem902/my-portfolio"
            showMoreHide={true}
          >
            <Flex pt={1} justifyContent="center" textAlign="center">
              <div>
                <Badge colorScheme="teal" mb={1}>
                  Tech{' '}
                </Badge>{' '}
                : Next.js · Chakra UI · Framer Motion · Three.js
              </div>
            </Flex>
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
