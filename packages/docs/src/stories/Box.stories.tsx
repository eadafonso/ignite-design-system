import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text, Heading } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text as="strong">Testando o elemento Box</Text>
        <Heading as="h1">Testando o elemento Box</Heading>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}