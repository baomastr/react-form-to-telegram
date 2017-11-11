var jsonHeaders = new Headers();
jsonHeaders.set("Content-Type", "application/json");
export default {
    post: (url, body) => {
        return fetch(url, {
            method: "POST",
            headers:jsonHeaders,
            body
        }).then(response =>  response.json())
    }
}

