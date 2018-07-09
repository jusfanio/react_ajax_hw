export function getMaxOfArray(numArray) {
    let max = 0;

    for (let key in numArray) {
        const maxAmount = Number(numArray[key]);

        if (!isNaN(maxAmount)) {
            max = Math.max.apply( Math, maxAmount[key] );
            return max;
        } else {
            console.warn('Нет зарплаты:', maxAmount);
        }
    }

}


