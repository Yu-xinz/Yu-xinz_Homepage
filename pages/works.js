import NextLink from 'next/link'
import { Link, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'

import thumbTrinity from '../public/images/publications/Trinity.png'
import thumbPatterns from '../public/images/publications/DesignPatterns.png'
import thumbUnderstood from '../public/images/publications/Understood.png'
import thumbUPinch from '../public/images/publications/UPinch.png'
import thumbMediMate from '../public/images/publications/MediMate.png'

const Works = () => (
  <Layout title="Works">
    <Container maxWidth="1080px" mt={6} mb={6}>
      <Heading as="h3" fontSize={20} mb={4}>
        Publications
      </Heading>

      <SimpleGrid columns={[1, 2, 1]} gap={6}>
        <GridItem
          href="https://dl.acm.org/doi/10.1145/3800645.3812891"
          title="MediMate: Co-Crafting Patient-Centered Medical Explanations Using LLMs as a Rehearsal Partner"
          thumbnail={thumbMediMate}
        >
          Yifan Jin,&nbsp;
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
          , Dongjun Chen,&nbsp;
          <Link
            as={NextLink}
            href="https://cat-ouyang.github.io/"
            passHref
            target="_blank"
            color="inherit"
          >
            Yang Ouyang
          </Link>
          , Yuheng Shao, Chang Jiang, Hanlu Li,&nbsp;
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
          DIS 2026 (Best Paper Honourable Mention)
        </GridItem>

        <GridItem
          href="https://dl.acm.org/doi/10.1145/3746059.3747602"
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
          TVCG 2025
        </GridItem>

        <GridItem
          href="https://dl.acm.org/doi/10.1145/3786995.3787021"
          title="UPinch: Enabling Unaligned Gaze-Hand Coordination for Selection in 3D Environments"
          thumbnail={thumbUPinch}
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
            href="https://cat-ouyang.github.io/"
            passHref
            target="_blank"
            color="inherit"
          >
            Yang Ouyang
          </Link>
          ,&nbsp;
          <Link
            as={NextLink}
            href="https://zhuqian.org/"
            passHref
            target="_blank"
            color="inherit"
          >
            Qian Zhu
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
          ICHEC 2025
        </GridItem>

        <GridItem
          href="https://doi.org/10.1109/TVCG.2025.3538768"
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
          href="https://dl.acm.org/doi/10.1145/3758871.3758877"
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
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
