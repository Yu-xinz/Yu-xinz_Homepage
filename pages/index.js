import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, Description, SmallText } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbTrinity from '../public/images/publications/Trinity.png'
import thumbPatterns from '../public/images/publications/DesignPatterns.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container maxWidth="1080px">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
        &quot;Live in Love!&quot;
        </span>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box
          display="flex"
          flexDirection="column"
          flexGrow={1}
          alignItems="flex-end"
          justifyContent="center"
          textAlign="right"
        >
          <Heading as="h2" variant="page-title">
            Shizhen Zhang
          </Heading>
          <p>4th year B.Eng student <br />
            (Developer / Designer)
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
            w="200px"
            h="200px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/Me.jpg"
              alt="Profile image"
              width="200"
              height="200"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          I
        </Heading>
        <Paragraph>

          I&apos;m Shizhen Zhang, a 4th year B.Eng student at the&nbsp;

          <Link
            as={NextLink}
            href="https://sist.shanghaitech.edu.cn/sist_en/"
            passHref
            target="_blank"
          >
            School of Information Science and Technology
          </Link>

          ,&nbsp;

          <Link
            as={NextLink}
            href="https://www.shanghaitech.edu.cn/eng/"
            passHref
            target="_blank"
          >
            ShanghaiTech University
          </Link>

          , majoring in&nbsp;

          <span style={{ fontWeight: 'bold' }}>
            Computer Science
          </span>
          &nbsp;with a minor in&nbsp;

          <span style={{ fontWeight: 'bold' }}>
            Interaction Design
          </span>

          . I have joined&nbsp;
          <Link
            as={NextLink}
            href="https://faculty.sist.shanghaitech.edu.cn/liquan/"
            passHref
            target="_blank"
          >
            ViSeer Lab
          </Link>
          &nbsp;under the supervision of Prof.&nbsp;
          <Link
            as={NextLink}
            href="https://faculty.sist.shanghaitech.edu.cn/liquan/"
            passHref
            target="_blank"
          >
            Li Quan
          </Link>
          , where I have been actively involved in several research projects.
        </Paragraph>

        <br />

        <Paragraph>
          My research interest lies in&nbsp;
          <span style={{ fontWeight: 'bold' }}>
            Human-Computer Interaction
          </span>
          &nbsp;(HCI), which aims to enhance people&apos;s well-being by making technology easier and more natural to use through integrating computer technology and design.  I believe that thoughtful design can bridge the gap between complex technological systems and the users they serve, ultimately making technology more accessible and enjoyable for everyone.
        </Paragraph>

        <br />

        <Paragraph>
          Likewise, I&apos;m really interested in installation art and singing, enjoying my tenor time in choirs!
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2021 - Present</BioYear>
          <Description>
            ShanghaiTech University <br /> <SmallText>B.Eng student</SmallText>
          </Description>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Selected Publications
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

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            All publications
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          What I ♥
        </Heading>
        <Paragraph>
          <span style={{ fontWeight: 'bold' }}>
            Singing, singing and singing!
          </span>
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
