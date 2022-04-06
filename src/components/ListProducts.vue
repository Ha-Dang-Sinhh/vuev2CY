<template>
  <div>
    <div class="flex h-20 shadow-lg shadow-black-500/50 justify-between items-center px-10">
      <img class="w-16 h-16 1" src="https://2momart.vn/upload/medium/042020/ma-giam-gia-shopee.png" alt="">
      <div class="flex items-center gap-4">
        <div class="md:inline-block hidden">
          <ul class="flex items-center gap-4 ">
            <li><a href="">Thông báo</a></li>
            <li><a href="">Sản phẩm</a></li>
            <li><a href="">ProVip</a></li>
            <li><a href="">Đăng ký</a></li>
            <li><a href="">Đăng nhập</a></li>
          </ul>
        </div>

        <div class="md:hidden inline-block ">
          <img src="./../assets/nav.svg" alt="">
        </div>
        <div>
          <img class="w-14 h-14" src="./../assets/cart.svg" alt="">
        </div>
      </div>

    </div>
    <div class="my-5">
      <h3 class="text-2xl font-semibold">Sản Phẩm Mới Nhất</h3>
    </div>
    <div class=" xl:grid-cols-4 grid ld:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mx-3" >
      <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative" v-for="(cartsItem,index) in carts" :key="index" >
        <img class="w-full h-72 object-cover" :src="cartsItem.image.full_image_path" alt="">
        <div class="mx-3 my-2 text-xl font-semibold">
          <div class="flex justify-between items-center">
            <h6>{{cartsItem.name}}</h6>
            <i class="fa-solid fa-heart"></i>
          </div>
          <span class="my-4 inline-block">{{cartsItem.price}}</span>
          <div class="flex justify-between items-center">
            <div class="">
              <span class="inline-block">-</span>
              <span class="w-16 h-8 text-center border border-indigo-200 inline-block ml-2 rounded ">1</span>
              <span class="inline-block ml-2">+</span>
            </div>
            <div class="gap-2">
              <button class="w-32 h-10 bg-gray-900 text-white">Add To Cart</button>
              <button class="w-10 h-10 bg-gray-900 text-white ml-2"><i class="fa-solid fa-share-nodes"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChildComponent',
  data(){
    return{
      carts:[],
    }
  },
  methods: {
    getData(){
      fetch('http://192.168.1.30:8000/api/v1/home')
      .then((response) =>response.json())
      .then((data) =>{
        this.carts = data.lastProducts;
        console.log(this.carts);
      })
    }
  },
  components: {

  },
  mounted() {
    this.getData();
  }
}
</script>

<style>

</style>