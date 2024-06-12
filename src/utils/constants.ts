import { IBoxItem } from "../components/Box/components/BoxItem";

export const items: IBoxItem[] = [
  { 
    title: 'Upload Business License', 
    subTitle: 'Upload your articles of incorporation, contractor license, or other registration with the state.',
    checkCircleColor: '#17B26A',
    className: 'mb-4'
  },
  {
    title: 'Complete Onboarding Questionaire',
    checkCircleColor: '#17B26A80',
    className: 'mb-4',
    titleColor: 'text-gray-500',
  },
  {
    title: 'Sign NDA',
    subTitle: 'NDA will be sent separately, via Adobe e-sign',
    checkCircleColor: '#17B26A4D',
    className: 'mb-4',
    titleColor: 'text-gray-400',
    subTitleColor: 'text-gray-300'
  },
  {
    title: 'Upload Certificate of Insurance',
    subTitle: 'Requirements and example document attached.',
    link: 'accord_sample.pdf',
    checkCircleColor: '#D0D5DD',
    isBlankCheckCircle: true,
    titleColor: 'text-gray-400',
    subTitleColor: 'text-gray-300'
  }
]