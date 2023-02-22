<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
        <img :src="원룸들[누른거].image" :alt="원룸들[누른거].content + ' 이미지'" style="width:100%">
        <h4>{{원룸들[누른거].title}}</h4>

        <p>{{원룸들[누른거].content}}</p>

        <input type="text" v-model.number="month">
        <!-- v-model="" 데이터로 저장해주세요. 아래꺼의 축약버전-->

        <!-- <input type="text" @input="month = $event.target.value"> -->
        <!-- @input="" 입력할때마다 실행해주세요 -->

        <!-- watcher : data를 감시하는 함수 -->
        <p> {{month}}개월 선택함 : {{원룸들[누른거].price * month}}</p>
        <button @click="close">닫기</button>
    </div>
  </div>
</template>

<script>
//props 문법으로 데이터를 전송해야 모달창 데이터바운딩한것을 쓸수있음.받아온것은 read-only라서 수정불가능
//props:{데이터이름:자료형이름}

export default {
    name : 'ModalPopup',
    data(){
        return{
            month : 1,
        }
    }, //자식한테 만들어도 되긴하지만 잘안쓰고 최상위컴포넌트에 만들어야함.
    watch:{ //데이터감시 watcher : data를 감시하는 함수
        month(a){//(a,b)a는 변경전데이터 b는 변경후데이터
            //month라는 함수가 변할때마다 코드가 실행됨
            
            if(isNaN(a) == true){
                alert('문자는 사용하실수 없습니다.');
                this.month = 1;
            }
        }
    },
    props:{
        원룸들 : Array,
        누른거 : Number,
        모달창열렸니 : Boolean,
    },
    methods: {
        close(){
            this.$emit('closeModal')
        },
    }
}
</script>

<style>

</style>