import axios from 'axios';
const COFFEE_API_ADDR = process.env.COFFEE_API_ADDR;

const fetchComment = async (coffeeId) => {
  try {
    const response = await axios.get(`${COFFEE_API_ADDR}/comment/coffee/${coffeeId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comment data:', error);
    return [];
  }
};

export default fetchComment;
