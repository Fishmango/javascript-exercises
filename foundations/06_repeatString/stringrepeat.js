

const repeatString = (string, num) => {
    if (num % 2 !== 0) {
        return 'ERROR';
    }
    else {
        let result = '';
        for (let i=0;i < num; i++) {
            result += string;
        }
        return result;
    } 
}




console.log(repeatString('hey', 6));
