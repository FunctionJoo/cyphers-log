<script>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from '@/stores/store'

let data = {
  playerId : "a52d4f6e8e4303f9e59c46354d2b92ba",
  nickname : "사이퍼즈개핵노잼",
  grade : 74,
  clanName : "ㅡ중독ㅡ",
  ratingPoint : null,
  maxRatingPoint : null,
  tierName : null,
  records : [ {
    gameTypeId : "rating",
    winCount : 0,
    loseCount : 0,
    stopCount : 0
  }, {
    gameTypeId : "normal",
    winCount : 82,
    loseCount : 111,
    stopCount : 0
  } ]
};

const store = useStore();

export default {
  data() {
    return {
      userData: {}
    }
  },
  setup() {
    store.loading();
  },
  mounted() {
    store.loadingOk();
    console.log(this.$data);
    fetch(`https://api.neople.co.kr/cy/players/${store.testId}?apikey=${store.apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.$data.userData = data;
      });
  }
}
</script>

<template>
  <div class="game-list">
    <div class="profile">
      <div class="rankpic"></div>
      <div class="textbox">
        <div class="name">
          <b class="nickname">{{userData.nickname}}</b>
          <span class="grade">{{userData.grade}}</span>
          <span class="clanName" v-if="userData.clanName !== null">{{userData.clanName}}</span>
        </div>
      </div>
    </div>
	</div>
</template>

<style scoped>
</style>
