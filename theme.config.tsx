import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  primaryHue: {
    dark: 30,
    light: 30,
  },
  logo: <span className="nx-font-bold">Fivemanage</span>,
  project: {
    link: 'https://github.com/fivemanage/docs',
  },
  chat: {
    link: 'https://discord.gg/wUgAGHnucZ',
  },
  docsRepositoryBase: 'https://github.com/fivemanage/docs',
  footer: {
    text: 'Fivemanage Docs',
  },
  useNextSeoProps() {
    return {
      title: 'Fivemanage Docs',
      description: 'Fivemanage Docs',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://docs.fivemanage.com',
        title: 'Fivemanage Docs',
        description: 'Fivemanage Docs',
      }
    }
  }
}

export default config
