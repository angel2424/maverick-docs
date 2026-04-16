// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Website Guide | Maverick Mobile Home Services',
      favicon: {
        href: '/favicon.svg?v=2',
        type: 'image/svg+xml',
      },
      customCss: [
        './src/styles/global.css'
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Welcome', link: '/introduction' },
            { label: 'How to Log In', link: '/getting-started/how-to-log-in' },
            { label: 'Navigating Directus', link: '/getting-started/navigating-directus' },
          ],
        },

        {
          label: 'Managing Your Website',
          items: [
            {
              label: 'Global Settings',
              collapsed: false,
              items: [
                { label: 'Contact Info & Hours', link: '/global-settings/contact-info' },
                { label: 'Social Media Links', link: '/global-settings/social-media' },
                { label: 'Footer Text', link: '/global-settings/footer-text' },
              ],
            },
            {
              label: 'Home Page',
              collapsed: false,
              items: [
                { label: 'Hero Section', link: '/home-page/hero' },
                { label: 'Services Section', link: '/home-page/services-section' },
                { label: 'Process Section', link: '/home-page/process-section' },
                { label: 'Expertise Section', link: '/home-page/expertise-section' },
                { label: 'Why Us Section', link: '/home-page/why-us-section' },
                { label: "Owner's Message", link: '/home-page/owners-message' },
              ],
            },
            {
              label: 'About Page',
              collapsed: false,
              items: [
                { label: 'Hero & Our Story', link: '/about-page/hero-and-story' },
                { label: 'Trust & Expertise', link: '/about-page/trust-and-expertise' },
                { label: 'What Drives Us', link: '/about-page/what-drives-us' },
                { label: 'Commitment & Areas', link: '/about-page/commitment-and-areas' },
                { label: 'Closing Message', link: '/about-page/closing-message' },
              ],
            },
            {
              label: 'Services Pages',
              collapsed: false,
              items: [
                { label: 'Overview & City Pages', link: '/services-pages/overview' },
                { label: 'Editing a City Page', link: '/services-pages/editing-a-city-page' },
                { label: 'Managing Services', link: '/services-pages/managing-services' },
                { label: 'City-Specific Descriptions', link: '/services-pages/city-descriptions' },
              ],
            },
            {
              label: 'Our Work Gallery',
              collapsed: false,
              items: [
                { label: 'Uploading Photos', link: '/our-work/uploading-photos' },
                { label: 'Uploading Videos', link: '/our-work/uploading-videos' },
              ],
            },
          ],
        },

        {
          label: 'Reference',
          items: [
            { label: 'All Collections Overview', link: '/reference/all-collections' },
            { label: 'Formatting Guide', link: '/reference/formatting-guide' },
            { label: 'Troubleshooting', link: '/reference/troubleshooting' },
          ],
        },
      ],
    }),
  ],

  redirects: {
    '/': '/introduction/',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
