import axios from 'axios';
const COFFEE_API_ADDR = process.env.COFFEE_API_ADDR;

const fetchCoffeeById = async (coffeeId) => {
  try {
    const response = await axios.get(`${COFFEE_API_ADDR}/coffee/all/${coffeeId}`);
    return response.data; // API에서 반환된 특정 커피의 정보
  } catch (error) {
    console.error(`Error fetching coffee with ID ${coffeeId}:`, error);
    return null; // 에러 발생 시 null 반환
  }
};

export default fetchCoffeeById;