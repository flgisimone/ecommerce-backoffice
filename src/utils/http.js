const BASE_URL = "https://api.escuelajs.co/api/v1/";

export const GET = (type, id = "") => {
    return fetch(BASE_URL + type + id).then(res => res.json())
}