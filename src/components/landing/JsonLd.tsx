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
          text: 'A faith-driven framework for Filipino advisors featuring 3 pillars of accountability, word-for-word ownership scripts, a weekly reset routine, and 4 bonus resources including a tracker template and follow-up system. It\'s designed for professionals who want to own outcomes instead of excuses, and sell with integrity rather than pressure.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does the playbook cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The complete playbook package is $27 as a one-time payment with lifetime access. No subscriptions, no hidden fees, no upsells. You get the full playbook PDF, presentation deck, and all 4 bonus resources immediately. There\'s also a 30-day money-back guarantee if it doesn\'t meet your expectations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the playbook?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You receive the complete 14-page playbook covering all 3 Pillars of 100% Accountability, the Ownership Script (word-for-word), the Weekly Reset Routine, and the Affiliate Advantage Guide. Plus 4 bonus resources: an Accountability Tracker Template, a Client Follow-Up System, a Team Huddle Agenda Template, and a 7-Day Quick-Start Checklist. You also get the interactive Command Center dashboard.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a money-back guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, there is a 30-day money-back guarantee. If the playbook doesn\'t deliver value within your first month, email mark.tantongco@gmail.com for a full refund. No questions asked.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is this playbook for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This playbook is built for faith-driven Filipino advisors, financial planners, insurance professionals, agency unit managers, and team leaders who want to own outcomes instead of excuses.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is this different from other sales training?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most sales training focuses on tactics: closing techniques, objection handling, pipeline management. This playbook focuses on the foundation beneath all tactics: accountability. When you own your outcomes, every tactic works better. Plus, it\'s the only framework that combines faith (Philippians 4:13) with a repeatable sales system.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the affiliate program work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When you purchase the playbook, you automatically qualify for the affiliate program at 30% commission ($8.10 per sale). Share your unique affiliate link with peers. No ad spend required—just genuine recommendations.',
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
