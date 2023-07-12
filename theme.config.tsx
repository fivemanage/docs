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
}

export default config
