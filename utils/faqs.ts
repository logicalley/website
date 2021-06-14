import type { Faq } from '..'

const faqs: Faq[] = [
  {
    question: 'Does Annie work with Youtube Music?',
    answer: 'Currently, Annie only supports Spotify, Deezer and Apple Music. We plan to add more streaming platforms in the future.'
  },
  {
    question: 'Is Annie free or subscription based?',
    answer: 'Annie is free to use. You don\'t need a subscription to use Annie.'
  },
  {
    question: 'Can I convert playlists via Annie?',
    answer: 'No, you can\'t convert playlists via Annie at this time. However, we\'re currently working on the version 2 of Annie which would provide that functionality.'
  },
  {
    question: 'Can I convert a track with Annie on my PC?',
    answer: 'Annie is only available on iOS devices at this time.'
  },
  {
    question: 'What happens when the shared song isn\'t on the streaming platform the recipient uses?',
    answer: 'In the case that the song is unavailable on a streaming platform, the Annie link would convey access to other platforms, but said platform would be omitted from the result.'
  }
];

export default faqs;
