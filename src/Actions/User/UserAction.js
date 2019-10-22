export const submitUserAction = (data) => {
    const base_url = "http://localhost:8080/user";

    fetch(base_url, {
        method: "post",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
            .then(response => response.JSON())
            .then(json => { console.log(json) })
    })
}
