<template>
  <div class="hello">
    <div class="w-full h-24 shadow-lg shadow-black-500/50 flex md:justify-evenly md:px-0 px-5 justify-between items-center ">
      <div class="md:order-1 order-2">
        <img src="./../assets/img.svg" alt="ảnh xịn xò">
      </div>
      <div class="md:order-2 order-1">
        <div class="md:inline-block hidden">
          <ul class="flex gap-6">
            <li><a href="">SẢN PHẨM</a></li>
            <li><a href="">VỀ NÔNG THẢO</a></li>
            <li><a href="">BLOG</a></li>
            <li><a href="">LIÊN HỆ</a></li>
          </ul>
        </div>
        <div class="md:hidden inline-block ">
          <img src="./../assets/nav.svg" alt="">
        </div>
      </div>
      <div class="flex md:gap-6 gap-2 order-3">
        <img src="./../assets/search.svg" alt="">
        <img src="./../assets/cart.svg" alt="">
      </div>
    </div>
    <div class="header w-full relative flex justify-center items-center">
      <img class="md:mx-auto px-5 mt-5" src="./../assets/thiennhien.svg" alt="">
      <h6 class="w-auto font-semibold absolute text-white lg:text-7xl text-2xl ">Thảo dược</h6>
    </div>
    <div class="xl:mx-44 mx-5 mx-0 my-8">
        <span>Trang chủ</span>
        <span> > </span>
        <span class="opacity-90">Sản phẩm</span>
        <span> > </span>
        <span class="opacity-50">Thảo dược</span>
    </div>
    <div class="xl:mx-44 xl:grid-cols-4 mx-5 grid ld:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4" >
      <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative" v-for="(item,index) in listCart" :key="index" >
        <img class="absolute top-0 right-0" src="./../assets/giamgia.svg" alt="">
        <img class="w-full object-cover" src="./../assets/cam.svg" alt="">
        <p class="w-full h-12 py-2  text-center text-white absolute lg:bottom-28 bottom-40 hidden"  >Mua ngay</p>
        <div class="mx-2 mt-2">
          <h6 class="text-red-500 pb-2">Thảo dược Cao cà gai leo Yên Thủy - 250g</h6>
          <div class="flex justify-between border-t border-indigo-200 py-2">
            <div class="">
              <span class="">220.000 đ</span>
              <span class="ml-5 opacity-40 line-through">250,000 đ</span>
            </div>
            <img class=" " src="./../assets/cart2.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div>
      <ul class="flex gap-4 mt-10 flex-end justify-end xl:mr-44 mr-5">
        <li class="w-8 h-8 border rounded-full border-inherit flex justify-center items-center"><a href=""> - </a></li>
        <li class="w-8 h-8 border rounded-full border-inherit flex justify-center items-center"><a href=""> 1 </a></li>
        <li class="w-8 h-8 bg-red-600 text-white border rounded-full border-inherit flex justify-center items-center"><a href=""> 2 </a></li>
        <li class="w-8 h-8 border rounded-full border-inherit flex justify-center items-center"><a href=""> 3 </a></li>
        <li class="w-8 h-8 "><a href=""> ... </a></li>
        <li class="w-8 h-8 border rounded-full border-inherit flex justify-center items-center"><a href=""> 15 </a></li>
        <li class="w-8 h-8 border rounded-full border-inherit flex justify-center items-center"><a href=""> + </a></li>
      </ul>
    </div>
    <div class="mt-10 bg-orange-700 footer pb-3">
      <div class="grid lg:grid-cols-8 grid-cols-3">
        <img class="w-auto h-40 object-cover lg:inline-block hidden" src="https://recmiennam.com/wp-content/uploads/2018/01/phong-canh-thien-nhien-dep-1.jpg" alt="" v-for="(item,index) in listImg" :key="index">
        <img class="w-auto h-40 object-cover lg:hidden inline-block" src="https://recmiennam.com/wp-content/uploads/2018/01/phong-canh-thien-nhien-dep-1.jpg" alt="" v-for="(item,index) in listImgMb" :key="index">
      </div>
      <div class="xl:mx-44 xl:grid-cols-4 mx-5 grid ld:grid-cols-4 grid-cols-1 gap-4 my-10">
        <div class="footer-about ">
          <img class="" src="./../assets/img.svg" alt="ảnh xịn xò">
          <h6 class="mt-2">Tinh hoa từ thiên thiên cho cơ thể khỏe mạnh.</h6>
          <p class="mt-2">MST: 012345678910 - Ngày cấp: 10/02/2022
            Nơi cấp: Sở Kế hoạch & Đầu tư TP Hà Nội</p>
        </div>
        <div>
          <span>Liên hệ</span>
          <p>Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, P.Ngọc Khánh, Q.Ba Đình, Hà Nội</p>
          <p>0969.71.6848</p>
          <p>hotro@nongthao.vn</p>
        </div>
        <div>
          <span>Thông tin</span>
          <lu>
            <li><a href="">Giới thiệu Nông Thảo</a></li>
            <li><a href="">Điều khoản</a></li>
            <li><a href="">Chính sách bảo mật</a></li>
            <li><a href="">Hướng dẫn mua hàng</a></li>
            <li><a href="">Trả hàng & hoàn tiền</a></li>
            <li><a href="">Nông Thảo Blogs</a></li>
          </lu>
        </div>
        <div>
          <p>Đăng ký nhận tin</p>
          <p>Vui lòng nhập email để nhận thêm nhiều ưu đãi từ Nông Thảo</p>
          <input type="text" placeholder="Email của bạn">
        </div>
      </div>
      <div class="w-full h-10 footer-gt ">
        <p class="text-white">2022 - Bản quyền thuộc về Công ty TNHH Nông Thảo</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      listCart:[0,1,2,3,4,5,6,7,8,9,10,11],
      listImg:[0,1,2,3,4,5,6,7],
      listImgMb:[0,1,2],
    }
  },
  props: {

  }
}
</script>

<style scoped>
*{
  font-family: 'Nunito';
  font-style: normal;
  padding: 0;
  margin: 0;
}
.header h6{
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
}
.productItem:hover p {
  display: inline-block;
  background: #E10000;
  opacity: 0.9;
}
.productItem div h6{
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #4F4F4F;
}

.footer{
  color:white;
}

.footer .footer-about h6{
  font-family: 'Dancing Script';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #68C114;
  mix-blend-mode: screen;
}

.footer .footer-gt{
  background: #FFFFFF;
  opacity: 0.4;
  transform: matrix(1, 0, 0, -1, 0, 0);
}

.footer .footer-gt p{
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

</style>
