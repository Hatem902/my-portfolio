import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hatem's homepage" />
        <meta name="author" content="Hatem Lamine" />
        <meta name="author" content="hatem902" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="linkedin:title" content="Hatem Lamine" />
        <meta name="linkedin:site" content="hatem lamine" />
        <meta name="linkedin:creator" content="hatem lamine" />
        <meta property="og:site_name" content="Hatem Lamine" />
        <meta name="og:title" content="Hatem Lamine" />
        <meta property="og:type" content="website" />
        <meta property="linkedin:image" content="/portfolio-thumbnail.png" />
        <meta property="og:image" content="/portfolio-thumbnail.png" />
        <title>Hatem Lamine - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14} overflowX="hidden">
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
