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
  Tooltip,
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
import thumbSimilarity from '../public/images/works/similarity-api-eye-catch.png'

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
          Hello, I&apos;m a full-stack software engineer / modern tech
          enthusiast
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Hatem Lamine
            </Heading>
            <p>
              Full-stack software engineer
              <Link
                px={1}
                href="https://www.linkedin.com/company/xquant/videos/"
                target="_blank"
              >
                @ XQuant – Korea
              </Link>{' '}
            </p>
            <p>
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
            </p>
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
              w="100px"
              h="100px"
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
          <Heading as="h3" variant="section-title">
            Profile
          </Heading>
          <Paragraph>
            I am a full-stack software engineer who is passionate about building
            and shipping high-quality software that scales, with a focus on
            delivering exceptional user experiences.
            {/* <br />
            Throughout my ever-lasting self-improvement journey, I aspire to
            expand my proactive mindset, my affinity for problem solving, my
            avidity for picking up new skills and exploring uncharted contexts,
            as well as, sharpen my ability to produce content with attention to
            detail. */}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/skills" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Skills
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
            Full-time · Sept 2022 -{' '}
            <Text as="span" color="green.400">
              Currently employed
            </Text>
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            : Next.js · React.js · TypeScript · TailwindCSS
          </div>
          <Description shownContent="• Currently collaborating alongside other developers, product managers and designers to build a full-stack contract management software." />
          <Divider mt={1} mb={1.5} />

          <Flex fontWeight="bold" alignItems="center" pt={2}>
            {' '}
            <Link
              href="https://www.linkedin.com/company/keyrus/"
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
            <p>|&nbsp;&nbsp;&nbsp;</p> <p>Full-stack Software Engineer</p>
          </Flex>

          <Text mb={2} mt={0.5} fontSize="xs" fontWeight="bold">
            Full-time · May 2022 - Aug 2022
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            : Vue.js 3 · Nuxt.js 3 · Ant Design-Vue 3 · TypeScript
          </div>
          <Description
            shownContent="• My work was critical in the migration of an expense management solution from Nuxt.js 2 to Nuxt.js 3."
            hiddenContent={[
              "• Accelerated the company's migration process by migrating numerous plugins, libraries, and dependencies, including Ant Design Vue 3, VueQuill 3, Quill Image Uploader, Pinia, etc.",
              '• Initiated and guided the incorporation of new Vue.js 3 features into the solution.',
              '• Leveled up the user experience by contributing to the prevention and resolution of 10+ bugs before they were shipped to production.'
            ]}
          />

          <Flex fontWeight="bold" alignItems="center">
            {' '}
            <Link
              href="https://www.linkedin.com/company/upkurs/"
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
                UpKurs - Tunis, Tunisia
              </Button>
            </Link>{' '}
            <p>|&nbsp;&nbsp;&nbsp;</p> <p>Full-stack Software Engineer</p>
          </Flex>

          <Text mb={2} mt={0.5} fontSize="xs" fontWeight="bold">
            Full-time · Jan 2022 - Apr 2022
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            : Angular · TypeScript · CSS · Nest.js · Figma
          </div>
          <Description
            shownContent="• Originally hired to contribute to the development of a pedagogical platform for videoconferencing, I quickly ended up becoming a driving force in various areas including Frontend, Backend, and UI/UX Design."
            hiddenContent={[
              '• I frequently shared my vision with the UI/UX design team from both the designer and developer perspectives to ensure optimal UI/UX, app responsiveness, and a seamless build process.',
              '• My contribution within the digital team was crucial in building, debugging, and maintaining fully functional features covering over 40% of the entire UI/UX material. Additionally, I was responsible for setting up backend endpoints for the features that I maintained.'
            ]}
          />
          <Box align="center" my={4} mt={8}>
            <NextLink href="/projects" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Projects
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
              href="https://www.behance.net/gallery/157371967/My-Design-of-Spotify"
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
              href="https://www.youtube.com/playlist?list=PLJ49vJop9dCb7H0oM_fc_BOuwrDlkKB_e"
              title="Playlist of Demos for My Products"
              thumbnail={thumbSimilarity}
            ></GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
