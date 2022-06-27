const colors = [
  '#206b9a',
  '#99612a',
  '#258d2d',
  '#255794',
  '#a0288a',
  '#156f80',
  '#781424',
  '#4e4d4b',
  '#4ea9e1',
  '#d47f2a',
  '#37d444',
  '#3481de',
  '#db34bc',
  '#2db6d1',
  '#d32b47',
  '#dba232',
];

export default (letter: string): string => {
  const num = letter.charCodeAt(0);
  const index = num % colors.length;
  return colors[index];
};
