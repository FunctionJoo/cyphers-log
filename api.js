// api 요청후 데이터가 어떻게 넘어오는지 일단 메모를 해놓았음

let apikey = 'op0BJXIb0rUOJ0HcUwTyMrcnOQ6zmIXh'
let playername = '507a8e01d95536925e76a3d39e3c05b6';

// 매칭기록 fury 참조
let match_url = `https://api.neople.co.kr/cy/players/${playername}/matches?gameTypeId=${'rating'}&apikey=${apikey}`;
let match_response = {
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
  } ],
  "matches" : {
    "date" : {
      "start" : "2022-03-23 11:15",
      "end" : "2022-04-22 11:15"
    },
    "gameTypeId" : "rating",
    "next" : "35aed7b842fd3dee58dd00be9914ae26868df2ddf1deb22604a8fe94f21e0a77af98b50bda58b1a75fa7eea36ee0db89adca42b2761c062c509006ad730028138a5408529348ab5a01522aa273e40909",
    "rows" : [ {
      "date" : "2022-04-18 20:30",
      "matchId" : "5e0132e81da0f647ded24f2aaf1434e5bc17848c8d6ea9b795c748b6e4570a60",
      "map" : {
        "mapId" : "102",
        "name" : "메트로폴리스"
      },
      "playInfo" : {
        "result" : "win",
        "random" : false,
        "partyUserCount" : 2,
        "partyInfo" : [ {
          "playerId" : "c049fdcd9f07ce704c73751514cc871d",
          "nickname" : "Delia",
          "characterId" : "c5d2843bedc74035bf487d8c7ece8d23",
          "characterName" : "론"
        } ],
        "playTypeName" : "정상",
        "characterId" : "d738a9bb4167ff0c4bd36f1bae69f813",
        "characterName" : "엘프리데",
        "level" : 47,
        "killCount" : 7,
        "deathCount" : 1,
        "assistCount" : 12,
        "attackPoint" : 43656,
        "damagePoint" : 12572,
        "battlePoint" : 131,
        "sightPoint" : 127,
        "towerAttackPoint" : 28163,
        "backAttackCount" : 26,
        "comboCount" : 84,
        "spellCount" : 0,
        "healAmount" : 0,
        "sentinelKillCount" : 17,
        "demolisherKillCount" : 14,
        "trooperKillCount" : 1,
        "guardianKillCount" : 1,
        "guardTowerKillCount" : 0,
        "getCoin" : 14830,
        "spendCoin" : 14775,
        "spendConsumablesCoin" : 2800,
        "playTime" : 650,
        "responseTime" : 18,
        "minLifeTime" : 183,
        "maxLifeTime" : 449
      },
      "position" : {
        "name" : "원거리딜러",
        "explain" : "치명타 피해량 +12%",
        "attribute" : [ {
          "level" : 1,
          "id" : "71f584223dfa59faa54e3004b7f348be",
          "name" : "충동 구매"
        }, {
          "level" : 2,
          "id" : "43c56f15f90192f7ead0a8eba794fbed",
          "name" : "전장의 학살자"
        }, {
          "level" : 3,
          "id" : "abd29ed2134647107bdf5bfaa424a494",
          "name" : "전장의 열기"
        } ]
      }
    } ]
  }
}











