<template>
  <div class="container px-4 md:px-0 max-w-6xl mx-auto relative z-1000">
    <div class="mx-0 sm:mx-6">
      <div class="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-2xl p-8">

        <Banner></Banner>

        <!--Posts Container-->
        <div class=" flex-wrap justify-between mx-6">
          <div>
            <div class="text-2xl font-bold py-8">Sản phẩm hàng đầu</div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
              <!--1/3 col -->
              <div class="flex flex-col flex-grow flex-shrink"
                   v-for="( productViewItem,productViewIndex ) in topViewProducts"
                   :key="productViewIndex">
                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <NuxtLink :to="{name:'product-id', params:{id:productViewItem.id}}" class="flex flex-wrap no-underline hover:no-underline">
                    <img :src="productViewItem.image.full_image_path" class="h-72 w-full rounded-t pb-6">
                    <div class="w-full font-bold text-xl text-gray-900 px-6">{{ productViewItem.name }}</div>
                  </NuxtLink>
                </div>
                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div class="grid grid-cols-3 gap-2">
                    <span class="text-red-600 text-sm ">{{ productViewItem.price }} vnd</span>
                    <span class="text-gray-400 text-sm ">view: {{ productViewItem.views }}</span>

                    <span class="text-sm">quantity: {{ productViewItem.quantity }}</span>
                    <span class="text-sm">sold: {{ productViewItem.sold }}</span>
                    <span></span>
                    <button @click="addToCart(productViewItem)" class="flex justify-center items-center bg-blue-300 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                           class="bi bi-cart" viewBox="0 0 16 16">
                        <path
                          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="text-2xl font-bold py-8">Sản phẩm bán chạy</div>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-2">
              <!--1/3 col -->
              <div class="flex flex-col flex-grow flex-shrink"
                   v-for="( productSoldItem,productSoldIndex ) in topSoldProducts"
                   :key="productSoldIndex">
                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <NuxtLink :to="{name:'product-id', params:{id:productSoldItem.id}}" class="flex flex-wrap no-underline hover:no-underline">
                    <img :src="productSoldItem.image.full_image_path" class="h-72 w-full rounded-t pb-6">
                    <div class="w-full font-bold text-xl text-gray-900 px-6">{{ productSoldItem.name }}</div>
                  </NuxtLink>
                </div>
                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div class="grid grid-cols-3 gap-2">

                    <span class="text-red-600 text-sm ">{{ productSoldItem.price }} vnd</span>
                    <span class="text-gray-400 text-sm ">view: {{ productSoldItem.views }}</span>

                    <span class="text-sm">quantity: {{ productSoldItem.quantity }}</span>
                    <span class="text-sm">sold: {{ productSoldItem.sold }}</span>
                    <span></span>
                    <button class="flex justify-center items-center bg-blue-300 rounded-lg" @click="addToCart(productSoldItem)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                           class="bi bi-cart" viewBox="0 0 16 16">
                        <path
                          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="text-2xl font-bold py-8">Danh sách sản phẩm</div>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-2">
              <!--1/3 col -->
              <div class="flex flex-col flex-grow flex-shrink" v-for="( productItem,productIndex ) in lastProducts"
                   :key="productIndex">
                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <NuxtLink :to="{name:'product-id', params:{id:productItem.id}}" class="flex flex-wrap no-underline hover:no-underline">
                    <img :src="productItem.image.full_image_path" class="h-72 w-full rounded-t pb-6">
                    <div class="w-full font-bold text-xl text-gray-900 px-6">{{ productItem.name }}</div>
                  </NuxtLink>
                </div>
                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div class="grid grid-cols-3 gap-2">

                    <span class="text-red-600 text-sm ">{{ productItem.price }} vnd</span>
                    <span class="text-gray-400 text-sm ">view: {{ productItem.views }}</span>

                    <span class="text-sm">quantity: {{ productItem.quantity }}</span>
                    <span class="text-sm">sold: {{ productItem.sold }}</span>
                    <span></span>
                    <button class="flex justify-center items-center bg-blue-300 rounded-lg" @click="addToCart(productItem)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                           class="bi bi-cart" viewBox="0 0 16 16">
                        <path
                          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      cart: [],
      lastProducts: [],
      topViewProducts: [],
      topSoldProducts: [],
    }
  },
  async fetch() {
    // if (process.client) {
    //   //thực thi các lệnh thuộc về trình duyệt
    // }
    try {
      const resp = await this.$repositories.home.getHome();
      console.log(resp);
      this.lastProducts = resp.lastProducts;
      this.topViewProducts = resp.topViewProducts;
      this.topSoldProducts = resp.topSoldProducts;
    } catch (e) {
      console.log(e);
    } //await this.$axios.get('/home');
  },
  fetchOnServer:false
}
</script>
