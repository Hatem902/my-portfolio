import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" paddingTop={3}>
      &copy; {new Date().getFullYear()} Hatem "Tommy" Lamine. All Rights
      Reserved.
    </Box>
  )
}

export default Footer
