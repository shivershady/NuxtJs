export default ($axios) => ({
  getProductById(id) {
    return $axios.get(`products/${id}`)
  },
  getProducts(categoryId) {
    return $axios.get('/products/category/' + categoryId);
  }
})
