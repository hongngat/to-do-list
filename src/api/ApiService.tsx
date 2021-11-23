export const ApiService = {
    
    get: (url:any) => {
        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => res.json());
    },
    post: (url:any, body:any) => {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json());
    },
    put: (url:any, body:any) => {
        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json());
    },
    delete: (url:any) => {
        return fetch(url, {
            method: "DELETE"
        }).then(res => res.json());
    }
};