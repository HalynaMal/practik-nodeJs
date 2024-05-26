import fs from 'fs/promises';
import { PATH_DB } from '../constans/path.js';
import { isUtf8 } from 'buffer';

const logExpensiveProducts = async () => {
    const PRICE = '500';
try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const dataArray = JSON.parse(data);
    const products = dataArray.filter(({ price }) => price >= PRICE);
    if (!products.length) {
        console.log('No expensive products');
        return; 
    } 
    console.table(products);
} catch (error) {
    console.log('error')
}
}

logExpensiveProducts();