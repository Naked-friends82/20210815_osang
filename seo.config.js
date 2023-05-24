export default {
  openGraph: {
    type: 'website',
    site_name: 'Sangmin Oh',
    description: 'Art and design studio established in 2021 by Sangmin Oh based in Netherlands and Korea.',
    images: [
      { url: `${process.env.NEXT_PUBLIC_API_URL}/_next/image?url=%2Fasset%2Fknitted_light%2Fknitted_light_1.jpg&w=1200&q=65` },
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
      content: 'fe9c8cb38f47d80ab58391feb292904c855d9d18',
    },
    {
      name: 'google-site-verification',
      content: '_5KMylGBPlSpoGv9goTVZp3wSVur5_JHobernc6pCtw',
    },
  ],
};
