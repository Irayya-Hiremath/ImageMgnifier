import axios from 'axios'
export async function getProductsList() {
  const url = 'https://fakestoreapi.com/products/category/jewelery'
  return axios
    .get(url,{})
    .then(response => {
      return response.data
    })
    .catch(error => {
        return error.response.data
    })
}


