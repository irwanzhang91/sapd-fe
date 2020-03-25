export function validateNumber(value, max_value){
    if(!/^[0-9]+$/.test(value)){
        return 0;
    }

    if(value < 0){
        return 0;
    }

    if(max_value > 0){
        if(value > max_value){
            return max_value;
        }
    }

    return parseInt(value, 10);
}
