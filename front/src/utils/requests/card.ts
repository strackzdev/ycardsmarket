import axios from 'axios';
import type { Card } from '@/utils/types/card';

export async function getAllCards(): Promise<Card[]> {
  return axios.get('https://ycardsmarket.onrender.com/api/v1/lorcana/?format=json')
    .then(response => response.data);
}
