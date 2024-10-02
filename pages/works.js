import NextLink from 'next/link'
import { Link, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'

import thumbTrinity from '../public/images/publications/Trinity.png'
import thumbPatterns from '../public/images/publications/DesignPatterns.png'

const Works = () => (
  <Layout title="Works">
    <Container maxWidth="1080px">
      <Heading as="h3" fontSize={20} mb={4}>
        Publications
      </Heading>

      <SimpleGrid columns={[1, 2, 1]} gap={6}>
        <GridItem
            title="Trinity: Synchronizing Verbal, Nonverbal, and Visual Channels to Support Academic Oral Presentation Delivery"
            thumbnail={thumbTrinity}
          >
            <Link
              as={NextLink}
              href="https://yuchen-wu.com/"
              passHref
              target="_blank"
              color="inherit"
            >
              Yuchen Wu
            </Link>
            ,&nbsp;
            <Link
              as={NextLink}
              href="https://mike3090.github.io/"
              passHref
              target="_blank"
              color="inherit"
            >
              Shengxin Li
            </Link>
            ,&nbsp;
            <Link
              as={NextLink}
              href="https://yuxinz.vercel.app/"
              passHref
              target="_blank"
              color="inherit"
            >
              Shizhen Zhang
            </Link>
            ,&nbsp;
            <Link
              as={NextLink}
              href="https://andy-xingbowang.com/"
              passHref
              target="_blank"
              color="inherit"
            >
              Xingbo Wang
            </Link>
            ,&nbsp;
            <Link
              as={NextLink}
              href="https://faculty.sist.shanghaitech.edu.cn/liquan/"
              passHref
              target="_blank"
              color="inherit"
            >
              Quan Li
            </Link>
            
            <br />
            Submitted to International Symposium of Chinese CHI 2024
          </GridItem>
          
          <GridItem
            title="From Requirement to Solution: Unveiling Problem-Driven Design Patterns in Visual Analytics"
            thumbnail={thumbPatterns}
          >
            <Link
              as={NextLink}
              href="https://yuchen-wu.com/"
              passHref
              target="_blank"
              color="inherit"
            >
              Yuchen Wu
            </Link>
            ,&nbsp;
            <Link
              as={NextLink}
              href="https://gaoshh711.github.io/"
              passHref
              target="_blank"
              color="inherit"
            >
              Shenghan Gao
            </Link>
            ,&nbsp;
            <Link
              as={NextLink}
              href="https://yuxinz.vercel.app/"
              passHref
              target="_blank"
              color="inherit"
            >
              Shizhen Zhang
            </Link>
            , Xiaofeng Dou&nbsp;
            <Link
              as={NextLink}
              href="https://andy-xingbowang.com/"
              passHref
              target="_blank"
              color="inherit"
            >
              Xingbo Wang
            </Link>
            ,&nbsp;
            <Link
              as={NextLink}
              href="https://faculty.sist.shanghaitech.edu.cn/liquan/"
              passHref
              target="_blank"
              color="inherit"
            >
              Quan Li
            </Link>
            
            <br />
            Submitted to IEEE Transactions on Visualization and Computer Graphics (TVCG) 2024
          </GridItem>

        </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
