import { ChevronDownIcon, ChevronUpIcon, LinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  Link,
  LinkBox,
  LinkOverlay,
  Text
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'
import { useState } from 'react'
import {
  IoHelpSharp,
  IoLogoBehance,
  IoLogoGithub,
  IoLogoYoutube,
  IoStatsChart
} from 'react-icons/io5'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box mt={0} w="100%" textAlign="center">
    <LinkBox
      cursor="pointer "
      transition="ease"
      transitionProperty="opacity"
      transitionDuration="normal"
      _hover={{
        opacity: '72%'
      }}
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Flex mt={2} justifyContent="center" align="center">
          <IoLogoYoutube />
          <Text ml={2}>{title}</Text>
        </Flex>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  title,
  thumbnail,
  demo,
  featuresShowcase,
  link,
  howTo,
  source,
  showMoreHide,
  design,
  tech,
  isStartUp,
  webVitals,
  demoPrio
}) => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  return (
    <Box w="100%" textAlign="center">
      <LinkBox
        cursor="pointer "
        transition="ease"
        transitionProperty="opacity"
        transitionDuration="normal"
        _hover={{
          opacity: '72%'
        }}
      >
        <LinkOverlay href={demoPrio? demo : link || demo} target="_blank">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />

          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
      </LinkBox>
      <Text fontSize={14}>{tech}</Text>
      <Collapse startingHeight={!showMoreHide ? 4 : 6} in={show}>
        <Text fontSize={14} pt={1.5} /* noOfLines={show ? 30 : 2} */>
          {children}
        </Text>
      </Collapse>

      {!showMoreHide && (
        <>
          <Divider mb={0.5} mt={1.5} />
          <Button
            colorScheme="teal"
            variant="outline"
            size="xxs"
            fontSize="md"
            onClick={handleToggle}
            pr={2}
            pl={0.5}
            pb={0.5}
          >
            {show ? (
              <>
                <ChevronUpIcon />
                <Text fontSize="xs">Show less</Text>
              </>
            ) : (
              <>
                <ChevronDownIcon mt={0.5} />
                <Text fontSize="xs">Show more</Text>
              </>
            )}
          </Button>
        </>
      )}
      <Flex
        pt={!showMoreHide ? 1 : 0}
        align="center"
        my={2}
        gap={4}
        justify="center"
        wrap="wrap"
      >
        {demo && (
          <Link href={demo} target="_blank" order={isStartUp ? 1 : 1}>
            <Button size="sm" leftIcon={<IoLogoYoutube />} colorScheme="teal">
              Demo
            </Button>
          </Link>
        )}
        {featuresShowcase && (
          <Link
            href={featuresShowcase}
            target="_blank"
            order={isStartUp ? 4 : 2}
          >
            <Button size="sm" leftIcon={<IoLogoYoutube />} colorScheme="teal">
              Features Showcase
            </Button>
          </Link>
        )}
        {design && (
          <Link href={design} target="_blank" order={isStartUp ? 6 : 4}>
            <Button size="sm" leftIcon={<IoLogoBehance />} colorScheme="teal">
              My UX / UI Design
            </Button>
          </Link>
        )}
        {webVitals && (
          <Link href={webVitals} target="_blank" order={isStartUp ? 5 : 3}>
            <Button size="sm" leftIcon={<IoStatsChart />} colorScheme="teal">
              Web Vitals
            </Button>
          </Link>
        )}
        {link && (
          <Link
            href={link}
            passHref
            scroll={false}
            target="_blank"
            order={isStartUp ? 2 : 2}
          >
            <Button size="sm" leftIcon={<LinkIcon />} colorScheme="teal">
              Website
            </Button>
          </Link>
        )}
        {howTo && (
          <Link href={howTo} passHref scroll={false} target="_blank">
            <Button size="sm" leftIcon={<IoHelpSharp />} colorScheme="teal">
              How To Sign Up
            </Button>
          </Link>
        )}
        <Link href={source} passHref scroll={false} target="_blank" order={2}>
          <Button size="sm" leftIcon={<IoLogoGithub />} colorScheme="teal">
            Source
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
