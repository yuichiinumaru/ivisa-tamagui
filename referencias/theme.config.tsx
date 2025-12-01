import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import TamaguiWrapper from './components/TamaguiWrapper';
const config: DocsThemeConfig = {
  logo: <span>SUSHI</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  main: (props: { children?: React.ReactNode }) => {

    const { children } = props

    return (
      <>
        <TamaguiWrapper>
          {children}
        </TamaguiWrapper>
      </>
    );
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
