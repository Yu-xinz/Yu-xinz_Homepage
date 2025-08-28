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
import thumbUnderstood from '../public/images/publications/Understood.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container maxWidth="1080px">
      <Box
        borderRadius="lg"
        mt={10}
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
          <p>1st year M.S. student</p>
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
          I&apos;m Shizhen Zhang, a incomming 1st year M.S. in Computer Science student at the&nbsp;
          <Link
            as={NextLink}
            href="https://www.mccormick.northwestern.edu/"
            passHref
            target="_blank"
          >
            McCormick School of Engineering
          </Link>
          ,&nbsp;
          <Link
            as={NextLink}
            href="https://www.northwestern.edu/"
            passHref
            target="_blank"
          >
            Northwestern University
          </Link>
          . Previously, I completed my undergraduate studies at the&nbsp;
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
          , under the supervision of Prof.&nbsp;
          <Link
            as={NextLink}
            href="https://faculty.sist.shanghaitech.edu.cn/liquan/"
            passHref
            target="_blank"
          >
            Li Quan
          </Link>
          . I&apos;m currently looking for some exciting research opportunities where I can learn, contribute, and grow as a researcher in a collaborative environment!
        </Paragraph>

        <br />

        <Paragraph>
          My research interests are centered around&nbsp;
          <span style={{ fontWeight: 'bold' }}>
            Human-Computer Interaction
          </span>
          &nbsp;(HCI), with a particular focus on designing Virtual and Mixed Reality experiences and accessibility-oriented applications. I am passionate about exploring how technology can be made more intuitive, inclusive, and enjoyable, aiming to bridge the gap between complex systems and the diverse needs of users. Through thoughtful design and experimentation, I hope to contribute to creating tools and experiences that truly enhance people’s interaction with technology.
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
          <BioYear>2021 - 2025</BioYear>
          <Description>
            ShanghaiTech University <br /> <SmallText>B.Eng student</SmallText>
          </Description>
        </BioSection>
        <BioSection>
          <BioYear>Incomming~</BioYear>
          <Description>
            Northwestern University <br /> <SmallText>M.S student</SmallText>
          </Description>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Selected Publications
        </Heading>

        <SimpleGrid columns={[1, 2, 1]} gap={6}>
          <GridItem
            title="Understood: Real-Time Communication Support for Adults with ADHD Using Mixed Reality"
            thumbnail={thumbUnderstood}
          >
            <Link
              as={NextLink}
              href="https://yuxinz.vercel.app/"
              passHref
              target="_blank"
              color="inherit"
              fontWeight="bold"
            >
              Shizhen Zhang
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
              href="https://faculty.sist.shanghaitech.edu.cn/liquan/"
              passHref
              target="_blank"
              color="inherit"
            >
              Quan Li
            </Link>

            <br />
            UIST 2025
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
              fontWeight="bold"
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
            TVCG 2025
          </GridItem>

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
              fontWeight="bold"
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
            Chinese CHI 2024 (Best Paper Award)
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