let matchNo = 'e303f079647849fd2f1c9c827d2899617dd8c0ab530c45036040079e67752077';
// 매칭 상세
let md_url = `https://api.neople.co.kr/cy/matches/${matchNo}?&apikey=${apikey}`;
let md_responce = {
  "date" : "2022-04-18 18:50",
  "gameTypeId" : "rating",
  "map" : {
    "mapId" : "104",
    "name" : "스프링필드"
  },
  "teams" : [ {
    "result" : "win",
    "players" : [ "507a8e01d95536925e76a3d39e3c05b6", "ad6a65dd9192dc0307e368c5259d7712", "c049fdcd9f07ce704c73751514cc871d", "f92ecbb84bb347d9d06d3bc93a2e8181", "06b1b2f4a6a0d005f18a17ea50f91ad3" ]
  }, {
    "result" : "lose",
    "players" : [ "959f52b8bd137995376aae35df21d2c7", "d8647d9ff2fae0892b3c4e6358e03cdd", "1a8fb19518636188820e73d96e44e6d1", "720594ed3ef5918b7c609948733730e9", "ad963160ee7f3114b14294531040a01f" ]
  } ],
  "players" : [ {
    "playerId" : "959f52b8bd137995376aae35df21d2c7",
    "nickname" : "세마타",
    "map" : {
      "mapId" : "104",
      "name" : "스프링필드"
    },
    "playInfo" : {
      "random" : false,
      "partyUserCount" : 0,
      "partyId" : "b762303013093c43599c55f64fdcff53",
      "playTypeName" : "정상",
      "characterId" : "d430ceb55aa87047d92d4cda57e054ca",
      "characterName" : "카로슈",
      "level" : 29,
      "killCount" : 3,
      "deathCount" : 3,
      "assistCount" : 1,
      "attackPoint" : 8358,
      "damagePoint" : 8814,
      "battlePoint" : 49,
      "sightPoint" : 78,
      "towerAttackPoint" : 5629,
      "backAttackCount" : 5,
      "comboCount" : 14,
      "spellCount" : 0,
      "healAmount" : 0,
      "sentinelKillCount" : 13,
      "demolisherKillCount" : 10,
      "trooperKillCount" : 0,
      "guardianKillCount" : 0,
      "guardTowerKillCount" : 0,
      "getCoin" : 9410,
      "spendCoin" : 8750,
      "spendConsumablesCoin" : 1500,
      "playTime" : 646,
      "responseTime" : 69,
      "minLifeTime" : 118,
      "maxLifeTime" : 263
    },
    "position" : {
      "name" : "근거리딜러",
      "explain" : "치명타 피해량 +12%",
      "attribute" : [ {
        "level" : 1,
        "id" : "9892da3b4b8212f7c6d5ba94de5ed4e0",
        "name" : "추격자의 발걸음"
      }, {
        "level" : 2,
        "id" : "43c56f15f90192f7ead0a8eba794fbed",
        "name" : "전장의 학살자"
      }, {
        "level" : 3,
        "id" : "d10f92492701526d64b18428ec8ce0d3",
        "name" : "거인 사냥꾼"
      } ]
    },
    "items" : [ {
      "itemId" : "66c750b062966f88378237e7a2f770b5",
      "itemName" : "S 팬텀 페인",
      "slotCode" : "101",
      "slotName" : "손(공격)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "101",
      "equipSlotName" : "손(공격)"
    }, {
      "itemId" : "ef578aa8c191df9ad6b4d4018a893e9e",
      "itemName" : "E 기울어진 세계",
      "slotCode" : "102",
      "slotName" : "머리(치명)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "102",
      "equipSlotName" : "머리(치명)"
    }, {
      "itemId" : "f7161c81851126fa84609aa65e223615",
      "itemName" : "S 펄스 오브 라이프",
      "slotCode" : "103",
      "slotName" : "가슴(체력)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "103",
      "equipSlotName" : "가슴(체력)"
    }, {
      "itemId" : "2d59128f17a05bcdc10add6b8f95d708",
      "itemName" : "S 움켜쥔 미래",
      "slotCode" : "104",
      "slotName" : "허리(회피)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "104",
      "equipSlotName" : "허리(회피)"
    }, {
      "itemId" : "18cde2af222cad827b92f2bdd0f4eeaa",
      "itemName" : "S 잃어버린 꿈",
      "slotCode" : "105",
      "slotName" : "다리(방어)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "105",
      "equipSlotName" : "다리(방어)"
    }, {
      "itemId" : "dc8b1f7a937b3c48acb905ba81d1bad5",
      "itemName" : "E 서블리메이션",
      "slotCode" : "106",
      "slotName" : "발(이동)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "106",
      "equipSlotName" : "발(이동)"
    }, {
      "itemId" : "2f3d3e4a7a6e3c3169cb66186ed27961",
      "itemName" : "체인건 건케이스",
      "slotCode" : "202",
      "slotName" : "장신구1",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "202",
      "equipSlotName" : "장신구1"
    }, {
      "itemId" : "122f669d7b379f5daf5c3d223820706d",
      "itemName" : "커터 기관단총",
      "slotCode" : "203",
      "slotName" : "장신구2",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "203",
      "equipSlotName" : "장신구2"
    }, {
      "itemId" : "b25c0c189675e85acd141568dd5423c9",
      "itemName" : "체스터 더블버거",
      "slotCode" : "301",
      "slotName" : "회복킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "301",
      "equipSlotName" : "회복킷"
    }, {
      "itemId" : "5b9a8108b0b92457abc225c565fde466",
      "itemName" : "리세스 스프린터",
      "slotCode" : "302",
      "slotName" : "가속킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "302",
      "equipSlotName" : "가속킷"
    }, {
      "itemId" : "b37373156f360fb1d0805bd0d846b0b9",
      "itemName" : "이펙트 이펙션",
      "slotCode" : "303",
      "slotName" : "공격킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "303",
      "equipSlotName" : "공격킷"
    }, {
      "itemId" : "a5829b6da66c7bb983e58fc5cc207f30",
      "itemName" : "솔리드 스위퍼",
      "slotCode" : "304",
      "slotName" : "방어킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "304",
      "equipSlotName" : "방어킷"
    }, {
      "itemId" : "31c58c8cee5da489170075e267c3e6c3",
      "itemName" : "디스트로 맥시머",
      "slotCode" : "305",
      "slotName" : "특수킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "305",
      "equipSlotName" : "특수킷"
    }, {
      "itemId" : "5a96d5d59a75e6a28ae17b4536c4411a",
      "itemName" : "S 죽음의 대가",
      "slotCode" : "107",
      "slotName" : "목",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "107",
      "equipSlotName" : "목"
    }, {
      "itemId" : "2cbacc23d889f0a836f138ff3702f53b",
      "itemName" : "트윈 배럴 건케이스",
      "slotCode" : "204",
      "slotName" : "장신구3",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "204",
      "equipSlotName" : "장신구3"
    }, {
      "itemId" : "68464507224ef92d28fc094b8353eb81",
      "itemName" : "어나더 던",
      "slotCode" : "205",
      "slotName" : "장신구4",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "205",
      "equipSlotName" : "장신구4"
    } ]
  }, {
    "playerId" : "d8647d9ff2fae0892b3c4e6358e03cdd",
    "nickname" : "딩동댕댕",
    "map" : {
      "mapId" : "104",
      "name" : "스프링필드"
    },
    "playInfo" : {
      "random" : false,
      "partyUserCount" : 0,
      "partyId" : "b762303013093c43599c55f64fdcff53",
      "playTypeName" : "정상",
      "characterId" : "42ba0da0781020231280624071c3574d",
      "characterName" : "플로리안",
      "level" : 23,
      "killCount" : 0,
      "deathCount" : 7,
      "assistCount" : 1,
      "attackPoint" : 4976,
      "damagePoint" : 37481,
      "battlePoint" : 112,
      "sightPoint" : 204,
      "towerAttackPoint" : 0,
      "backAttackCount" : 13,
      "comboCount" : 9,
      "spellCount" : 0,
      "healAmount" : 0,
      "sentinelKillCount" : 13,
      "demolisherKillCount" : 2,
      "trooperKillCount" : 0,
      "guardianKillCount" : 0,
      "guardTowerKillCount" : 0,
      "getCoin" : 6550,
      "spendCoin" : 6250,
      "spendConsumablesCoin" : 1000,
      "playTime" : 646,
      "responseTime" : 108,
      "minLifeTime" : 19,
      "maxLifeTime" : 144
    },
    "position" : {
      "name" : "탱커",
      "explain" : "체력 +7%, 회피 +5%",
      "attribute" : [ {
        "level" : 1,
        "id" : "678bca255e575ae96aceefacaa7aee4e",
        "name" : "최후의 저항"
      }, {
        "level" : 2,
        "id" : "bd9cbd5e0ae14ea1b1870265818fb358",
        "name" : "단단한 피부"
      }, {
        "level" : 3,
        "id" : "6d8fb905d69edf1c9f73495c3ee44d28",
        "name" : "선봉장"
      } ]
    },
    "items" : [ {
      "itemId" : "e3cbda51ece285c49e61558f68b2a552",
      "itemName" : "E 빼앗은 증표",
      "slotCode" : "101",
      "slotName" : "손(공격)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "101",
      "equipSlotName" : "손(공격)"
    }, {
      "itemId" : "e20ec95e4f7397938bfc726381099f4d",
      "itemName" : "E 나르시시즘",
      "slotCode" : "102",
      "slotName" : "머리(치명)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "102",
      "equipSlotName" : "머리(치명)"
    }, {
      "itemId" : "2c5718e2038f710a46ff2b13ffcc9891",
      "itemName" : "E 영원한 소년",
      "slotCode" : "103",
      "slotName" : "가슴(체력)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "103",
      "equipSlotName" : "가슴(체력)"
    }, {
      "itemId" : "7050cde96d7b446846579562907927e1",
      "itemName" : "E 프레데터",
      "slotCode" : "104",
      "slotName" : "허리(회피)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "104",
      "equipSlotName" : "허리(회피)"
    }, {
      "itemId" : "0ab96f1c0500a7d307157cd023bd28f0",
      "itemName" : "E 에고 디펜스",
      "slotCode" : "105",
      "slotName" : "다리(방어)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "105",
      "equipSlotName" : "다리(방어)"
    }, {
      "itemId" : "30d51ee0da52fe475750d8f995cbc8e7",
      "itemName" : "E 스포일드 차일드",
      "slotCode" : "106",
      "slotName" : "발(이동)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "106",
      "equipSlotName" : "발(이동)"
    }, {
      "itemId" : "e0622aa06d4e09d83de4775ae04e218e",
      "itemName" : "끈끈이 레그람",
      "slotCode" : "202",
      "slotName" : "장신구1",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "202",
      "equipSlotName" : "장신구1"
    }, {
      "itemId" : "313244097cca75d0dcc19a03208a73a1",
      "itemName" : "섭취 프로텍터",
      "slotCode" : "203",
      "slotName" : "장신구2",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "203",
      "equipSlotName" : "장신구2"
    }, {
      "itemId" : "6fad2e2f483a78b2d1a80d279caa62fb",
      "itemName" : "디시브 스파클링 ",
      "slotCode" : "301",
      "slotName" : "회복킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "301",
      "equipSlotName" : "회복킷"
    }, {
      "itemId" : "850152580fb9196e66bb6bb8b6b73f05",
      "itemName" : "스피드스타II",
      "slotCode" : "302",
      "slotName" : "가속킷",
      "rarityCode" : "102",
      "rarityName" : "언커먼",
      "equipSlotCode" : "302",
      "equipSlotName" : "가속킷"
    }, {
      "itemId" : "0d4016d531f366de68c4af5329337b74",
      "itemName" : "디시브 파이크 ",
      "slotCode" : "303",
      "slotName" : "공격킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "303",
      "equipSlotName" : "공격킷"
    }, {
      "itemId" : "3c8054627e5cd6176aa6d040949bea6a",
      "itemName" : "디시브 타즈 ",
      "slotCode" : "304",
      "slotName" : "방어킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "304",
      "equipSlotName" : "방어킷"
    }, {
      "itemId" : "a6abfd4505fb46cde75dc5b4414b60b8",
      "itemName" : "PS 레이더 R4",
      "slotCode" : "305",
      "slotName" : "특수킷",
      "rarityCode" : "102",
      "rarityName" : "언커먼",
      "equipSlotCode" : "305",
      "equipSlotName" : "특수킷"
    }, {
      "itemId" : "8c4518378eb0dbecb1175e36a7297eba",
      "itemName" : "E 거짓된 관계",
      "slotCode" : "107",
      "slotName" : "목",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "107",
      "equipSlotName" : "목"
    }, {
      "itemId" : "0bcda0b7014b805459f78cd96b90549d",
      "itemName" : "줄기 프로텍터",
      "slotCode" : "204",
      "slotName" : "장신구3",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "204",
      "equipSlotName" : "장신구3"
    }, {
      "itemId" : "5eafa42ce3592a26381731d68aafe23c",
      "itemName" : "탐욕의 권화",
      "slotCode" : "205",
      "slotName" : "장신구4",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "205",
      "equipSlotName" : "장신구4"
    } ]
  }, {
    "playerId" : "ad6a65dd9192dc0307e368c5259d7712",
    "nickname" : "호옹준표",
    "map" : {
      "mapId" : "104",
      "name" : "스프링필드"
    },
    "playInfo" : {
      "random" : false,
      "partyUserCount" : 0,
      "partyId" : "b762303013093c43599c55f64fdcff53",
      "playTypeName" : "정상",
      "characterId" : "4ff1922f862cae2cc98a6d498e76ef2b",
      "characterName" : "루이스",
      "level" : 37,
      "killCount" : 3,
      "deathCount" : 2,
      "assistCount" : 12,
      "attackPoint" : 14921,
      "damagePoint" : 11774,
      "battlePoint" : 91,
      "sightPoint" : 162,
      "towerAttackPoint" : 6081,
      "backAttackCount" : 14,
      "comboCount" : 19,
      "spellCount" : 9,
      "healAmount" : 0,
      "sentinelKillCount" : 17,
      "demolisherKillCount" : 10,
      "trooperKillCount" : 0,
      "guardianKillCount" : 0,
      "guardTowerKillCount" : 0,
      "getCoin" : 11580,
      "spendCoin" : 11225,
      "spendConsumablesCoin" : 1800,
      "playTime" : 646,
      "responseTime" : 37,
      "minLifeTime" : 75,
      "maxLifeTime" : 315
    },
    "position" : {
      "name" : "탱커",
      "explain" : "체력 +7%, 회피 +5%",
      "attribute" : [ {
        "level" : 1,
        "id" : "41bfd92f66759e4cfddf82a620eea7e0",
        "name" : "전투 태세"
      }, {
        "level" : 2,
        "id" : "71f584223dfa59faa54e3004b7f348be",
        "name" : "충동 구매"
      }, {
        "level" : 3,
        "id" : "678bca255e575ae96aceefacaa7aee4e",
        "name" : "최후의 저항"
      } ]
    },
    "items" : [ {
      "itemId" : "ac125a56c729a50ae0afe8c732a735a1",
      "itemName" : "S 아이스 에이지",
      "slotCode" : "101",
      "slotName" : "손(공격)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "101",
      "equipSlotName" : "손(공격)"
    }, {
      "itemId" : "e9175c1ec0efd5b19090581d37cd4d9c",
      "itemName" : "S 윈터 크루제이드",
      "slotCode" : "102",
      "slotName" : "머리(치명)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "102",
      "equipSlotName" : "머리(치명)"
    }, {
      "itemId" : "6049d4ac939523ba219e61d1adc8d188",
      "itemName" : "E 프로즌 시티",
      "slotCode" : "103",
      "slotName" : "가슴(체력)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "103",
      "equipSlotName" : "가슴(체력)"
    }, {
      "itemId" : "5fba0894ad35551fdfc6d081050ad1d2",
      "itemName" : "S 아이스 토퀴즈 ",
      "slotCode" : "104",
      "slotName" : "허리(회피)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "104",
      "equipSlotName" : "허리(회피)"
    }, {
      "itemId" : "ecfb8528c29f756da6f7f39881e0f37f",
      "itemName" : "E 절대영도",
      "slotCode" : "105",
      "slotName" : "다리(방어)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "105",
      "equipSlotName" : "다리(방어)"
    }, {
      "itemId" : "9e2fea2808ddcb018316ae7ab49e9882",
      "itemName" : "S 크리스탈 크랙 ",
      "slotCode" : "106",
      "slotName" : "발(이동)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "106",
      "equipSlotName" : "발(이동)"
    }, {
      "itemId" : "d309369389428d85615c6b418d785c59",
      "itemName" : "아이스링크-결정",
      "slotCode" : "201",
      "slotName" : "장신구ALL",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "202",
      "equipSlotName" : "장신구1"
    }, {
      "itemId" : "15450b2596115624ce7bb019ab47c7f7",
      "itemName" : "SB리볼버 루차",
      "slotCode" : "203",
      "slotName" : "장신구2",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "203",
      "equipSlotName" : "장신구2"
    }, {
      "itemId" : "5a6503594fd375386c8252d37395abfd",
      "itemName" : "아이스 스파클링 ",
      "slotCode" : "301",
      "slotName" : "회복킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "301",
      "equipSlotName" : "회복킷"
    }, {
      "itemId" : "5b9a8108b0b92457abc225c565fde466",
      "itemName" : "리세스 스프린터",
      "slotCode" : "302",
      "slotName" : "가속킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "302",
      "equipSlotName" : "가속킷"
    }, {
      "itemId" : "b37373156f360fb1d0805bd0d846b0b9",
      "itemName" : "이펙트 이펙션",
      "slotCode" : "303",
      "slotName" : "공격킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "303",
      "equipSlotName" : "공격킷"
    }, {
      "itemId" : "a5829b6da66c7bb983e58fc5cc207f30",
      "itemName" : "솔리드 스위퍼",
      "slotCode" : "304",
      "slotName" : "방어킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "304",
      "equipSlotName" : "방어킷"
    }, {
      "itemId" : "62afd68c5de20d0968390be2d41c0bd2",
      "itemName" : "리볼버 임팩트",
      "slotCode" : "305",
      "slotName" : "특수킷",
      "rarityCode" : "102",
      "rarityName" : "언커먼",
      "equipSlotCode" : "305",
      "equipSlotName" : "특수킷"
    }, {
      "itemId" : "fde33a11be3d7f7313ab67cfa79ed72b",
      "itemName" : "S 프로즌 하트",
      "slotCode" : "107",
      "slotName" : "목",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "107",
      "equipSlotName" : "목"
    }, {
      "itemId" : "340cbfdf742058dcf677168be1964e0c",
      "itemName" : "드라이 파이몬",
      "slotCode" : "204",
      "slotName" : "장신구3",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "204",
      "equipSlotName" : "장신구3"
    }, {
      "itemId" : "eee20f2454379300987c168592e1e718",
      "itemName" : "프로즌 브레이크",
      "slotCode" : "205",
      "slotName" : "장신구4",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "205",
      "equipSlotName" : "장신구4"
    } ]
  }, {
    "playerId" : "507a8e01d95536925e76a3d39e3c05b6",
    "nickname" : "ㅡFURYㅡ",
    "map" : {
      "mapId" : "104",
      "name" : "스프링필드"
    },
    "playInfo" : {
      "random" : false,
      "partyUserCount" : 2,
      "partyId" : "e0dd632986ebc548bc296c4ecbe70236",
      "playTypeName" : "정상",
      "characterId" : "7631b259662ceec42aa035e7c331ab32",
      "characterName" : "레베카",
      "level" : 34,
      "killCount" : 3,
      "deathCount" : 0,
      "assistCount" : 9,
      "attackPoint" : 14024,
      "damagePoint" : 8880,
      "battlePoint" : 144,
      "sightPoint" : 269,
      "towerAttackPoint" : 4366,
      "backAttackCount" : 25,
      "comboCount" : 57,
      "spellCount" : 0,
      "healAmount" : 0,
      "sentinelKillCount" : 7,
      "demolisherKillCount" : 2,
      "trooperKillCount" : 0,
      "guardianKillCount" : 1,
      "guardTowerKillCount" : 0,
      "getCoin" : 10260,
      "spendCoin" : 9700,
      "spendConsumablesCoin" : 2000,
      "playTime" : 646,
      "responseTime" : 0,
      "minLifeTime" : 646,
      "maxLifeTime" : 646
    },
    "position" : {
      "name" : "탱커",
      "explain" : "체력 +7%, 회피 +5%",
      "attribute" : [ {
        "level" : 1,
        "id" : "678bca255e575ae96aceefacaa7aee4e",
        "name" : "최후의 저항"
      }, {
        "level" : 2,
        "id" : "1d49c4504c55a43f670d4d69575760d4",
        "name" : "재생의 숨결"
      }, {
        "level" : 3,
        "id" : "6d8fb905d69edf1c9f73495c3ee44d28",
        "name" : "선봉장"
      } ]
    },
    "items" : [ {
      "itemId" : "2f5688ab6f679d7b542f190b0ab422b6",
      "itemName" : "E 베른 스트레이트",
      "slotCode" : "101",
      "slotName" : "손(공격)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "101",
      "equipSlotName" : "손(공격)"
    }, {
      "itemId" : "1dae4f65bb5c4d4c654c675d9fe20c60",
      "itemName" : "E 슈바이츠 프라이드",
      "slotCode" : "102",
      "slotName" : "머리(치명)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "102",
      "equipSlotName" : "머리(치명)"
    }, {
      "itemId" : "545bce426dae8414460c7114a20941dd",
      "itemName" : "E 에실로프",
      "slotCode" : "103",
      "slotName" : "가슴(체력)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "103",
      "equipSlotName" : "가슴(체력)"
    }, {
      "itemId" : "a91d0346f074ab5786ec3bd2a168fb8e",
      "itemName" : "RA이터널 이멀젼",
      "slotCode" : "104",
      "slotName" : "허리(회피)",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "104",
      "equipSlotName" : "허리(회피)"
    }, {
      "itemId" : "d17584829f1c171d45ac5d288d494789",
      "itemName" : "E 스폴리 인터라켄",
      "slotCode" : "105",
      "slotName" : "다리(방어)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "105",
      "equipSlotName" : "다리(방어)"
    }, {
      "itemId" : "459d0b9eb93aa89e5f8d7440467d0496",
      "itemName" : "E 루이너스 스탠스",
      "slotCode" : "106",
      "slotName" : "발(이동)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "106",
      "equipSlotName" : "발(이동)"
    }, {
      "itemId" : "3161a7f73ccd5def8c4afda858e68541",
      "itemName" : "스트라이커-더킹",
      "slotCode" : "201",
      "slotName" : "장신구ALL",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "202",
      "equipSlotName" : "장신구1"
    }, {
      "itemId" : "31df4bb65f825f894ee1442e57ef7dbc",
      "itemName" : "테라듀 레그람",
      "slotCode" : "203",
      "slotName" : "장신구2",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "203",
      "equipSlotName" : "장신구2"
    }, {
      "itemId" : "c33ba9e2b8a5ffcb7b21d00ad0cd0bcc",
      "itemName" : "아이언 스파클링 ",
      "slotCode" : "301",
      "slotName" : "회복킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "301",
      "equipSlotName" : "회복킷"
    }, {
      "itemId" : "e0296c9b014cdc9a95bbc882ee72c30d",
      "itemName" : "아이언 엑셀",
      "slotCode" : "302",
      "slotName" : "가속킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "302",
      "equipSlotName" : "가속킷"
    }, {
      "itemId" : "91ccdfb064ce648e202fced125b07a23",
      "itemName" : "아이언 파이크",
      "slotCode" : "303",
      "slotName" : "공격킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "303",
      "equipSlotName" : "공격킷"
    }, {
      "itemId" : "79681813bd4d6fc1967b495555659d95",
      "itemName" : "아이언 플래쉬",
      "slotCode" : "304",
      "slotName" : "방어킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "304",
      "equipSlotName" : "방어킷"
    }, {
      "itemId" : "cf4fdb7f6499d6ebc62c21746e66bfe7",
      "itemName" : "T11-스파이더",
      "slotCode" : "305",
      "slotName" : "특수킷",
      "rarityCode" : "102",
      "rarityName" : "언커먼",
      "equipSlotCode" : "305",
      "equipSlotName" : "특수킷"
    }, {
      "itemId" : "619ee5d0615dc2578cccc9bc1968abc9",
      "itemName" : "아이언 헨스 L",
      "slotCode" : "107",
      "slotName" : "목",
      "rarityCode" : "102",
      "rarityName" : "언커먼",
      "equipSlotCode" : "107",
      "equipSlotName" : "목"
    }, {
      "itemId" : "fc4ac181e1a234774c31827a4b255d81",
      "itemName" : "롤링 레그람",
      "slotCode" : "204",
      "slotName" : "장신구3",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "204",
      "equipSlotName" : "장신구3"
    }, {
      "itemId" : "241794b6d4a8732860c0ab97f2bf40d1",
      "itemName" : "서치 워런트",
      "slotCode" : "205",
      "slotName" : "장신구4",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "205",
      "equipSlotName" : "장신구4"
    } ]
  }, {
    "playerId" : "c049fdcd9f07ce704c73751514cc871d",
    "nickname" : "Delia",
    "map" : {
      "mapId" : "104",
      "name" : "스프링필드"
    },
    "playInfo" : {
      "random" : false,
      "partyUserCount" : 2,
      "partyId" : "e0dd632986ebc548bc296c4ecbe70236",
      "playTypeName" : "정상",
      "characterId" : "cc357fcea986318e6f6b4fe4501f4a1f",
      "characterName" : "타라",
      "level" : 57,
      "killCount" : 5,
      "deathCount" : 0,
      "assistCount" : 8,
      "attackPoint" : 29900,
      "damagePoint" : 1183,
      "battlePoint" : 51,
      "sightPoint" : 72,
      "towerAttackPoint" : 85648,
      "backAttackCount" : 20,
      "comboCount" : 52,
      "spellCount" : 0,
      "healAmount" : 0,
      "sentinelKillCount" : 30,
      "demolisherKillCount" : 26,
      "trooperKillCount" : 2,
      "guardianKillCount" : 0,
      "guardTowerKillCount" : 2,
      "getCoin" : 16740,
      "spendCoin" : 16350,
      "spendConsumablesCoin" : 1900,
      "playTime" : 646,
      "responseTime" : 0,
      "minLifeTime" : 646,
      "maxLifeTime" : 646
    },
    "position" : {
      "name" : "원거리딜러",
      "explain" : "치명타 피해량 +12%",
      "attribute" : [ {
        "level" : 1,
        "id" : "71f584223dfa59faa54e3004b7f348be",
        "name" : "충동 구매"
      }, {
        "level" : 2,
        "id" : "43c56f15f90192f7ead0a8eba794fbed",
        "name" : "전장의 학살자"
      }, {
        "level" : 3,
        "id" : "abd29ed2134647107bdf5bfaa424a494",
        "name" : "전장의 열기"
      } ]
    },
    "items" : [ {
      "itemId" : "0eb4c8df351615983cdb5d69b2823602",
      "itemName" : "S 데몰리션 파이어",
      "slotCode" : "101",
      "slotName" : "손(공격)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "101",
      "equipSlotName" : "손(공격)"
    }, {
      "itemId" : "df4d114123f8e174915876b8af05413c",
      "itemName" : "E 아이리스 보터 ",
      "slotCode" : "102",
      "slotName" : "머리(치명)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "102",
      "equipSlotName" : "머리(치명)"
    }, {
      "itemId" : "66f7385f5d3d8da1d97f7a3f7f1606dd",
      "itemName" : "플레어 플라밍고",
      "slotCode" : "103",
      "slotName" : "가슴(체력)",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "103",
      "equipSlotName" : "가슴(체력)"
    }, {
      "itemId" : "aee93fbf0e634ad0ffb2ed338e92f121",
      "itemName" : "E 무크 디토네이터",
      "slotCode" : "104",
      "slotName" : "허리(회피)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "104",
      "equipSlotName" : "허리(회피)"
    }, {
      "itemId" : "0616c0c6a0763b6f5b1d1d138c016bbe",
      "itemName" : "S 스칼렛 랩소디",
      "slotCode" : "105",
      "slotName" : "다리(방어)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "105",
      "equipSlotName" : "다리(방어)"
    }, {
      "itemId" : "b0d756b9c1c741d06b0f6e2db6940cd7",
      "itemName" : "S 파이어 포르테",
      "slotCode" : "106",
      "slotName" : "발(이동)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "106",
      "equipSlotName" : "발(이동)"
    }, {
      "itemId" : "a9139207df09f106662a5dcf5ee32f63",
      "itemName" : "불놀이 하우레스",
      "slotCode" : "202",
      "slotName" : "장신구1",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "202",
      "equipSlotName" : "장신구1"
    }, {
      "itemId" : "0921b695ef5e52fe2ce160a65f0ca489",
      "itemName" : "발화 하우레스",
      "slotCode" : "203",
      "slotName" : "장신구2",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "203",
      "equipSlotName" : "장신구2"
    }, {
      "itemId" : "a26e4e4c8671ca19b82f5b40cd67a844",
      "itemName" : "토치 스파클링",
      "slotCode" : "301",
      "slotName" : "회복킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "301",
      "equipSlotName" : "회복킷"
    }, {
      "itemId" : "5b9a8108b0b92457abc225c565fde466",
      "itemName" : "리세스 스프린터",
      "slotCode" : "302",
      "slotName" : "가속킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "302",
      "equipSlotName" : "가속킷"
    }, {
      "itemId" : "a83b239784f3f8e37617366708fd5213",
      "itemName" : "플레어 파이크 ",
      "slotCode" : "303",
      "slotName" : "공격킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "303",
      "equipSlotName" : "공격킷"
    }, {
      "itemId" : "a5829b6da66c7bb983e58fc5cc207f30",
      "itemName" : "솔리드 스위퍼",
      "slotCode" : "304",
      "slotName" : "방어킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "304",
      "equipSlotName" : "방어킷"
    }, {
      "itemId" : "7ce42cd7ba086e2eb77b969a12d77e8f",
      "itemName" : "공간발화 임팩트",
      "slotCode" : "305",
      "slotName" : "특수킷",
      "rarityCode" : "102",
      "rarityName" : "언커먼",
      "equipSlotCode" : "305",
      "equipSlotName" : "특수킷"
    }, {
      "itemId" : "df1cfadbd3cc324beee38472fc6ebb79",
      "itemName" : "E 스티즈 머쉬",
      "slotCode" : "107",
      "slotName" : "목",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "107",
      "equipSlotName" : "목"
    }, {
      "itemId" : "c1da93dce9a18a87bfb2d065f0414607",
      "itemName" : "정념 하우레스",
      "slotCode" : "204",
      "slotName" : "장신구3",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "204",
      "equipSlotName" : "장신구3"
    }, {
      "itemId" : "2d19123b713520efe43291b02d39fde9",
      "itemName" : "메테오 카티에르",
      "slotCode" : "205",
      "slotName" : "장신구4",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "205",
      "equipSlotName" : "장신구4"
    } ]
  }, {
    "playerId" : "ad963160ee7f3114b14294531040a01f",
    "nickname" : "드렁큐티도마뱀",
    "map" : {
      "mapId" : "104",
      "name" : "스프링필드"
    },
    "playInfo" : {
      "random" : false,
      "partyUserCount" : 0,
      "partyId" : "b762303013093c43599c55f64fdcff53",
      "playTypeName" : "정상",
      "characterId" : "5908c855eab91d27eb6d996517db1b5b",
      "characterName" : "윌라드",
      "level" : 39,
      "killCount" : 1,
      "deathCount" : 4,
      "assistCount" : 4,
      "attackPoint" : 7721,
      "damagePoint" : 13729,
      "battlePoint" : 65,
      "sightPoint" : 89,
      "towerAttackPoint" : 5048,
      "backAttackCount" : 12,
      "comboCount" : 24,
      "spellCount" : 1,
      "healAmount" : 0,
      "sentinelKillCount" : 8,
      "demolisherKillCount" : 23,
      "trooperKillCount" : 0,
      "guardianKillCount" : 0,
      "guardTowerKillCount" : 0,
      "getCoin" : 10630,
      "spendCoin" : 10450,
      "spendConsumablesCoin" : 800,
      "playTime" : 646,
      "responseTime" : 108,
      "minLifeTime" : 54,
      "maxLifeTime" : 256
    },
    "position" : {
      "name" : "원거리딜러",
      "explain" : "치명타 피해량 +12%",
      "attribute" : [ {
        "level" : 1,
        "id" : "71f584223dfa59faa54e3004b7f348be",
        "name" : "충동 구매"
      }, {
        "level" : 2,
        "id" : "43c56f15f90192f7ead0a8eba794fbed",
        "name" : "전장의 학살자"
      }, {
        "level" : 3,
        "id" : "ac75b2be060e121bbea9548d599f278e",
        "name" : "완전한 성장"
      } ]
    },
    "items" : [ {
      "itemId" : "f9205f80195eeab602229fa09afbc8df",
      "itemName" : "E 일렉트론 토쳐 ",
      "slotCode" : "101",
      "slotName" : "손(공격)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "101",
      "equipSlotName" : "손(공격)"
    }, {
      "itemId" : "43e3e3e891b872babe277004661d2766",
      "itemName" : "E 그랜드 듀크",
      "slotCode" : "102",
      "slotName" : "머리(치명)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "102",
      "equipSlotName" : "머리(치명)"
    }, {
      "itemId" : "5ead7e580ae75ccf94b96cefbe434646",
      "itemName" : "E 블레스트 슈트",
      "slotCode" : "103",
      "slotName" : "가슴(체력)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "103",
      "equipSlotName" : "가슴(체력)"
    }, {
      "itemId" : "9a08006894aa003f8aa1d2f5fb046932",
      "itemName" : "E 청천벽력",
      "slotCode" : "104",
      "slotName" : "허리(회피)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "104",
      "equipSlotName" : "허리(회피)"
    }, {
      "itemId" : "a2d4545fb1dc555dd749fc493973e44b",
      "itemName" : "E 스틸레토라",
      "slotCode" : "105",
      "slotName" : "다리(방어)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "105",
      "equipSlotName" : "다리(방어)"
    }, {
      "itemId" : "7013d0fd2d539ea6646284205eab7cc0",
      "itemName" : "E 라이트 블리츠",
      "slotCode" : "106",
      "slotName" : "발(이동)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "106",
      "equipSlotName" : "발(이동)"
    }, {
      "itemId" : "f84ae4e610033bbeaea488fcfad5df4a",
      "itemName" : "낙뢰 오리악스",
      "slotCode" : "202",
      "slotName" : "장신구1",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "202",
      "equipSlotName" : "장신구1"
    }, {
      "itemId" : "4f03aab8a3525331ecdd481b077ef717",
      "itemName" : "구형 루드크리스",
      "slotCode" : "203",
      "slotName" : "장신구2",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "203",
      "equipSlotName" : "장신구2"
    }, {
      "itemId" : "2b0521d3e196a1219d7c61e1f4d15549",
      "itemName" : "더스팅 스파클링 ",
      "slotCode" : "301",
      "slotName" : "회복킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "301",
      "equipSlotName" : "회복킷"
    }, {
      "itemId" : "f491943b9c8e6c11e6558f71b9f3c13e",
      "itemName" : "라이트닝 엑셀",
      "slotCode" : "302",
      "slotName" : "가속킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "302",
      "equipSlotName" : "가속킷"
    }, {
      "itemId" : "b37373156f360fb1d0805bd0d846b0b9",
      "itemName" : "이펙트 이펙션",
      "slotCode" : "303",
      "slotName" : "공격킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "303",
      "equipSlotName" : "공격킷"
    }, {
      "itemId" : "a5829b6da66c7bb983e58fc5cc207f30",
      "itemName" : "솔리드 스위퍼",
      "slotCode" : "304",
      "slotName" : "방어킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "304",
      "equipSlotName" : "방어킷"
    }, {
      "itemId" : "2a396ca5c8aa11ef27fdd5550722a1b4",
      "itemName" : "천둥벼락 맥시머",
      "slotCode" : "305",
      "slotName" : "특수킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "305",
      "equipSlotName" : "특수킷"
    }, {
      "itemId" : "36b20dfc162f3d55918ff1e6363250a8",
      "itemName" : "E 블리츠 와일즈",
      "slotCode" : "107",
      "slotName" : "목",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "107",
      "equipSlotName" : "목"
    }, {
      "itemId" : "7f6405122ac3e161ba5b0a58ce604cd9",
      "itemName" : "뇌보법 써리노",
      "slotCode" : "201",
      "slotName" : "장신구ALL",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "204",
      "equipSlotName" : "장신구3"
    }, {
      "itemId" : "13ee7d5212a462aea2f127910de59583",
      "itemName" : "썬더 고르드마스",
      "slotCode" : "205",
      "slotName" : "장신구4",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "205",
      "equipSlotName" : "장신구4"
    } ]
  }, {
    "playerId" : "720594ed3ef5918b7c609948733730e9",
    "nickname" : "노돌리",
    "map" : {
      "mapId" : "104",
      "name" : "스프링필드"
    },
    "playInfo" : {
      "random" : false,
      "partyUserCount" : 0,
      "partyId" : "b762303013093c43599c55f64fdcff53",
      "playTypeName" : "정상",
      "characterId" : "7145eabf772299aaca3b583f3f305fc1",
      "characterName" : "헬레나",
      "level" : 37,
      "killCount" : 0,
      "deathCount" : 3,
      "assistCount" : 4,
      "attackPoint" : 10413,
      "damagePoint" : 12569,
      "battlePoint" : 36,
      "sightPoint" : 64,
      "towerAttackPoint" : 6447,
      "backAttackCount" : 7,
      "comboCount" : 11,
      "spellCount" : 0,
      "healAmount" : 0,
      "sentinelKillCount" : 15,
      "demolisherKillCount" : 27,
      "trooperKillCount" : 0,
      "guardianKillCount" : 0,
      "guardTowerKillCount" : 0,
      "getCoin" : 11530,
      "spendCoin" : 11120,
      "spendConsumablesCoin" : 2070,
      "playTime" : 646,
      "responseTime" : 87,
      "minLifeTime" : 169,
      "maxLifeTime" : 208
    },
    "position" : {
      "name" : "원거리딜러",
      "explain" : "치명타 피해량 +12%",
      "attribute" : [ {
        "level" : 1,
        "id" : "71f584223dfa59faa54e3004b7f348be",
        "name" : "충동 구매"
      }, {
        "level" : 2,
        "id" : "2ee2eeb641442593cc234332b0809202",
        "name" : "할인 판매"
      }, {
        "level" : 3,
        "id" : "ac75b2be060e121bbea9548d599f278e",
        "name" : "완전한 성장"
      } ]
    },
    "items" : [ {
      "itemId" : "45440e669c50cb3d6689af94ed781948",
      "itemName" : "E 커스드 어빌리티",
      "slotCode" : "101",
      "slotName" : "손(공격)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "101",
      "equipSlotName" : "손(공격)"
    }, {
      "itemId" : "bcc5ffd4d2fd52af52836824d51392c9",
      "itemName" : "E 위어리 아이즈",
      "slotCode" : "102",
      "slotName" : "머리(치명)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "102",
      "equipSlotName" : "머리(치명)"
    }, {
      "itemId" : "871e69e025fb678731244bc861dc078d",
      "itemName" : "S 치프 리서처",
      "slotCode" : "103",
      "slotName" : "가슴(체력)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "103",
      "equipSlotName" : "가슴(체력)"
    }, {
      "itemId" : "c5a7bbe3776125d312a7300ef1e03468",
      "itemName" : "S 마더스 듀티",
      "slotCode" : "104",
      "slotName" : "허리(회피)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "104",
      "equipSlotName" : "허리(회피)"
    }, {
      "itemId" : "329f268e9f44957ddd39e53557363ab3",
      "itemName" : "S 숨겨둔 그리움",
      "slotCode" : "105",
      "slotName" : "다리(방어)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "105",
      "equipSlotName" : "다리(방어)"
    }, {
      "itemId" : "41a36ee4a12692c9d25f4db0bcd90433",
      "itemName" : "E 이기적인 선택",
      "slotCode" : "106",
      "slotName" : "발(이동)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "106",
      "equipSlotName" : "발(이동)"
    }, {
      "itemId" : "57707ae8fccc56d5eb6506e29e71c0e4",
      "itemName" : "활성화 폴리오",
      "slotCode" : "202",
      "slotName" : "장신구1",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "202",
      "equipSlotName" : "장신구1"
    }, {
      "itemId" : "f67c67b2f9421ca191bf86d2543e19b7",
      "itemName" : "SB앰플샷 루차",
      "slotCode" : "203",
      "slotName" : "장신구2",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "203",
      "equipSlotName" : "장신구2"
    }, {
      "itemId" : "d5ed2195e08bbde160f8d0ba93d49e4e",
      "itemName" : "체스터 더블버거",
      "slotCode" : "301",
      "slotName" : "회복킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "301",
      "equipSlotName" : "회복킷"
    }, {
      "itemId" : "c0432d98a1e2d21bda6e726ef4dafce3",
      "itemName" : "런업 스프린터",
      "slotCode" : "302",
      "slotName" : "가속킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "302",
      "equipSlotName" : "가속킷"
    }, {
      "itemId" : "296952008cb3ca8b997170a2e9ea6bab",
      "itemName" : "케미스트 파이크 ",
      "slotCode" : "303",
      "slotName" : "공격킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "303",
      "equipSlotName" : "공격킷"
    }, {
      "itemId" : "66ec62c87866feb20bbe62334087748d",
      "itemName" : "스테민 터틀",
      "slotCode" : "304",
      "slotName" : "방어킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "304",
      "equipSlotName" : "방어킷"
    }, {
      "itemId" : "618202853ed1d948a9aebb04890507eb",
      "itemName" : "포인트 임팩트",
      "slotCode" : "305",
      "slotName" : "특수킷",
      "rarityCode" : "102",
      "rarityName" : "언커먼",
      "equipSlotCode" : "305",
      "equipSlotName" : "특수킷"
    }, {
      "itemId" : "405ff90775a7d270329e7c50e8592b52",
      "itemName" : "S 간절한 바람",
      "slotCode" : "107",
      "slotName" : "목",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "107",
      "equipSlotName" : "목"
    }, {
      "itemId" : "b49d93497e519452675cd2a63138d24e",
      "itemName" : "포인트 차트",
      "slotCode" : "204",
      "slotName" : "장신구3",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "204",
      "equipSlotName" : "장신구3"
    }, {
      "itemId" : "39fb042851334ca51acdf50164bea7cb",
      "itemName" : "파기된 기록",
      "slotCode" : "205",
      "slotName" : "장신구4",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "205",
      "equipSlotName" : "장신구4"
    } ]
  }, {
    "playerId" : "f92ecbb84bb347d9d06d3bc93a2e8181",
    "nickname" : "배떡",
    "map" : {
      "mapId" : "104",
      "name" : "스프링필드"
    },
    "playInfo" : {
      "random" : false,
      "partyUserCount" : 0,
      "partyId" : "b762303013093c43599c55f64fdcff53",
      "playTypeName" : "정상",
      "characterId" : "102c0a466e4d5e0e53cdce7f93879d51",
      "characterName" : "트리비아",
      "level" : 49,
      "killCount" : 3,
      "deathCount" : 2,
      "assistCount" : 11,
      "attackPoint" : 19990,
      "damagePoint" : 5365,
      "battlePoint" : 38,
      "sightPoint" : 81,
      "towerAttackPoint" : 14107,
      "backAttackCount" : 18,
      "comboCount" : 41,
      "spellCount" : 0,
      "healAmount" : 0,
      "sentinelKillCount" : 15,
      "demolisherKillCount" : 21,
      "trooperKillCount" : 1,
      "guardianKillCount" : 0,
      "guardTowerKillCount" : 0,
      "getCoin" : 13700,
      "spendCoin" : 13200,
      "spendConsumablesCoin" : 1000,
      "playTime" : 646,
      "responseTime" : 52,
      "minLifeTime" : 117,
      "maxLifeTime" : 313
    },
    "position" : {
      "name" : "원거리딜러",
      "explain" : "치명타 피해량 +12%",
      "attribute" : [ {
        "level" : 1,
        "id" : "71f584223dfa59faa54e3004b7f348be",
        "name" : "충동 구매"
      }, {
        "level" : 2,
        "id" : "2ee2eeb641442593cc234332b0809202",
        "name" : "할인 판매"
      }, {
        "level" : 3,
        "id" : "ac75b2be060e121bbea9548d599f278e",
        "name" : "완전한 성장"
      } ]
    },
    "items" : [ {
      "itemId" : "321fe8d38015ba9828f96363d2e2fedb",
      "itemName" : "E 미스틱 포그",
      "slotCode" : "101",
      "slotName" : "손(공격)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "101",
      "equipSlotName" : "손(공격)"
    }, {
      "itemId" : "34d7f6920bf029fd6c28adce11475924",
      "itemName" : "E 블러드 카니발",
      "slotCode" : "102",
      "slotName" : "머리(치명)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "102",
      "equipSlotName" : "머리(치명)"
    }, {
      "itemId" : "a5aa91203ae22351871edaeaf26e9775",
      "itemName" : "E 트리니티 블러드",
      "slotCode" : "103",
      "slotName" : "가슴(체력)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "103",
      "equipSlotName" : "가슴(체력)"
    }, {
      "itemId" : "0f9a1ff192f1f30ffb1bd5e547fa3d90",
      "itemName" : "S 블랙버드 블러섬 ",
      "slotCode" : "104",
      "slotName" : "허리(회피)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "104",
      "equipSlotName" : "허리(회피)"
    }, {
      "itemId" : "f68c4d9b36d11ca29e85c5fe1ae035a2",
      "itemName" : "S 그림자 자국",
      "slotCode" : "105",
      "slotName" : "다리(방어)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "105",
      "equipSlotName" : "다리(방어)"
    }, {
      "itemId" : "701ce0712c9675b616ded4b2509ecb6a",
      "itemName" : "E 포르미체티",
      "slotCode" : "106",
      "slotName" : "발(이동)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "106",
      "equipSlotName" : "발(이동)"
    }, {
      "itemId" : "686d94258c3774d7260c1299a62baa97",
      "itemName" : "SB킬힐 루인",
      "slotCode" : "202",
      "slotName" : "장신구1",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "202",
      "equipSlotName" : "장신구1"
    }, {
      "itemId" : "38130ed45865f60622c75ed2509895bd",
      "itemName" : "부츠커터 보티스",
      "slotCode" : "203",
      "slotName" : "장신구2",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "203",
      "equipSlotName" : "장신구2"
    }, {
      "itemId" : "c143b1db0fa6c4fb53f310cdbdd0bcb2",
      "itemName" : "체스터 더블버거",
      "slotCode" : "301",
      "slotName" : "회복킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "301",
      "equipSlotName" : "회복킷"
    }, {
      "itemId" : "c0432d98a1e2d21bda6e726ef4dafce3",
      "itemName" : "런업 스프린터",
      "slotCode" : "302",
      "slotName" : "가속킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "302",
      "equipSlotName" : "가속킷"
    }, {
      "itemId" : "b18fb2833c28b84885394e19c734a1ec",
      "itemName" : "배트 파이크",
      "slotCode" : "303",
      "slotName" : "공격킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "303",
      "equipSlotName" : "공격킷"
    }, {
      "itemId" : "87eb30480941d6ac34ea14cf5be6b061",
      "itemName" : "스테민 터틀",
      "slotCode" : "304",
      "slotName" : "방어킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "304",
      "equipSlotName" : "방어킷"
    }, {
      "itemId" : "011cd58bc5b8b0e334cec7a8dfdcb56a",
      "itemName" : "박쥐폭풍 임팩트",
      "slotCode" : "305",
      "slotName" : "특수킷",
      "rarityCode" : "102",
      "rarityName" : "언커먼",
      "equipSlotCode" : "305",
      "equipSlotName" : "특수킷"
    }, {
      "itemId" : "71a9737f456e438070600c6dac947155",
      "itemName" : "S 엘루어 배트",
      "slotCode" : "107",
      "slotName" : "목",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "107",
      "equipSlotName" : "목"
    }, {
      "itemId" : "287516d8d306de9e5a1a27b842b85f12",
      "itemName" : "박쥐폭풍 보티스",
      "slotCode" : "204",
      "slotName" : "장신구3",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "204",
      "equipSlotName" : "장신구3"
    }, {
      "itemId" : "18b288c30e435f6a53798d80abf0d863",
      "itemName" : "시엘 루드플리가",
      "slotCode" : "205",
      "slotName" : "장신구4",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "205",
      "equipSlotName" : "장신구4"
    } ]
  }, {
    "playerId" : "1a8fb19518636188820e73d96e44e6d1",
    "nickname" : "여러분을사랑해요",
    "map" : {
      "mapId" : "104",
      "name" : "스프링필드"
    },
    "playInfo" : {
      "random" : false,
      "partyUserCount" : 0,
      "partyId" : "b762303013093c43599c55f64fdcff53",
      "playTypeName" : "정상",
      "characterId" : "1d5ac6423cc85695a37185c38bb1b528",
      "characterName" : "스텔라",
      "level" : 26,
      "killCount" : 0,
      "deathCount" : 5,
      "assistCount" : 2,
      "attackPoint" : 2708,
      "damagePoint" : 27586,
      "battlePoint" : 75,
      "sightPoint" : 163,
      "towerAttackPoint" : 0,
      "backAttackCount" : 7,
      "comboCount" : 8,
      "spellCount" : 2,
      "healAmount" : 0,
      "sentinelKillCount" : 7,
      "demolisherKillCount" : 4,
      "trooperKillCount" : 0,
      "guardianKillCount" : 0,
      "guardTowerKillCount" : 0,
      "getCoin" : 7250,
      "spendCoin" : 6570,
      "spendConsumablesCoin" : 820,
      "playTime" : 646,
      "responseTime" : 84,
      "minLifeTime" : 4,
      "maxLifeTime" : 249
    },
    "position" : {
      "name" : "탱커",
      "explain" : "체력 +7%, 회피 +5%",
      "attribute" : [ {
        "level" : 1,
        "id" : "a681dbe9ad002a1ebe7f9c9229de9c7d",
        "name" : "전선 유지"
      }, {
        "level" : 2,
        "id" : "2ee2eeb641442593cc234332b0809202",
        "name" : "할인 판매"
      }, {
        "level" : 3,
        "id" : "6d8fb905d69edf1c9f73495c3ee44d28",
        "name" : "선봉장"
      } ]
    },
    "items" : [ {
      "itemId" : "60865ada466455b75a6a20d5d4c2a9ef",
      "itemName" : "E 바이오닉 센서",
      "slotCode" : "101",
      "slotName" : "손(공격)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "101",
      "equipSlotName" : "손(공격)"
    }, {
      "itemId" : "183b22ee67dfeb6e3dc08b99a71e5190",
      "itemName" : "이너 스코프 ",
      "slotCode" : "102",
      "slotName" : "머리(치명)",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "102",
      "equipSlotName" : "머리(치명)"
    }, {
      "itemId" : "6067426a2ea5dc4c5b1e9c1abbd06334",
      "itemName" : "E 바이퍼트론",
      "slotCode" : "103",
      "slotName" : "가슴(체력)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "103",
      "equipSlotName" : "가슴(체력)"
    }, {
      "itemId" : "5df983897f8320d00710b159b21e5ed9",
      "itemName" : "E 스트로매크 ",
      "slotCode" : "104",
      "slotName" : "허리(회피)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "104",
      "equipSlotName" : "허리(회피)"
    }, {
      "itemId" : "dc030616f39abf6116e4779f991853e2",
      "itemName" : "E 러스티 하츠",
      "slotCode" : "105",
      "slotName" : "다리(방어)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "105",
      "equipSlotName" : "다리(방어)"
    }, {
      "itemId" : "326be6735fe1643648e321d497e24697",
      "itemName" : "E 퓨엘 제너레이터",
      "slotCode" : "106",
      "slotName" : "발(이동)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "106",
      "equipSlotName" : "발(이동)"
    }, {
      "itemId" : "25c5e0d02bf12ea306a83fff466a8b66",
      "itemName" : "섬광기어-전진",
      "slotCode" : "201",
      "slotName" : "장신구ALL",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "202",
      "equipSlotName" : "장신구1"
    }, {
      "itemId" : "6a879e51bfdc3c6473830472be4065d5",
      "itemName" : "철사장 레그람",
      "slotCode" : "201",
      "slotName" : "장신구ALL",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "203",
      "equipSlotName" : "장신구2"
    }, {
      "itemId" : "b70014b47a4fedfca3937a6f9294092f",
      "itemName" : "서치 스파클링 ",
      "slotCode" : "301",
      "slotName" : "회복킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "301",
      "equipSlotName" : "회복킷"
    }, {
      "itemId" : "c0432d98a1e2d21bda6e726ef4dafce3",
      "itemName" : "런업 스프린터",
      "slotCode" : "302",
      "slotName" : "가속킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "302",
      "equipSlotName" : "가속킷"
    }, {
      "itemId" : "6d433dd0ebdd6bac49c8cce8b7cc34e4",
      "itemName" : "파이크 이펙션",
      "slotCode" : "303",
      "slotName" : "공격킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "303",
      "equipSlotName" : "공격킷"
    }, {
      "itemId" : "2a7605b7af6092d784c47d2c7b34e349",
      "itemName" : "레버 타즈 ",
      "slotCode" : "304",
      "slotName" : "방어킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "304",
      "equipSlotName" : "방어킷"
    }, {
      "itemId" : "99b2bff2265d498ba7db57ba47d6d2db",
      "itemName" : "기어3 맥시머",
      "slotCode" : "305",
      "slotName" : "특수킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "305",
      "equipSlotName" : "특수킷"
    }, {
      "itemId" : "ef1a3add479cefe016bd110d8063e033",
      "itemName" : "E 스타리 나이트",
      "slotCode" : "107",
      "slotName" : "목",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "107",
      "equipSlotName" : "목"
    }, {
      "itemId" : "955ff7096d3e4073aba66e8770816986",
      "itemName" : "섬전연각 레그람",
      "slotCode" : "204",
      "slotName" : "장신구3",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "204",
      "equipSlotName" : "장신구3"
    }, {
      "itemId" : "456a952f1cfe9958c4d8347e459fd1b5",
      "itemName" : "스타 포드인포서",
      "slotCode" : "205",
      "slotName" : "장신구4",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "205",
      "equipSlotName" : "장신구4"
    } ]
  }, {
    "playerId" : "06b1b2f4a6a0d005f18a17ea50f91ad3",
    "nickname" : "다이무스한다",
    "map" : {
      "mapId" : "104",
      "name" : "스프링필드"
    },
    "playInfo" : {
      "random" : false,
      "partyUserCount" : 0,
      "partyId" : "b762303013093c43599c55f64fdcff53",
      "playTypeName" : "정상",
      "characterId" : "cf6008394ebfb5d0de83fa05834018db",
      "characterName" : "다이무스",
      "level" : 45,
      "killCount" : 8,
      "deathCount" : 1,
      "assistCount" : 5,
      "attackPoint" : 21344,
      "damagePoint" : 6974,
      "battlePoint" : 60,
      "sightPoint" : 94,
      "towerAttackPoint" : 10982,
      "backAttackCount" : 6,
      "comboCount" : 30,
      "spellCount" : 0,
      "healAmount" : 0,
      "sentinelKillCount" : 29,
      "demolisherKillCount" : 13,
      "trooperKillCount" : 1,
      "guardianKillCount" : 0,
      "guardTowerKillCount" : 0,
      "getCoin" : 13880,
      "spendCoin" : 13225,
      "spendConsumablesCoin" : 2300,
      "playTime" : 646,
      "responseTime" : 19,
      "minLifeTime" : 178,
      "maxLifeTime" : 449
    },
    "position" : {
      "name" : "근거리딜러",
      "explain" : "치명타 피해량 +12%",
      "attribute" : [ {
        "level" : 1,
        "id" : "13ed96b8d10b40b488059271f940a37e",
        "name" : "단결된 힘"
      }, {
        "level" : 2,
        "id" : "43c56f15f90192f7ead0a8eba794fbed",
        "name" : "전장의 학살자"
      }, {
        "level" : 3,
        "id" : "984e475dde2591d36151e8ca1744cfd9",
        "name" : "급소 가격"
      } ]
    },
    "items" : [ {
      "itemId" : "c214ffc50f3ee8b991d81c71520449c5",
      "itemName" : "E 메이헨 슈나이더",
      "slotCode" : "101",
      "slotName" : "손(공격)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "101",
      "equipSlotName" : "손(공격)"
    }, {
      "itemId" : "0803e67f1cd4e0403defcec2941be889",
      "itemName" : "E 베스페리아 ",
      "slotCode" : "102",
      "slotName" : "머리(치명)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "102",
      "equipSlotName" : "머리(치명)"
    }, {
      "itemId" : "c116b0c96cc797a35dbe1c6e900f314d",
      "itemName" : "E 우아한 궤적",
      "slotCode" : "103",
      "slotName" : "가슴(체력)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "103",
      "equipSlotName" : "가슴(체력)"
    }, {
      "itemId" : "7436ad5af300ff22d4f408330238c3ee",
      "itemName" : "E 골드 샤르페",
      "slotCode" : "104",
      "slotName" : "허리(회피)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "104",
      "equipSlotName" : "허리(회피)"
    }, {
      "itemId" : "e9281cd9d9e17e427666d4b319b8b7b2",
      "itemName" : "E 펄션 필러 ",
      "slotCode" : "105",
      "slotName" : "다리(방어)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "105",
      "equipSlotName" : "다리(방어)"
    }, {
      "itemId" : "2339de62a08da5e7f6e9d611191131e5",
      "itemName" : "E 슈발츠 슈트름",
      "slotCode" : "106",
      "slotName" : "발(이동)",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "106",
      "equipSlotName" : "발(이동)"
    }, {
      "itemId" : "e61b559ae6620fa162637d3a70da2ed5",
      "itemName" : "장작 베리드",
      "slotCode" : "202",
      "slotName" : "장신구1",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "202",
      "equipSlotName" : "장신구1"
    }, {
      "itemId" : "8d97b301dc0dc04a5d1be77c043c2c95",
      "itemName" : "질풍의 베리드",
      "slotCode" : "203",
      "slotName" : "장신구2",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "203",
      "equipSlotName" : "장신구2"
    }, {
      "itemId" : "02d23c487f6800bf4f053fbf6e9aeedd",
      "itemName" : "체스터 더블버거",
      "slotCode" : "301",
      "slotName" : "회복킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "301",
      "equipSlotName" : "회복킷"
    }, {
      "itemId" : "9ccc3314aacd6a96792c5cb2ac16c0ca",
      "itemName" : "질풍의 스프린터 ",
      "slotCode" : "302",
      "slotName" : "가속킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "302",
      "equipSlotName" : "가속킷"
    }, {
      "itemId" : "b37373156f360fb1d0805bd0d846b0b9",
      "itemName" : "이펙트 이펙션",
      "slotCode" : "303",
      "slotName" : "공격킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "303",
      "equipSlotName" : "공격킷"
    }, {
      "itemId" : "cf5140b688c613efcbb0621d34eddb4e",
      "itemName" : "질풍의 타즈 ",
      "slotCode" : "304",
      "slotName" : "방어킷",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "304",
      "equipSlotName" : "방어킷"
    }, {
      "itemId" : "54430bd9be1d8cc0948891f3a159c92d",
      "itemName" : "보름달 임팩트",
      "slotCode" : "305",
      "slotName" : "특수킷",
      "rarityCode" : "102",
      "rarityName" : "언커먼",
      "equipSlotCode" : "305",
      "equipSlotName" : "특수킷"
    }, {
      "itemId" : "9beaa3114939ca52fba36c5203b15d64",
      "itemName" : "E 솔리튜드 칼리버",
      "slotCode" : "107",
      "slotName" : "목",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "107",
      "equipSlotName" : "목"
    }, {
      "itemId" : "398c3e312e899190658422f4bda4666a",
      "itemName" : "보름달 베리드",
      "slotCode" : "204",
      "slotName" : "장신구3",
      "rarityCode" : "103",
      "rarityName" : "레어",
      "equipSlotCode" : "204",
      "equipSlotName" : "장신구3"
    }, {
      "itemId" : "e04cba10478b3d94a9fa77f724b85182",
      "itemName" : "쉬베르트 루프리",
      "slotCode" : "205",
      "slotName" : "장신구4",
      "rarityCode" : "104",
      "rarityName" : "유니크",
      "equipSlotCode" : "205",
      "equipSlotName" : "장신구4"
    } ]
  } ]
}