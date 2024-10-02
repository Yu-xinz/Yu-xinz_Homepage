import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay, Flex } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const GridItem = ({ children, href, title, thumbnail }) => (
  <LinkBox cursor="pointer" w="100%">
    <Flex align="flex-start">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        width={160}
        height={160}
        style={{ borderRadius: '12px' }}
      />
      <Box ml={4} textAlign="left"> {}
        <LinkOverlay href={href} target="_blank">
          <Text fontSize={16} style={{ fontWeight: 'bold' }}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={12}>{children}</Text>
      </Box>
    </Flex>
  </LinkBox>
);

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => (
  <LinkBox
    as={NextLink}
    href={`/${category}/${id}`}
    scroll={false}
    cursor="pointer"
    w="100%"
  >
    <Flex align="flex-start">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        width={100}
        height={100}
        style={{ borderRadius: '12px' }}
      />
      <Box ml={4} textAlign="left"> {}
        <LinkOverlay as="div" href={`/${category}/${id}`}>
          <Text fontSize={20}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </Box>
    </Flex>
  </LinkBox>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
