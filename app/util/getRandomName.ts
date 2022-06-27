const names = [
  'Toby',
  'Marcus',
  'Michelle',
  'Ludger',
  'Michael',
  'Lena',
  'Paul',
  'Julia',
  'Loette',
  'Tim',
];
const getRandomName = (): string => {
  const rand = Math.round(Math.random() * 10);
  const index = rand % names.length;
  const name = names[index];
  return name;
};

export default getRandomName;
