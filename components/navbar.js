import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoDownloadOutline, IoLogoGithub, IoMailOpen } from 'react-icons/io5'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'
const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const downloadResume = async () => {
    try {
      const response = await fetch(
        '/Hatem_Lamine_CV_Ingénieur_Logiciel_Full-Stack.pdf'
      )
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Hatem_Lamine_CV_Ingénieur_Logiciel_Full-Stack.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error(error)
    }
  }
  const { path } = props
  const mailTo = (email, subject, body) => {
    return `mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${
      encodeURIComponent(body) || ''
    }`
  }
  const mailMe = mailTo('hatem.lamine.work@gmail.com', 'Subject💡', 'Body 👋')
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/skills" path={path}>
            Skills
          </LinkItem>
          <LinkItem href="/projects-and-freelance" path={path}>
            Projects & Freelance
          </LinkItem>
          <Spacer />
          <LinkItem
            target="_blank"
            href={mailMe}
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoMailOpen />
            Contact
          </LinkItem>
          <LinkItem
            href="#"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            onClick={downloadResume}
          >
            <IoDownloadOutline />
            Resume
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/Hatem902/my-portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList bg={useColorModeValue('#ffffffdf', '#202023ef')}>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Profile</MenuItem>
                </NextLink>
                <NextLink href="/skills" passHref>
                  <MenuItem as={Link}>Skills</MenuItem>
                </NextLink>
                <NextLink href="/projects-and-freelance" passHref>
                  <MenuItem as={Link}>Projects & Freelance</MenuItem>
                </NextLink>

                <MenuItem as={Link} href={mailMe} target="_blank">
                  Contact
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/Hatem902/my-portfolio"
                  target="_blank"
                >
                  View Source
                </MenuItem>
                <MenuItem as={Link} href="#" onClick={downloadResume}>
                  Resume
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
