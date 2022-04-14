<template>
  <div class="flex h-full bg-white rounded overflow-hidden shadow-lg">
    <a href="post.html" class="flex flex-wrap no-underline hover:no-underline">
      <div class="w-full md:w-2/3 rounded-t">
        <img :src="img.safe" class="h-full w-full shadow">
      </div>
      <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
          <p class="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">GETTING STARTED</p>
          <div class="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome fellow My web b2c</div>
          <p class="text-gray-800 font-serif text-base px-6 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptatibus.
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      img: {
        safe: require('@/assets/images/safe.jpg'),
      },
    }
  },
}
</script>

<style scoped>

</style>
