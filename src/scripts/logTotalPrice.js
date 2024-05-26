import fs from 'fs/promises';
import { PATH_DB } from '../constans/path.js';
import chalk from 'chalk';

const logTotalPrice = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const dataArray = JSON.parse(data);
        const totalPrice = dataArray.reduce((acc, { price }) => {
            return acc + Number(price);
        }, 0);
        console.log(chalk.green(`Total price: ${totalPrice}`));
    } catch (error) {
        console.log('error')
    }
};

logTotalPrice();