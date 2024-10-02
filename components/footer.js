import NextLink from 'next/link'
import { Link, Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Shizhen Zhang. Powered by&nbsp;
      <Link
        as={NextLink}
        href="https://github.com/craftzdog/craftzdog-homepage"
        passHref
        target="_blank"
        color="inherit"
      >
        Takuya Matsuyama
      </Link>.
    </Box>
  )
}

export default Footer
