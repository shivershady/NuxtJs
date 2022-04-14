export default ($axios) => ({
  getHome() {
    return $axios.get('home')
  },
})
