const dataSlider = [
  {
    id: 0,
    title: 'Quiz aléatoire',
    link: 'https://opentdb.com/api.php?amount=10&type=multiple',
  },
  {
    id: 1,
    title: 'Quiz sur Lyon',
    link: `${process.env.REACT_APP_API_URL}/lyonquiz`,
  },
  {
    id: 2,
    title: 'Quiz de la Wild',
    link: `${process.env.REACT_APP_API_URL}/wildquiz`,
  },
  {
    id: 3,
    title: 'Quiz aléatoire difficile',
    link: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple',
  },
];

export default dataSlider;
