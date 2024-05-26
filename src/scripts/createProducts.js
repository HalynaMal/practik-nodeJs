import fs from 'fs/promises';
import { PATH_DB } from "../constans/path.js";
import { createFakeProduct } from '../utils/creatFakeProduct.js';

const createProducts = async (amount) => {
     
    try {
        const data = await fs.readFile(PATH_DB);
        const resultData = JSON.parse(data);
        for (let i = 0; i < amount; i += 1) {
            resultData.push(createFakeProduct());
        }
        await fs.writeFile(PATH_DB, JSON.stringify(resultData, null, 2))
        console.log('Products create');
    } catch (error) {
    console.log('error')
    };
    
}

createProducts(7)

