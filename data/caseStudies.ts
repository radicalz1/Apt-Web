import { TFunction } from "i18next";

export const getCaseStudies = (t: (key: string) => string) => [
  {
    client: t('caseStudies.client1'),
    result: t('caseStudies.result1'),
    before: 'A1c: 7.2%',
    after: 'A1c: 5.6%',
    icon: 'activity',
    values: { before: 7.2, after: 5.6, max: 9, unit: '%' },
  },
  {
    client: t('caseStudies.client2'),
    result: t('caseStudies.result2'),
    before: 'hs-CRP: 4.2',
    after: 'hs-CRP: 1.5',
    icon: 'trending-down',
    values: { before: 4.2, after: 1.5, max: 5, unit: '' },
  },
  {
    client: t('caseStudies.client3'),
    result: t('caseStudies.result3'),
    before: 'Cognitive: 5/10',
    after: 'Cognitive: 9/10',
    icon: 'brain',
    values: { before: 5, after: 9, max: 10, unit: '/10' },
  },
];