export function JsonLd() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: '100% Accountability Sales Playbook',
    description:
      'The faith-driven framework for Filipino advisors who own results, lead stronger teams, and sell with integrity. By Mark Anthony Ng Tantongco.',
    image: 'https://marktantongco.github.com/cover-image.png',
    brand: {
      '@type': 'Brand',
      name: '100% Accountability',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://marktantongco.gumroad.com/l/100-accountability-playbook',
      priceCurrency: 'USD',
      price: '27.00',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Person',
        name: 'Mark Anthony Ng Tantongco',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '3',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the 100% Accountability Sales Playbook?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A faith-driven framework for Filipino advisors featuring 3 pillars of accountability, word-for-word ownership scripts, a weekly reset routine, and 4 bonus resources including a tracker template and follow-up system.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does the playbook cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The complete playbook package is $27 as a one-time payment with lifetime access. No subscriptions or hidden fees. Includes a 30-day money-back guarantee.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the playbook?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 3 Pillars of 100% Accountability, the Ownership Script, the Weekly Reset Routine, the Affiliate Advantage Guide, an Accountability Tracker Template, a Client Follow-Up System, a Team Huddle Agenda Template, and a 7-Day Quick-Start Checklist.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a money-back guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, there is a 30-day money-back guarantee. Email mark.tantongco@gmail.com for support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is this playbook for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Faith-driven Filipino advisors, financial planners, insurance professionals, and team leaders who want to own outcomes instead of excuses, and sell with integrity rather than pressure.',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://marktantongco.github.com',
      },
    ],
  }

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '100% Accountability',
    url: 'https://marktantongco.github.com',
    logo: 'https://marktantongco.github.com/logo.svg',
    description: 'The faith-driven framework for purpose-driven professionals.',
    founder: {
      '@type': 'Person',
      name: 'Mark Anthony Ng Tantongco',
      jobTitle: 'Agency Sales Director',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  )
}
