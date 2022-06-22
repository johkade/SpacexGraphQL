import spaceXAxios from './axios';

const fetchRocketsWithAxios = async (
  limit: number = 20,
  offset: number = 0,
) => {
  const query = `
    {
        rockets (limit: ${limit}, offset: ${offset}) {
            id
        }
    }`;

  const response = await spaceXAxios.post('', {
    query,
  });
  return Promise.resolve(response.data);
};

export default fetchRocketsWithAxios;
