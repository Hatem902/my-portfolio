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
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
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
          Hello, I&apos;m a software engineer specializing in
          <br /> full-stack web development.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Hatem Lamine
            </Heading>
            <p>
              • Full-stack web developer
              <Link
                px={1}
                href="https://www.linkedin.com/company/xquant/videos/"
                target="_blank"
              >
                @XQuant
              </Link>
              – Seoul, Korea
            </p>
            <p>
              • Founder of
              <Link
                px={1}
                href="https://best-in-role-lol.vercel.app/"
                target="_blank"
              >
                Best in Role
              </Link>
              startup — An esports voting platform with 52,000+ users.
            </p>
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
                src="/images/hatem2.jpg"
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
            I am passionate about{' '}
            <Text as="span" color="green.400">
              end-to-end
            </Text>{' '}
            building and shipping of{' '}
            <Text as="span" color="green.400">
              maintainable
            </Text>{' '}
            high-quality software that scales; as well as delivering exceptional{' '}
            <Text as="span" color="green.400">
              user experiences
            </Text>
            .
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
            <p>|&nbsp;&nbsp;&nbsp;</p> <p>Full-stack Web Developer</p>
          </Flex>

          <Text mb={2} mt={0.5} fontSize="xs" fontWeight="bold">
            Full-time · 01/2022 -{' '}
            <Text as="span" color="green.400">
              Present
            </Text>
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            : Next.js · React.js · TypeScript · Tailwind CSS · Radix UI · React
            Query (TanStack Query) + Axios · React Hook Forms · Zod · Docker
          </div>
          <Description
            shownContent={[
              '• Participated in PR reviews to maintain code quality standards. Made decisions paired with constructive comments and feedback, to approve or reject merges involving multiple features, fixes, and refactors.',
              '• Wrote end-to-end high-quality code for complex features such as comparing two documents side by side (like github commits), managing user workspaces, and exposing analytical statistics for contract documents.',
              '• Performed under pressure and directed my subteam to maintain peak performance during critical moments. Proposed robust and rational solutions to multiple complicated problems and dilemmas.'
            ]}
          />
          <Divider mt={1} mb={1.5} />
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
            <p>|&nbsp;&nbsp;&nbsp;</p> <p>Full-stack Web Developer</p>
          </Flex>

          <Text mb={2} mt={0.5} fontSize="xs" fontWeight="bold">
            Full-time · 12/2020 - 12/2021
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            : Next · React · TS · Tailwind · Radix UI ·<br /> React Query ·
            React Hook Forms · Zod · Docker
          </div>
          <Description
            shownContent={[
              '• Contributed to the architectural decisions for multiple modules within the EY Global Tax e-invoicing solution, considering business requirements, specific quality attributes, and compositions of domain teams for each module.',
              '• Set-up advanced API endpoints with efficient DB Queries and schema validation. Created customizable frontend pages and components that consume them while maintaining end-to-end type safety & graceful error handling.'
            ]}
          />
          <Divider mt={1} mb={1.5} />
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
            Internship · 05/2020 - 11/2020
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            Vue.js 3 · Nuxt.js 3 · TypeScript
          </div>
          <Description
            shownContent={[
              "• Played a critical role in the migration of an expense management solution from Nuxt.js 2 to Nuxt.js 3, speeding up the company's migration process by transitioning numerous plugins, libraries, and dependencies. Initiated and guided the integration of new Vue.js 3 features into the solution and prevented 3  bugs before they were shipped to production."
            ]}
          />
          <Divider mt={1} mb={1.5} />
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
            Internship · 05/2019 - 11/2019
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            Angular · TS · CSS · Nest.js · Figma
          </div>
          <Description
            shownContent={[
              '• Shared visions with the UI/UX design team from both the designer and developer perspectives, and created & maintained fully functional features covering over 40% of the entire UI/UX material for a pedagogical video-conferencing app.'
            ]}
          />
          <Divider mt={1} mb={1.5} />
          <Box align="center" my={4} mt={8}>
            <NextLink href="/skills" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Skills
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Languages
          </Heading>
          <Paragraph>
            French, Arabic, English – Professional proficiency or above
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            <Link
              href="https://www.behance.net/gallery/184184057/Esports-Voting-Platform-Leaderboard"
              target="_blank"
            >
              {' '}
              UI / UX Design
            </Link>{' '}
            , Video-editing, Photography, Bodybuilding,{' '}
            <Link
              href="https://www.youtube.com/watch?v=UntYS_X3iSM&list=PLJ49vJop9dCaDvzzX79cOCtCfpp7Ad7py&index=1&ab_channel=IcyVeins"
              target="_blank"
            >
              {' '}
              Piano
            </Link>
            , Singing, Journaling.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
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
              title="Demos Playlist for My Web Apps"
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
