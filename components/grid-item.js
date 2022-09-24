import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Collapse,
  Button,
  Link,
  Flex
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useState } from 'react'
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  LinkIcon
} from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoYoutube } from 'react-icons/io5'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box mt={2} w="100%" textAlign="center">
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
  id,
  title,
  thumbnail,
  demo,
  featuresShowcase,
  link,
  source
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
        <LinkOverlay href={link} target="_blank">
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
      <Collapse startingHeight={48} in={show}>
        <Text fontSize={14} /* noOfLines={show ? 30 : 2} */>{children}</Text>
      </Collapse>
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
      <Flex pt={2.5} align="center" my={2} justifyContent="space-around">
        {demo && (
          <Link href={demo} target="_blank">
            <Button size="sm" leftIcon={<IoLogoYoutube />} colorScheme="teal">
              Demo
            </Button>
          </Link>
        )}
        {featuresShowcase && (
          <Link href={featuresShowcase} target="_blank">
            <Button size="sm" leftIcon={<IoLogoYoutube />} colorScheme="teal">
              Features Showcase
            </Button>
          </Link>
        )}
        <Link href={link} passHref scroll={false} target="_blank">
          <Button size="sm" leftIcon={<LinkIcon />} colorScheme="teal">
            Link
          </Button>
        </Link>
        <Link href={source} passHref scroll={false} target="_blank">
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
