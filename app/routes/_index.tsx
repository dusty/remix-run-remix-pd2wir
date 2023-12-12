import type { MetaFunction } from '@remix-run/node';
import { Box } from '@chakra-ui/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return <Box bg="red.500">hi</Box>;
}
