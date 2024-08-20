class Api {
  constructor(token, url) {
    this.token = localStorage.getItem("token");
    this.url = process.env.REACT_APP_API_URI;
  }

  async getProduits() {
    const response = await fetch(this.url + "/shop/all?limit=10", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      return [];
    }
  }
  async getProduit(id) {
    const response = await fetch(this.url + "/shop/product/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      return [];
    }
  }
}

export default Api;
