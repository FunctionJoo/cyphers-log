<script>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from '@/stores/store'

let dataasdasdasd = {
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

let data2 = {
  "playerId" : "507a8e01d95536925e76a3d39e3c05b6",
  "nickname" : "ㅡFURYㅡ",
  "grade" : 116,
  "clanName" : "도리화",
  "ratingPoint" : 2865,
  "maxRatingPoint" : 2865,
  "tierName" : "ACE",
  "records" : [ {
    "gameTypeId" : "rating",
    "winCount" : 171,
    "loseCount" : 122,
    "stopCount" : 0
  }, {
    "gameTypeId" : "normal",
    "winCount" : 119,
    "loseCount" : 52,
    "stopCount" : 4
  } ]
};

const store = useStore();

export default {
  data() {
    return {
      hasUser: null,
      matchData: {},
    }
  },
  setup() {
    console.log();
  },
  mounted() {
    let that = this;
    //let test = `https://api.neople.co.kr/cy/players?nickname=${this.$route.params.nickName}&wordType=full&apikey=${store.apiKey}`;
    fetch(`https://api.neople.co.kr/cy/matches/${this.$route.params.matchId}?&apikey=${store.apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        this.$data.matchData = data;
        console.log(data);
      })
      .catch((error) => {
        console.error('실패:', error);
      });
  }
}
</script>

<template>
  <div class="game-list">
    <h1 v-if="hasUser == false">검색된 유저가 없음</h1>
    <div v-else-if="hasUser == true" class="profile">
      <div class="rankpic">
        <div class="tierpic">{{userData.tierName}}</div>
        <div class="tiertext" v-if="userData.ratingPoint">
          {{userData.ratingPoint}}
        </div>
        <div class="tiertext" v-else-if="userData.ratingPoint == null">
          unranked
        </div>
      </div>
      <div class="textbox">
        <div class="name">
          <b class="nickname">{{userData.nickname}}</b>
          <span class="grade">{{userData.grade}}</span>
          <span class="clanName" v-if="userData.clanName !== null">{{userData.clanName}}</span>
        </div>
      </div>
      <div class="game-list-in" v-if="userData.matches">
        <div class="game-li-li" v-for="item in userData.matches.rows" v-bind:key="item.matchId">
          <RouterLink :to="{ path: '/match/' + item.matchId }">{{item.date}}</RouterLink>
        </div>
      </div>
    </div><!--profile-->
	</div><!--game-list-->
</template>

<style scoped>
</style>
