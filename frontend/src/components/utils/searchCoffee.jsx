import axios from 'axios';
const COFFEE_API_ADDR = process.env.COFFEE_API_ADDR;

const searchCoffee = async (coffeeTitle) => {
  try {
    const response = await axios.get(`${COFFEE_API_ADDR}/search/coffee`, {
      params: { coffeeTitle: coffeeTitle }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching coffee', error);
    return [];
  }
};

export default searchCoffee;
