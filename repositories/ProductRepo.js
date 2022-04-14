export default ($axios) => ({
  getProductById(id) {
    return $axios.get(`products/${id}`)
  },
})
