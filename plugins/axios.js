export default function ({$axios,$storage,redirect}) {
  $axios.onRequest(config => {
    config.headers.common['Authorization'] = 'Bearer' + $storage.getLocalStorage('token');
  })

  $axios.onResponse(response => {
    return response.data
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code===400){
      return Promise.reject(error.response.data)
    }
    if (code === 401) {
      redirect('/login')
    }
  })
};
