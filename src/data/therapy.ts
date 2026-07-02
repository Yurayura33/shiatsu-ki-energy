const description =
  'Japanese Wellness Therapy in the Sutton & Carshalton area — acupressure and Qi energy treatment by Joseph, restoring the natural flow of qi to relieve tension and support wellbeing. Home visits available.';

export const therapy = {
  meta: {
    title: 'Japanese Wellness Therapy | Acupressure & Qi Energy',
    description,
  },
  // JSON-LD passed to Layout; @context and url are added there.
  schema: {
    '@type': 'HealthAndBeautyBusiness',
    name: 'Japanese Wellness Therapy',
    description,
    telephone: '+447789297482',
    email: 'eikou.1988@icloud.com',
    priceRange: '££',
    areaServed: 'Sutton, Carshalton and surrounding areas',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.3726485,
      longitude: -0.1945654,
    },
  },
  // In-page section anchors for the header nav.
  nav: [
    { href: '#treatment', label: 'The Treatment' },
    { href: '#methods', label: 'Methods' },
    { href: '#practitioner', label: 'Practitioner' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ],
  hero: {
    titleJp: '指圧　気功療法', // "Acupressure · Qigong Therapy" — TODO(jp): confirm with Joseph
    titleEn: 'Acupressure & Qi Energy',
    tagline:
      'Restoring the natural flow of qi — relieving tension and supporting the body’s own healing.',
    cta: 'Get in Touch',
    scroll: 'Scroll',
  },
  intro: {
    title: 'The Treatment',
    subtitle: '施術について', // TODO(jp): confirm Japanese with Joseph
    paragraphs: [
      'My treatment involves channeling the great energy (Qi) of heaven and earth to restore and strengthen the body’s natural energy balance, improving physical discomfort and overall well-being.',
      'It stimulates pressure points along the body’s energy meridians to restore the natural flow of qi, reducing tension and stress-related stiffness while supporting the body’s natural healing — bringing both deep relaxation and physical relief.',
    ],
  },
  methods: {
    title: 'Treatment Methods',
    subtitle: '施術の方法', // TODO(jp): confirm Japanese with Joseph
    intro: 'Each session combines the following approaches, individually tailored to what your body needs on the day.',
    items: [
      {
        label: 'Acupressure',
        text: 'The body has twelve major energy pathways (meridians) along which acupressure points are located. By stimulating these points, we regulate the flow of energy and restore the body’s natural balance.',
      },
      {
        label: 'Massage & Muscle Relaxation',
        text: 'When energy flow becomes stagnant, muscles and tendons tend to stiffen. Gentle massage helps improve energy circulation, promoting relaxation and relieving tension.',
      },
      {
        label: 'Percussion Therapy',
        text: 'Where stiffness is more pronounced, light tapping motions help loosen tight areas — encouraging energy flow and releasing blockages, leaving the body feeling lighter and more at ease.',
      },
      {
        label: 'Hands-off Energy Healing',
        text: 'When deeper adjustments are needed, a hands-off technique is used — placing the hands near the body without direct contact — to help balance the unseen aspects of the body’s energy system.',
      },
    ],
    note: 'Please note: during the session, acupressure on areas with poor energy circulation may cause temporary discomfort or mild pain. I will always do my best to minimise this.',
  },
  practitioner: {
    title: 'Your Practitioner',
    subtitle: '施術者', // TODO(jp): confirm Japanese with Joseph
    name: 'Joseph Koken', // TODO(name): confirm spelling vs "Joseph Eiko" used on the Aikido page
    rank: '20 years’ experience in Japan · Japanese Aikido master',
    bio1: '“Hi, I’m Joseph. From backache to mental fatigue, just let us know what’s bothering you.”',
    bio2: 'Through this treatment, I aim to restore your natural energy balance, helping you feel lighter, more refreshed, and in harmony with both body and mind.',
  },
  pricing: {
    title: 'Treatment Fees',
    subtitle: '料金', // TODO(jp): confirm Japanese with Joseph
    items: [
      { duration: '60 min', price: '£70' },
      { duration: '90 min', price: '£90' },
      { duration: '120 min', price: '£120' },
    ],
    note: 'Sessions are available from 30 minutes. Each treatment is individually tailored to your needs.',
    homeVisit: 'Home visit treatment +£20',
  },
  contact: {
    title: 'Contact',
    subtitle: 'お問い合わせ',
    intro: 'To book a session or ask a question, get in touch — home visits are available across the local area.',
    phoneLabel: 'Phone',
    phone: '077 8929 7482',
    phoneHref: 'tel:+447789297482',
    emailLabel: 'Email',
    email: 'eikou.1988@icloud.com',
    emailHref: 'mailto:eikou.1988@icloud.com',
    areaLabel: 'Area',
    area: 'Sutton / Carshalton area — home visits available',
    mapsLabel: 'View on Google Maps',
    mapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJmeGvFfKUYUMRZwMkdIPVHME',
    // Keyless embed (no API key needed) centered on the place. www.google.com host keeps it within the CSP.
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9972!2d-0.1945654!3d51.3726485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x436194f215afe199%3A0xc11cd58374240367!2sJapanese%20Wellness%20Therapy!5e0!3m2!1sen!2suk',
  },
  footer: {
    backToTop: 'Back to top ↑',
  },
};
