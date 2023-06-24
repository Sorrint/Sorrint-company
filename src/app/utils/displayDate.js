import { toNumber } from 'lodash';

export function displayDate(timeStamp) {
    const date = new Date(toNumber(timeStamp));
    const now = new Date();
    addZero(date.getMinutes());
    if (now.getFullYear() !== date.getFullYear()) {
        return ` - ${date.getDate()} ${date.toLocaleString('en-Us', { month: 'long' })} ${date.getFullYear()}`;
    } else if (now.getDate() !== date.getDate()) {
        return ` - ${date.getDate()} ${date.toLocaleString('en-Us', { month: 'long' })}`;
    } else {
        const diff = (now - date) / 60000;
        if (diff >= 0 && diff < 1) {
            return ' - 1 минуту назад';
        }
        if (diff >= 1 && diff < 5) {
            return ' - 5 минут назад';
        }
        if (diff >= 5 && diff < 30) {
            return ' - 10 минут назад';
        }
        if (diff >= 30 && diff < 60) {
            return ' - 30 минут назад';
        }
        return ` - ${date.getHours()}:${addZero(date.getMinutes())}`;
    }
}

function addZero(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}
