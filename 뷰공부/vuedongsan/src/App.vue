<template>
  <div v-if="1 ==2">
    안녕하세요
  </div>
  <div v-else-if="1 === 3">
    안녕하세요2
  </div>
  <div v-else>
    안녕하세요3
  </div>

  <transition name="fade">
    <Modal @closeModal="모달창열렸니 = false;" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니"/>
    <!-- v-bind = :-->
    <!-- <자식 :데이터="데이터"> -->
  </transition>
  

  <div class="menu">
    <a v-for="(a,i) in 메뉴들" :key="i">{{a}}</a>
  </div>

 <!-- <DiscountBanner :이름="오브젝트.name" :나이="오브젝트.age"></DiscountBanner> -->
<DiscountBanner v-if="showDiscount == true" v-bind="오브젝트"></DiscountBanner>
 <!-- vue파일 import하고 component에 등록하고 태그로사용 -->

<button @click="sortBack">되돌리기</button>
<button @click="priceSortLow">가격낮은순 정렬</button>
<button @click="priceSortHigh">가격높은순 정렬</button>
<!-- <button @click="nameSort">상품명 가나다라순 정렬</button> -->


<CardList @openModal="모달창열렸니 = true; 누른거 = $event"  :원룸="원룸들[i]" v-for="(원룸반복,i) in 원룸들" :key="원룸반복"/>
<!-- 수신하는 코드 @데이터보내달라는이름="스크립트" / 자식이 보낸 데이터는 #event변수에 담겨져있음-->

<!-- <CardList :원룸="원룸들[1]"/>
<CardList :원룸="원룸들[2]"/>
<CardList :원룸="원룸들[3]"/>
<CardList :원룸="원룸들[4]"/>
<CardList :원룸="원룸들[5]"/> -->

<!-- <div v-for="(a,i) in 원룸들" :key="i">
    <img :src="a.image" alt="" class="room-img">
    <h4 @click="모달창열렸니 = true; 누른거 = i">{{a.title}}</h4>
    <p>{{a.price}} 원</p>
</div> -->

</template>

<script>
// import {apple,apple2} from './assets/oneroom.js';
// apple
// apple2
//export{변수}
import data from './assets/oneroom.js';
import DiscountBanner from './discount.vue';
import ModalPopup from './Modal.vue';
import CardList from './card.vue';



export default {
  name: 'App',
  data(){//데이터보관함
    return{
      showDiscount: true,
      원룸들오리지널 :[...data],//array나 object 데이터의 각각 별개의 사본을 만들려면 [...array자료]
      오브젝트 : {name: 'kim', age : 20},
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
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널];
    },
    priceSortLow(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price
      });
    },
    priceSortHigh(){
      this.원룸들.sort(function(a,b){
        return  b.price - a.price
      });
    },
    // nameSort(){
    //   this.원룸들.sort();
    // }
  },
  mounted(){
    setTimeout(()=>{
      this.showDiscount == false;
    }, 2000)
  },
  components: {
   DiscountBanner : DiscountBanner,
   Modal : ModalPopup,
   CardList : CardList,
  }
}
</script>

<style>
.fade-enter-from{transform: translateY(-1000px);opacity: 0;} /* .작명-enter-from 시작시 스타일 */
.fade-enter-active{transition: all 1s ease;} /* .작명-enter-active 트렌지션 */
.fade-enter-to{transform: translateY(0);opacity: 1} /* .작명-enter-to 끝날때 스타일 */

.fade-leave-from{transform: translateY(0);opacity: 1;} /* .작명-enter-from 시작시 스타일 */
.fade-leave-active{transition: all 1s ease;} /* .작명-enter-active 트렌지션 */
.fade-leave-to{transform: translateY(-1000px);opacity: 0} /* .작명-enter-to 끝날때 스타일 */


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