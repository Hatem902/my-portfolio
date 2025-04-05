import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
  chakra,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoSchool } from 'react-icons/io5'
import Description from '../components/description'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import thumbBir from '../public/images/works/bir-eye-catch-3.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Welcome! I’m Hatem Lamine, based in France, and I’m delighted to share
          my education and work experiences with you.
          <br />
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box
            flexShrink={0}
            mb={{ base: 4, md: 0 }}
            mr={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="120px"
              h="120px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/hatem4.png"
                alt="Profile image"
                borderRadius="full"
                width="120px"
                height="120px"
              />
            </Box>
          </Box>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Hatem Lamine
            </Heading>
            <Text as={'span'} mt={2} font>
              Full-Stack software engineer
            </Text>

            {/* <Link
              px={1}
              href="https://www.linkedin.com/school/national-institute-of-applied-science-and-technology/"
              target="_blank"
              textDecoration={'underline'}
              mr={-1}
            >
              INSAT
            </Link> */}
            {/* <p style={{ marginTop: '4px' }}>
              • Founder of
              <Link
                px={1}
                href="https://best-in-role-lol.vercel.app/"
                target="_blank"
              >
                Best in Role
              </Link>
              startup — An esports voting platform with 52,000+ users.
            </p> */}
            {/* <p>
              Senior software engineering student{' '}
              <Tooltip
                label="National Institute of Applied Science and Technology"
                color={'teal'}
              >
                <Text as="span" cursor="default">
                  {' '}
                  @ Insat
                </Text>
              </Tooltip>
            </p> */}
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" mt={10} variant="section-title">
            Current Work & Education Status
          </Heading>
          <Paragraph>
            <Text pt={1}>
              <Text as={'span'} fontWeight={'bold'} mr={'1'}>
                1.
              </Text>{' '}
              Currently carrying out a 6-month end-of-study{' '}
              <Text as="span" color="green.400" fontWeight="semibold">
                internship
              </Text>{' '}
              in software engineering at Dassault Systèmes, located in
              Vélizy-Villacoublay, Île-de-France, France. This is part of my
              Master’s degree (M2) in Computer Science – Software Engineering
              track at ISIMA, Clermont Auvergne INP.
            </Text>

            <Text mt={3}>
              <Text as={'span'} fontWeight={'bold'} mr={'1'}>
                2.
              </Text>{' '}
              This Master’s program is part of my{' '}
              <Text as="span" color="green.400" fontWeight={'semibold'}>
                dual degree
              </Text>{' '}
              in software engineering, with an expected graduation in 2025.
            </Text>

            <Text mt={3}>
              <Text as={'span'} fontWeight={'bold'} mr={'1'}>
                3.
              </Text>{' '}
              Graduated with a{' '}
              <Text as="span" color="green.400" fontWeight="semibold">
                National Engineering Degree in Software Engineering
              </Text>{' '}
              (Master’s degree equivalent){' '}
              <Text as="span" color="green.400" fontWeight="semibold">
                with the highest honors
              </Text>{' '}
              from the National Institute of Applied Sciences and Technology
              (INSAT) in Tunis, Tunisia, in September 2024.
            </Text>
          </Paragraph>

          {/* <Description
            shownContent={[]}
            hiddenContent={[
              'Proficiently defending this internship concluded my 5 years at INSAT (National Institute of Applied Sciences and Technology) in Tunis, Tunisia, and culminated in my graduation with a National Engineering Degree in Software Engineering at INSAT with the highest honors.'
            ]}
          /> */}
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" mt={10}>
            Experience
          </Heading>
          <Flex fontWeight="bold" alignItems="center" pt={1.5}>
            Full-Stack Software Engineer
          </Flex>
          <Text color={'blue.400'} fontWeight="semibold">
            Dassault Systèmes (Île-de-France) · 04/2025 - 09/2025 (ongoing)
          </Text>
          <Text mb={3} mt={0.5} fontSize="xs" fontWeight="bold">
            (6 months on-site end-of-study internship, for dual degree)
          </Text>
          <Description
            shownContent={[
              '• Subject: Design and full-stack web development of an AI-powered media production assistant.'
            ]}
          />

          <Flex fontWeight="bold" alignItems="center" pt={1.5}>
            Full-Stack Software Engineer
          </Flex>
          <Text color={'blue.400'} fontWeight="semibold">
            Inthy (Paris, France) · 04/2024 - 03/2025
          </Text>
          <Text mb={3} mt={0.5} fontSize="xs" fontWeight="bold">
            (6 months on-site end-of-study internship then 6 months part-time as
            an M2 student)
          </Text>

          <Text as="div" fontSize={'sm'}>
            <Badge colorScheme="teal" mb={1}>
              Tech:{' '}
            </Badge>{' '}
            Next.js · React · Node.js · TS · Django · Figma · Docker ·
            PostgreSQL · Keycloak · Hasura · Apollo Client · GraphQL ·
            Leaflet.js · Cypress · Stripe · Cloudflare · Linear
          </Text>
          <Description
            shownContent={[
              '• Worked on 2 projects: a Truck Fleet Trip Planner and a Real-Time Fleet Monitoring Dashboard. Tackled problem-solving, feature design, data modeling, software architecture, and DevOps, as well as writing clear, well-tested backend and frontend code. Designed and developed modern UX/UI with a high level of attention to detail.'
            ]}
            hiddenContent={[
              '• Leveraged Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), Optimistic Updates, Lazy Loading, and Caching to improve performance and, consequently, the user experience.',
              '• Handled SSO Authentication for multiple apps at once with Keycloak and OpenID Connect, implementing Session Cookies, JWTs, and Role-Based Access Control (RBAC).',
              "• Implemented real-time updates for all vehicles' battery levels and GPS coordinates, visualized live on rich maps using Leaflet.js for the admin dashboard. Leveraged Time-Series Tables, GraphQL Subscriptions, and WebSockets with Hasura, Apollo Client, GraphQL, and PostgreSQL."
            ]}
          />

          <Flex fontWeight="bold" alignItems="center" pt={2}>
            Full-Stack Software Engineer
          </Flex>
          <Text color={'blue.400'} fontWeight="semibold">
            XQuant (Seoul, South Korea) · 06/2023 - 03/2024
          </Text>
          <Text mb={3} mt={0.5} fontSize="xs" fontWeight="bold">
            (3 months on-site internship, 7 months part-time remote as
            SW.Engineering student)
          </Text>

          <Text as="div" fontSize={'sm'}>
            <Badge colorScheme="teal" mb={1}>
              Tech:{' '}
            </Badge>{' '}
            SvelteKit · Next.js · Node.js · React · React Native · Expo · TS ·
            Figma · Express · FastAPI · PostgreSQL · Socket.io · Docker · Github
            Actions · Kubernetes · AWS EC2 · Flux · Selenium
          </Text>
          <Description
            shownContent={[
              '• Worked on multiple projects for clients in the finance sector, on both web and mobile. Wrote clear, end-to-end, tested code for complex features, such as side-by-side document comparison (similar to GitHub commits) and a real-time notification system using Socket.io.',
              '• Implemented Database indexing, partitioning, and views, resulting in 300% faster database queries.'
            ]}
            hiddenContent={[
              '• Implemented Rate Limiting to prevent Denial of Service attacks and protect accounts from Brute Force attacks.',
              '• Proposed and implemented an infinite scrolling solution for the notifications history feature, resulting in a 600% performance increase, through transforming an initial 3+ seconds loading time into unnoticeable 50ms loading times as the user scrolls down.',
              '• Contributed to the DevOps team’s setup of a CI/CD pipeline using Docker, GitHub Actions, Kubernetes, AWS EC2, Flux, as well as regression tests using Selenium.'
            ]}
          />

          <Flex fontWeight="bold" alignItems="center" pt={2}>
            Software Engineer
          </Flex>
          <Text color={'blue.400'} fontWeight="semibold">
            EY (Tunis, Tunisia) · 06/2022 - 05/2023
          </Text>
          <Text mb={3} mt={0.5} fontSize="xs" fontWeight="bold">
            (3 months on-site internship, then, 9 months on-site as a working
            student)
          </Text>

          <Text as="div" fontSize={'sm'}>
            <Badge colorScheme="teal" mb={1}>
              Tech:{' '}
            </Badge>{' '}
            Angular · TS · PostgreSQL · Docker · Microservices · Sentry · Figma
            · Service Workers · Spring Boot · Grafana · Prometheus · TensorFlow
            ·
            <br />
            Google Analytics 360 · Linux
          </Text>
          <Description
            shownContent={[
              '• Worked within a Microservices Architecture on CTP (EY’s Client Technology Platform): designed optimal data structures and models, set up APIs, and carefully developed and tested a refined, detailed, and responsive UX/UI using EY’s Design System with guidance from the UX/UI design team.'
            ]}
            hiddenContent={[
              '• Implemented Service Workers for push notifications.',
              '• Explored Machine Learning with TensorFlow, Data Monitoring with Grafana and Prometheus, Error Management with Sentry, User Analytics using Google Analytics 360, as well as the Linux environment.'
            ]}
          />
          <Flex fontWeight="bold" alignItems="center" pt={2}>
            Front-end Developer
          </Flex>
          <Text color={'blue.400'} fontWeight="semibold">
            Upkurs (Nabeul, Tunisia) · 06/2021 - 09/2021
          </Text>
          <Text mb={3} mt={0.5} fontSize="xs" fontWeight="bold">
            (3-month on-site internship)
          </Text>

          <Text as="div" fontSize={'sm'}>
            <Badge colorScheme="teal" mb={1}>
              Tech:{' '}
            </Badge>{' '}
            Nuxt · Vue.js · TS · CSS · NoSQL (MongoDB) · Figma · Docker
          </Text>
          <Description
            shownContent={[
              '• Developed the front end for a video conferencing web app.'
            ]}
          />

          <Flex align="center" justify="center" mt={20} gap={4}>
            <NextLink href="/skills" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Skills
              </Button>
            </NextLink>
            <NextLink href="/projects-and-freelance" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Projects & Freelance
              </Button>
            </NextLink>
          </Flex>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" mt={14}>
            Education
          </Heading>

          <Flex fontWeight="bold" alignItems="center" pt={1}>
            Master’s degree (M2) in Computer Science, Software Engineering track
            (Dual Degree)
          </Flex>

          <Text mt={0.5} mb={2}>
            <Text as={'span'} fontWeight={'semibold'} color={'blue.400'}>
              ISIMA Clermont Auvergne INP{' '}
            </Text>{' '}
            (Higher Institute of Computer Science, Modeling, and Applications) ·
            Clermont-Ferrand, France · 2024 – 2025. Dual degree in
            SW.Engineering expected in 2025.
          </Text>

          <Flex fontWeight="bold" alignItems="center" pt={4}>
            National Engineering Degree in Software Engineering (Highest Honors)
          </Flex>

          <Text mt={0.5} mb={2}>
            <Text as={'span'} fontWeight={'semibold'} color={'blue.400'}>
              INSAT{' '}
            </Text>{' '}
            (National Institute of Applied Sciences and Technology) · Tunis,
            Tunisia · 2019 – 2024
          </Text>
          <Flex fontWeight="bold" alignItems="center" pt={4}>
            Baccalaureate Diploma in Mathematics (Highest Honors)
          </Flex>

          <Text mt={0.5} mb={2}>
            <Text as={'span'} fontWeight={'semibold'} color={'blue.400'}>
              Pioneer High School of Nabeul{' '}
            </Text>
            , an Elite high school (admission based on a national exam) ·
            Nabeul, Tunisia · 2015 – 2019
          </Text>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title" pt={4}>
            Languages
          </Heading>
          <Paragraph>
            French, Arabic, English – Professional proficiency
          </Paragraph>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title" pt={4}>
            I ♥
          </Heading>
          <Paragraph>
            <Link
              href="https://www.youtube.com/watch?v=p_jvQbzvYvs&list=PLJ49vJop9dCYVu9b2qXMqb0qMxCClBcXH&index=2"
              target="_blank"
            >
              {' '}
              Piano
            </Link>
            ,{' '}
            <Link
              href="https://www.behance.net/gallery/184184057/Esports-Voting-Platform-Leaderboard"
              target="_blank"
            >
              {' '}
              design
            </Link>
            , video-editing, hiking, journaling, working out.
          </Paragraph>
        </Section>

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title" mb="2.5" pt={4}>
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Hatem902" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @hatem902
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/hatem-lamine/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @hatem-lamine
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid paddingTop={3} columns={[0.5, 1, 1]} gap={6}>
            <GridItem
              href="https://www.youtube.com/watch?v=cootQ0SoJ0E&list=PLJ49vJop9dCb7H0oM_fc_BOuwrDlkKB_e&index=1&ab_channel=Tommyweb-dev"
              title="My Projects & Freelance Work – Playlist"
              thumbnail={thumbBir}
            ></GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
