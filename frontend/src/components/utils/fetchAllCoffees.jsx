import axios from 'axios';
const COFFEE_API_ADDR = process.env.COFFEE_API_ADDR;

const fetchAllCoffees = async () => {
  try {
    const response = await axios.get(`${COFFEE_API_ADDR}/coffee/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching coffee data:', error);
    return [];
  }
};

export default fetchAllCoffees;
