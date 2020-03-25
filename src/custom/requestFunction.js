export function arrayToURL(data) {
    var result = [];
    for (var key in data) {
        result.push(key + '=' + encodeURIComponent(data[key]));
    }
    return result.join('&');
}

export function getApiUrl(endpoint){
    // TODO: ganti lokasi URL live
    // return 'http://localhost:3008/' + endpoint;
    return 'https://api.sumbangapd.com/' + endpoint;
}

export function fetchAPI(url, method, body, cb) {
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    };

    if(body !== null){
        options.body = JSON.stringify(body);
    }

    fetch(getApiUrl(url), options)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        return cb(data);
    });
}

export function fileToBase64(file, cb){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        cb(reader.result);
    };
    reader.onerror = (error) => {
        console.log('Error: ', error);
    };
}
