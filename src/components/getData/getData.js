const URL = 'https://run.mocky.io/v3/d1ebf75f-fc13-49c2-af56-80efc083dc02';

export function getData() {
    return fetch(URL,
        {
            method: "GET",
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => { return res.json(); })
        .catch((err) => { console.log(err); });
}