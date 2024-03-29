import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
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
          Hello, I'm a full-stack software engineer based in Tunis, Tunisia.
          <br />
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Hatem Lamine
            </Heading>
            <p style={{ marginTop: '4px' }}>
              • 5th-year software engineering student at
              <Link
                px={1}
                href="https://www.linkedin.com/school/national-institute-of-applied-science-and-technology/"
                target="_blank"
                textDecoration={'underline'}
                mr={-1}
              >
                INSAT
              </Link>
              .
            </p>
            <p style={{ marginTop: '4px' }}>
              • Planning a mendatory 6-month end-of-study internship starting
              anytime after I’ll have completed my studies on 13/01/2024.
            </p>
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
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="99px"
              h="99px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/hatem3.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" mt={12} variant="section-title">
            Profile
          </Heading>
          <Paragraph>
            I enjoy{' '}
            <Text as="span" color="green.400">
              end-to-end
            </Text>{' '}
            building of{' '}
            <Text as="span" color="green.400">
              maintainable
            </Text>
            , high-quality software that scales; as well as creating exceptional{' '}
            <Text as="span" color="green.400">
              user experiences.
            </Text>{' '}
            Additionally, I find pleasure in continuously shipping well-defined{' '}
            <Text as="span" color="green.400">
              deliverables
            </Text>{' '}
            that precisely align with{' '}
            <Text as="span" color="green.400">
              business requirements.
            </Text>
          </Paragraph>
          <Box align="center" my={4} mt={8}>
            <NextLink href="/projects" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Projects
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>

          <Flex fontWeight="bold" alignItems="center" pt={2}>
            {' '}
            <Link
              href="https://www.linkedin.com/company/xquant/videos/"
              target="_blank"
            >
              <Button
                as={Link}
                leftIcon={<IoLogoLinkedin />}
                mr={4}
                px={0}
                bgColor="transparent"
                _hover={{ bgColor: 'transparent' }}
              >
                XQuant - Seoul, South Korea
              </Button>
            </Link>
            <p>|&nbsp;&nbsp;&nbsp;</p> <p>Full-stack Software Engineer</p>
          </Flex>

          <Text mb={2} mt={0.5} fontSize="xs" fontWeight="bold">
            Full-time · Remote · 12/2021 - 11/2023 (2 years)
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            : Next.js · React · Node.js · TypeScript · Tailwind CSS · Radix UI ·
            React Query + Axios · React Hook Forms · Zod · Docker
          </div>
          <Description
            shownContent={[
              '• Proposed and implemented an infinite scrolling solution resulting in an exceptional user experience and a 10x performance increase. (Through transforming an initial 6 seconds loading time into virtually unnoticeable 50ms loading times as the user scrolls down.)'
            ]}
            hiddenContent={[
              '• Participated in PR reviews to maintain code quality standards. Made decisions paired with constructive comments and feedback, to approve or reject merges involving multiple features, fixes, and refactors.',
              '• Wrote end-to-end high-quality code for complex features such as comparing two documents side by side (like github commits), managing user workspaces, and exposing analytical statistics for contract documents.'
            ]}
          />

          <Flex fontWeight="bold" alignItems="center" pt={2}>
            {' '}
            <Link
              href="https://www.linkedin.com/company/ernstandyoung/"
              target="_blank"
            >
              <Button
                as={Link}
                leftIcon={<IoLogoLinkedin />}
                mr={4}
                px={0}
                bgColor="transparent"
                _hover={{ bgColor: 'transparent' }}
              >
                EY - Tunis, Tunisia
              </Button>
            </Link>
            <p>|&nbsp;&nbsp;&nbsp;</p> <p>Full-stack Software Engineer</p>
          </Flex>

          <Text mb={2} mt={0.5} fontSize="xs" fontWeight="bold">
            Full-time · On-site · 11/2020 - 10/2021 (1 year)
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            : Next.js · React · Node.js · TS · Tailwind · Radix UI ·<br /> React
            Query · React Hook Forms · Zod · Docker · Cypress
          </div>
          <Description
            shownContent={[
              '• Set-up advanced API endpoints with optimized DB Queries and schema validation.',
              '• Created customizable frontend pages and components that consume them while maintaining end-to-end type safety, graceful error handling, and efficient caching. (In collaboration with the UX/UI design team.)'
            ]}
            hiddenContent={[
              '•  Designed optimal data structures for complex features.',
              '•  Set up End-to-End Tests using Cypress with a Test-Driven Development (TDD) approach.',
              '• Contributed to the architectural decisions for two modules within GTES (EY’s Global Tax E-invoicing Solution), ensuring a precise alignment with the business requirements.'
            ]}
          />
          <Flex fontWeight="bold" alignItems="center" pt={2}>
            {' '}
            <Link
              href="https://www.linkedin.com/company/keyrus/about/"
              target="_blank"
            >
              <Button
                as={Link}
                leftIcon={<IoLogoLinkedin />}
                mr={4}
                px={0}
                bgColor="transparent"
                _hover={{ bgColor: 'transparent' }}
              >
                Keyrus - Tunis, Tunisia
              </Button>
            </Link>
            <p>|&nbsp;&nbsp;&nbsp;</p> <p>Full-stack Web Developer</p>
          </Flex>

          <Text mb={2} mt={0.5} fontSize="xs" fontWeight="bold">
            Internship · On-site · 04/2020 - 09/2020 (6 months)
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            Vue.js 3 · Nuxt.js 3 · Node.js · Express.js · TypeScript
          </div>
          <Description
            shownContent={[
              "• Migrated a large expense management solution from Nuxt.js 2 to Nuxt.js 3, speeding up the company's migration process by transitioning numerous plugins, libraries, and dependencies."
            ]}
            hiddenContent={[
              '• Initiated and guided the integration of the new Vue.js 3.0 release updates into the solution and implemented multiple features end-to-end.'
            ]}
          />
          <Flex fontWeight="bold" alignItems="center" pt={2}>
            {' '}
            <Link
              href="https://www.linkedin.com/company/upkurs/about/"
              target="_blank"
            >
              <Button
                as={Link}
                leftIcon={<IoLogoLinkedin />}
                mr={4}
                px={0}
                bgColor="transparent"
                _hover={{ bgColor: 'transparent' }}
              >
                Upkurs - Tunis, Tunisia
              </Button>
            </Link>
            <p>|&nbsp;&nbsp;&nbsp;</p> <p>Front-end Web Developer</p>
          </Flex>

          <Text mb={2} mt={0.5} fontSize="xs" fontWeight="bold">
            Internship · On-site · 01/2020 - 02/2020 (2 months)
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            Angular · TS · CSS · Node.js · Nest.js · Figma
          </div>
          <Description
            shownContent={[
              '• Implemented 20% of the front-end material for a video-conferencing app, in collaboration with the UX/UI team.'
            ]}
          />
          <Text mt={-1} fontSize={14}>
            <br />– PS:
            <Link
              px={1}
              href="https://www.canva.com/design/DAF18lONJVs/hqs6DrH7P55oAUl49tAZRA/view?utm_content=DAF18lONJVs&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              target="_blank"
              textDecoration={'underline'}
            >
              This
            </Link>
            is how I managed studying while working full-time in the past.
          </Text>
          <Box align="center" my={6} mt="12">
            <NextLink href="/skills" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Tech Stack
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>

          <Flex fontWeight="bold" alignItems="center" pt={2}>
            {' '}
            <Link
              href="https://www.linkedin.com/school/national-institute-of-applied-science-and-technology/"
              target="_blank"
            >
              <Button
                as={Link}
                leftIcon={<IoSchool />}
                mr={4}
                px={0}
                bgColor="transparent"
                _hover={{ bgColor: 'transparent' }}
              >
                INSAT University - Tunis, Tunisia
              </Button>
            </Link>
            <p>|&nbsp;&nbsp;&nbsp;</p> <p>Software Engineering</p>
          </Flex>

          <Text mb={2} mt={0.5} fontSize="xs" fontWeight="bold">
            2019 - Present (5th year) · Expected software engineering degree in
            2024
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              course of study{' '}
            </Badge>{' '}
            :{' '}
            <Text fontSize={14} as="span">
              Studied a 2-year preparatory cycle, where the first year included
              Mathematics, Physics, and IT, while the second year was dedicated
              to Software Engineering.
              <br />
              Subsequently, pursued a 3-year engineering program in Software
              Engineering, encompassing courses in web development, software
              architecture, big data, design patterns, DevOps, testing, and
              cloud computing.
            </Text>
          </div>
          <div style={{ marginTop: '8px' }}>
            <Badge colorScheme="teal" mb={1}>
              End-of-study internship{' '}
            </Badge>{' '}
            :{' '}
            <Text fontSize={14} as="span">
              Currently, I’m at my 5th year.{' '}
              <Text as="span" fontWeight={'semibold'} color="green.400">
                To fulfill my software engineering degree requirements (modeled
                after the French system), I'm planning a mandatory 6-month
                end-of-study internship starting anytime after I’ll have
                completed my studies on 13/01/2024.
              </Text>
            </Text>
          </div>

          <Divider mt={1} mb={1.5} />

          <Flex fontWeight="bold" alignItems="center" pt={2}>
            {' '}
            <Link
              href="https://www.linkedin.com/school/lyc%C3%A9e-pilote-nabeul-lpn/"
              target="_blank"
            >
              <Button
                as={Link}
                leftIcon={<IoSchool />}
                mr={3.5}
                px={0}
                bgColor="transparent"
                _hover={{ bgColor: 'transparent' }}
              >
                Pioneer High School Of Nabeul
              </Button>
            </Link>
            <p>|&nbsp;&nbsp;</p> <p>Baccalaureate mathematics</p>
          </Flex>

          <Text mb={16} mt={0.5} fontSize="xs" fontWeight="bold">
            2015 - 2019 · Grade: 17.41/20, honors. Rank: 642
          </Text>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Languages
          </Heading>
          <Paragraph>
            French, Arabic, English – Professional proficiency
          </Paragraph>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            <Link
              href="https://www.youtube.com/watch?v=UntYS_X3iSM&list=PLJ49vJop9dCaDvzzX79cOCtCfpp7Ad7py&index=1&ab_channel=IcyVeins"
              target="_blank"
            >
              {' '}
              Piano
            </Link>
            , music theory,{' '}
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
          <Heading as="h3" variant="section-title" mb="2.5">
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
              title="My Web Apps – Playlist"
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
