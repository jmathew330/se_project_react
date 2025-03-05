const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function addItems(newItem) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  }).then(checkResponse);
}

function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

export { getItems, addItems, deleteItem };
