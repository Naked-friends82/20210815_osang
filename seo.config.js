export default {
  titleTemplate: '%s - Sangmin Oh',
  openGraph: {
    type: 'website',
    site_name: 'Sangmin Oh',
    description: 'Art and design studio established in 2021 by Sangmin Oh based in Netherlands and Korea.',
    images: [
      { url: `${process.env.NEXT_PUBLIC_API_URL}/asset/knitted_light/knitted_light_1.jpg` },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.png',
    },
  ],
  additionalMetaTags: [
    {
      name: 'naver-site-verification',
      content: 'c65ce9fe298b3161840f0a54299800d6897b3455',
    },
    {
      name: 'google-site-verification',
      content: '_5KMylGBPlSpoGv9goTVZp3wSVur5_JHobernc6pCtw',
    },
  ],
};
