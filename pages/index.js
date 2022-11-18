import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import thumbYouTube from '../public/images/links/youtube1.png'

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
          Hello, I&apos;m a full-stack software engineer based in Tunisia!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Hatem Lamine
            </Heading>
            <p>
              Software Engineering – National Institute of Applied Science and
              Technology ( INSAT )
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
            I'm a full-stack software engineer based in Tunisa, with a passion
            for Front-end web development and a lot of enthusiasm for modern UX
            / UI Design.
            <br />
            Throughout my ever-lasting self-improvement journey, I aspire to
            expand my proactive mindset, my affinity for problem solving, my
            avidity for picking up new skills and exploring uncharted contexts,
            as well as, sharpen my ability to produce content with attention to
            detail.
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
              href="https://www.linkedin.com/company/keyrus/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
                mr={1}
              >
                Keyrus Tunisia
              </Button>
            </Link>
            <p>|&nbsp;&nbsp;&nbsp;&nbsp;</p> <p>Frontend Web Developer</p>
          </Flex>

          <Text mb={2} mt={0.5} fontSize="xs" fontWeight="bold">
            Internship · Jul 2022 - Aug 2022
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            : Vue.js 3 · Nuxt.js 3 · Ant Design-Vue 3 · TypeScript
          </div>

          <br />

          <Flex fontWeight="bold" alignItems="center">
            {' '}
            <Link
              href="https://www.linkedin.com/company/upkurs/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
                mr={1}
              >
                UpKurs
              </Button>
            </Link>{' '}
            <p>|&nbsp;&nbsp;&nbsp;&nbsp;</p> <p>Frontend Web Developer</p>
          </Flex>

          <Text mb={2} mt={0.5} fontSize="xs" fontWeight="bold">
            Internship · May 2022 - Jun 2022
          </Text>

          <div>
            <Badge colorScheme="teal" mb={1}>
              Tech{' '}
            </Badge>{' '}
            : Angular · Css · TypeScript · Jira · Trello · Figma
          </div>
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
              title="My Final Products' Demo Playlist"
              thumbnail={thumbYouTube}
            ></GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
