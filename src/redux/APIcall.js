const baseURL = 'https://api.spacexdata.com/v3/';

const fetchMissions = async () => {
  const result = await fetch(`${baseURL}missions`);
  const data = await result.json();
  return data;
};

const fetchRockets = async () => {
  const result = await fetch(`${baseURL}rockets`);
  const data = await result.json();
  return data;
};

export { fetchMissions, fetchRockets };
