<template>
  <div v-if="1 ==2">
    안녕하세요
  </div>
  <div v-else-if="1 === 3">
    안녕하세요2
  </div>
  <div v-else>
    안녕하세요2
  </div>


  <Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니"/>
  <!-- v-bind = :-->
  <!-- <자식 :데이터="데이터"> -->

  <div class="menu">
    <a v-for="(a,i) in 메뉴들" :key="i">{{a}}</a>
  </div>

 <DiscountBanner></DiscountBanner>
 <!-- vue파일 import하고 component에 등록하고 태그로사용 -->

  <div v-for="(a,i) in 원룸들" :key="i">
    <img :src="a.image" alt="" class="room-img">
    <h4 @click="모달창열렸니 = true; 누른거 = i">{{a.title}}</h4>
    <p>{{a.price}} 원</p>
  </div>

</template>

<script>

// import {apple,apple2} from './assets/oneroom.js';
// apple
// apple2
//export{변수}
import data from './assets/oneroom.js';
import DiscountBanner from './discount.vue';
import ModalPopup from './Modal.vue';

export default {
  name: 'App',
  data(){//데이터보관함
    return{
      누른거 : 0,
      원룸들 : data,
      price1: 60,
      price2: 70,
      스타일:"color:blue",
      product : ['역삼동원룸', '천호동원룸','마포구원룸'],
      메뉴들 : ['Home', 'Shop','About'],
      신고수 : [0,0,0],
      모달창열렸니: false,
    }// state라고 부름
  },
  methods: {//함수만드는공간
    increase(i){
      this.신고수[i]++; 
    },
    minus2(){

    }
  },
  components: {
   DiscountBanner : DiscountBanner,
   Modal : ModalPopup,
  }
}
</script>

<style>
body{
  margin: 0;
}

div{box-sizing: border-box;}
.discount {background-color: #eee;padding: 10px;margin: 10px;border-radius: 5px;}
.black-bg{width: 100%;height: 100%;background: rgba(0,0,0,0.5);position: fixed;padding: 20px;}
.white-bg{width: 100%;background: white;border-radius:8px;padding: 20px;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding:15px;
  border-radius: 5px;
}
.menu a{
  color:white;
  padding:5px
}
.room-img {width:100%;margin-top: 40px;}
</style>
