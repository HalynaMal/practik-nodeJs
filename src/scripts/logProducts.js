import fs from 'fs/promises';
import { PATH_DB } from '../constans/path.js';

const logProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const parseData = JSON.parse(data);
    if (parseData.length === 0) {
      console.log('Products not found');
    } else {
      console.table(parseData);
    }
  } catch (error) {
    console.log(error);
  }
};

logProducts();

