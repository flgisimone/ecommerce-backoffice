const BASE_URL = "https://api.escuelajs.co/api/v1/";

export const GET = (type, id = "") => {
    return fetch(BASE_URL + type + id).then(res => res.json())
}

  export const PUT = (type, objBody, id) => {
    return fetch(BASE_URL + type + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objBody),
    });
  };

  export const DELETE = (type, id) => {
    return fetch(BASE_URL + type + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  