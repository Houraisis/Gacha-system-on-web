let availableItems = [
  { id: 1, name: "1", rarity: "legendary", isPicked: false },
  { id: 2, name: "2", rarity: "legendary", isPicked: false },
  { id: 3, name: "3", rarity: "legendary", isPicked: false },
  { id: 4, name: "4", rarity: "legendary", isPicked: false },
  { id: 5, name: "5", rarity: "legendary", isPicked: false },
  { id: 6, name: "6", rarity: "legendary", isPicked: false },
  { id: 7, name: "7", rarity: "legendary", isPicked: false },
  { id: 8, name: "8", rarity: "legendary", isPicked: false },
  { id: 9, name: "9", rarity: "legendary", isPicked: false },
  { id: 10, name: "10", rarity: "legendary", isPicked: false },
  { id: 11, name: "11", rarity: "legendary", isPicked: false },
  { id: 12, name: "12", rarity: "legendary", isPicked: false },
  { id: 13, name: "13", rarity: "legendary", isPicked: false },
  { id: 14, name: "14", rarity: "legendary", isPicked: false },
  { id: 15, name: "15", rarity: "legendary", isPicked: false },
  { id: 16, name: "16", rarity: "legendary", isPicked: false },
  { id: 17, name: "17", rarity: "epic", isPicked: false },
  { id: 18, name: "18", rarity: "epic", isPicked: false },
  { id: 19, name: "19", rarity: "epic", isPicked: false },
  { id: 20, name: "20", rarity: "epic", isPicked: false },
  { id: 21, name: "21", rarity: "epic", isPicked: false },
  { id: 22, name: "22", rarity: "epic", isPicked: false },
  { id: 23, name: "23", rarity: "epic", isPicked: false },
  { id: 24, name: "24", rarity: "epic", isPicked: false },
  { id: 25, name: "25", rarity: "epic", isPicked: false },
  { id: 26, name: "26", rarity: "epic", isPicked: false },
  { id: 27, name: "27", rarity: "epic", isPicked: false },
  { id: 28, name: "28", rarity: "epic", isPicked: false },
  { id: 29, name: "29", rarity: "epic", isPicked: false },
  { id: 30, name: "30", rarity: "epic", isPicked: false },
  { id: 31, name: "31", rarity: "epic", isPicked: false },
  { id: 32, name: "32", rarity: "epic", isPicked: false },
  { id: 33, name: "33", rarity: "epic", isPicked: false },
  { id: 34, name: "34", rarity: "epic", isPicked: false },
  { id: 35, name: "35", rarity: "epic", isPicked: false },
  { id: 36, name: "36", rarity: "epic", isPicked: false },
  { id: 37, name: "37", rarity: "epic", isPicked: false },
  { id: 38, name: "38", rarity: "epic", isPicked: false },
  { id: 39, name: "39", rarity: "epic", isPicked: false },
  { id: 40, name: "40", rarity: "epic", isPicked: false },
  { id: 41, name: "41", rarity: "rare", isPicked: false },
  { id: 42, name: "42", rarity: "rare", isPicked: false },
  { id: 43, name: "43", rarity: "rare", isPicked: false },
  { id: 44, name: "44", rarity: "rare", isPicked: false },
  { id: 45, name: "45", rarity: "rare", isPicked: false },
  { id: 46, name: "46", rarity: "rare", isPicked: false },
  { id: 47, name: "47", rarity: "rare", isPicked: false },
  { id: 48, name: "48", rarity: "rare", isPicked: false },
  { id: 49, name: "49", rarity: "rare", isPicked: false },
  { id: 50, name: "50", rarity: "rare", isPicked: false },
  { id: 51, name: "51", rarity: "rare", isPicked: false },
  { id: 52, name: "52", rarity: "rare", isPicked: false },
  { id: 53, name: "53", rarity: "rare", isPicked: false },
  { id: 54, name: "54", rarity: "rare", isPicked: false },
  { id: 55, name: "55", rarity: "rare", isPicked: false },
  { id: 56, name: "56", rarity: "rare", isPicked: false },
  { id: 57, name: "57", rarity: "rare", isPicked: false },
  { id: 58, name: "58", rarity: "rare", isPicked: false },
  { id: 59, name: "59", rarity: "rare", isPicked: false },
  { id: 60, name: "60", rarity: "rare", isPicked: false },
  { id: 61, name: "61", rarity: "rare", isPicked: false },
  { id: 62, name: "62", rarity: "rare", isPicked: false },
  { id: 63, name: "63", rarity: "rare", isPicked: false },
  { id: 64, name: "64", rarity: "rare", isPicked: false },
  { id: 65, name: "65", rarity: "rare", isPicked: false },
  { id: 66, name: "66", rarity: "rare", isPicked: false },
  { id: 67, name: "67", rarity: "rare", isPicked: false },
  { id: 68, name: "68", rarity: "rare", isPicked: false },
  { id: 69, name: "69", rarity: "rare", isPicked: false },
  { id: 70, name: "70", rarity: "rare", isPicked: false },
  { id: 71, name: "71", rarity: "rare", isPicked: false },
  { id: 72, name: "72", rarity: "rare", isPicked: false },
  { id: 73, name: "73", rarity: "rare", isPicked: false },
  { id: 74, name: "74", rarity: "rare", isPicked: false },
  { id: 75, name: "75", rarity: "rare", isPicked: false },
  { id: 76, name: "76", rarity: "rare", isPicked: false },
  { id: 77, name: "77", rarity: "rare", isPicked: false },
  { id: 78, name: "78", rarity: "rare", isPicked: false },
  { id: 79, name: "79", rarity: "rare", isPicked: false },
  { id: 80, name: "80", rarity: "rare", isPicked: false },
  { id: 81, name: "81", rarity: "common", isPicked: false },
  { id: 82, name: "82", rarity: "common", isPicked: false },
  { id: 83, name: "83", rarity: "common", isPicked: false },
  { id: 84, name: "84", rarity: "common", isPicked: false },
  { id: 85, name: "85", rarity: "common", isPicked: false },
  { id: 86, name: "86", rarity: "common", isPicked: false },
  { id: 87, name: "87", rarity: "common", isPicked: false },
  { id: 88, name: "88", rarity: "common", isPicked: false },
  { id: 89, name: "89", rarity: "common", isPicked: false },
  { id: 90, name: "90", rarity: "common", isPicked: false },
  { id: 91, name: "91", rarity: "common", isPicked: false },
  { id: 92, name: "92", rarity: "common", isPicked: false },
  { id: 93, name: "93", rarity: "common", isPicked: false },
  { id: 94, name: "94", rarity: "common", isPicked: false },
  { id: 95, name: "95", rarity: "common", isPicked: false },
  { id: 96, name: "96", rarity: "common", isPicked: false },
  { id: 97, name: "97", rarity: "common", isPicked: false },
  { id: 98, name: "98", rarity: "common", isPicked: false },
  { id: 99, name: "99", rarity: "common", isPicked: false },
  { id: 100, name: "100", rarity: "common", isPicked: false },
  { id: 101, name: "101", rarity: "common", isPicked: false },
  { id: 102, name: "102", rarity: "common", isPicked: false },
  { id: 103, name: "103", rarity: "common", isPicked: false },
  { id: 104, name: "104", rarity: "common", isPicked: false },
  { id: 105, name: "105", rarity: "common", isPicked: false },
  { id: 106, name: "106", rarity: "common", isPicked: false },
  { id: 107, name: "107", rarity: "common", isPicked: false },
  { id: 108, name: "108", rarity: "common", isPicked: false },
  { id: 109, name: "109", rarity: "common", isPicked: false },
  { id: 110, name: "110", rarity: "common", isPicked: false },
  { id: 111, name: "111", rarity: "common", isPicked: false },
  { id: 112, name: "112", rarity: "common", isPicked: false },
  { id: 113, name: "113", rarity: "common", isPicked: false },
  { id: 114, name: "114", rarity: "common", isPicked: false },
  { id: 115, name: "115", rarity: "common", isPicked: false },
  { id: 116, name: "116", rarity: "common", isPicked: false },
  { id: 117, name: "117", rarity: "common", isPicked: false },
  { id: 118, name: "118", rarity: "common", isPicked: false },
  { id: 119, name: "119", rarity: "common", isPicked: false },
  { id: 120, name: "120", rarity: "common", isPicked: false },
  { id: 121, name: "121", rarity: "common", isPicked: false },
  { id: 122, name: "122", rarity: "common", isPicked: false },
  { id: 123, name: "123", rarity: "common", isPicked: false },
  { id: 124, name: "124", rarity: "common", isPicked: false },
  { id: 125, name: "125", rarity: "common", isPicked: false },
  { id: 126, name: "126", rarity: "common", isPicked: false },
  { id: 127, name: "127", rarity: "common", isPicked: false },
  { id: 128, name: "128", rarity: "common", isPicked: false },
  { id: 129, name: "129", rarity: "common", isPicked: false },
  { id: 130, name: "130", rarity: "common", isPicked: false },
  { id: 131, name: "131", rarity: "common", isPicked: false },
  { id: 132, name: "132", rarity: "common", isPicked: false },
  { id: 133, name: "133", rarity: "common", isPicked: false },
  { id: 134, name: "134", rarity: "common", isPicked: false },
  { id: 135, name: "135", rarity: "common", isPicked: false },
  { id: 136, name: "136", rarity: "common", isPicked: false },
  { id: 137, name: "137", rarity: "common", isPicked: false },
  { id: 138, name: "138", rarity: "common", isPicked: false },
  { id: 139, name: "139", rarity: "common", isPicked: false },
  { id: 140, name: "140", rarity: "common", isPicked: false },
];

// 플레이어 정의
const players = [
  { id: 1, name: "Player 1", pickedItems: [] },
  { id: 2, name: "Player 2", pickedItems: [] },
  { id: 3, name: "Player 3", pickedItems: [] },
  { id: 4, name: "Player 4", pickedItems: [] },
  { id: 5, name: "Player 5", pickedItems: [] },
  { id: 6, name: "Player 6", pickedItems: [] },
  { id: 7, name: "Player 7", pickedItems: [] },
  { id: 8, name: "Player 8", pickedItems: [] },
  { id: 9, name: "Player 9", pickedItems: [] },
  { id: 10, name: "Player 10", pickedItems: [] },
  { id: 11, name: "Player 11", pickedItems: [] },
  { id: 12, name: "Player 12", pickedItems: [] },
  { id: 13, name: "Player 13", pickedItems: [] },
  { id: 14, name: "Player 14", pickedItems: [] },
  { id: 15, name: "Player 15", pickedItems: [] },
  { id: 16, name: "Player 16", pickedItems: [] },
];

const rarityProbabilities = {
  legendary: 0.08,
  epic: 0.12,
  rare: 0.2,
  common: 0.6,
};

let currentRound = 1;
let currentPlayerIndex = 0;
let isReversed = false;

// 실행 순서 1번
function renderPlayers() {
  // playersDiv가 const players에 있는 요소를 다 가져옴 (배열 전체)
  const playersDiv = document.getElementById("players");
  playersDiv.innerHTML = "";
  // const players에 있는 배열을 순회하는 과정에서 선언된 function(player)의 코드 내용을 전부 적용
  // forEach 함수: 이 함수 뒤에 주어지는 코드를 배열에다가 모두 반복하여 적용시키는 함수
  players.forEach((player) => {
    // playerDiv = div 요소 추가 후 css에 존재하는 player class에 들어있는 값 추가
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("player");
    // player 함수에는 players 배열 순환 도중에 들어있는 양식 값이 이미 들어 있는 상태
    // 즉 player.name은 배열에 들어있는 name에 해당하는 값이 된다
    // player.pickedItems는 빈 배열이 들어가 있으나 map 함수를 이용하여 추후 나올 item.name, 즉 아이템 이름을 집어넣는다
    // 그리고 여러 아이템이 들어갈 것을 대비하여 배열에 들어가 있는 문자열을 서로 잇고 사이에 ,를 집어넣는다
    playerDiv.textContent = `${player.name} - Picked: ${player.pickedItems.map((item) => item.name).join(", ")}`;
    // playerDiv 속성을 playersDiv에 자식 노드로 추가시킨다
    playersDiv.appendChild(playerDiv);
  });
}
// 실행 순서 4번
function getRandomItem() {
  // 총 가중치를 설정

  // 가중치 설정
  const totalWeight = Math.round(
    Object.values(rarityProbabilities).reduce((acc, val) => acc + val, 0),
  );
  // random = 무작위로 0부터 1까지 나온 수에 총 가중치 합을 곱하고 소숫점 둘째 자리에서 반올림한다
  // floor 함수: 단순히 유리수인 경우 값을 내림해버림
  // random 함수: 0과 1사이 값을 랜덤으로 지정
  let random = Math.round(Math.random() * totalWeight * 100) / 100;

  let randomLog = [random];
  for (let rarity in rarityProbabilities) {
    // rarity 등급에 해당하는 값을 random에서 뺀다
    random -= rarityProbabilities[rarity];
    random = Math.round(random * 100) / 100;
    randomLog.push(random);
    // 만약 그 random 값이 0보다 작을 경우 availableItems.rarity에 존재하는 등급과 rarity에 존재하는 등급이 같은 등급의 아이템을 1차 선택
    // 그 이후 배열 시작지점은 rarity가 들어 있는 아이템의 length, 즉 갯수를 0과 1사이 나온 값에다가 곱하고 내림한다
    // 만약 rarity가 legendary인 경우 legendary 아이템은 8개, math.random으로 나온 결과가 0.4인 경우 0.4*8을 해서 3.2가 된다
    // 그리고 3.2를 Math.floor를 통해서 내림을 하면 3이 된다. 그렇게 해서 나오는 값은 legendary[3]이니 legendary 아이템 중 3번째가 된다
    // filter 함수: 특정 조건에 해당되는 배열을 보여준다
    if (random <= 0) {
      const filtered_list = availableItems.filter(
        (item) => item.rarity === rarity,
      );
      const result =
        filtered_list[Math.floor(Math.random() * filtered_list.length)];
      console.log(randomLog);
      return result;
    }
  }
}
// 실행 순서 3번
function generateItemsForRound() {
  // 최대 최소 레전더리
  const MIN_LEG = 1;
  const MAX_LEG = 1;

  let leg_count = 0;
  for (const holdingItem of players[currentPlayerIndex].pickedItems) {
    if (holdingItem.rarity === "legendary") leg_count++;
  }

  // 가챠 아이템을 위한 배열 설정
  const items = [];
  // 가챠 아이템이 있는 배열의 길이, 즉 내용물이 3보다 작을 경우 반복 실행
  while (items.length < 3) {
    // 4
    // 가중치를 이용한 가챠 결과를 item에 할당
    let item = getRandomItem();
    // 만약 가챠 결과가 현재 배열에 존재하지 않을 경우 나오는 참과 거짓 값이랑 플레이어가 가챠 결과에 해당되는 아이템을 가지고 있지 않은 경우 나오는 참과 거짓 값을 비교
    // 둘 다 참일 경우 가챠가 실제로 표시 될 items 배열에 추가
    // includes 함수: 특정 요소가 배열에 있는 지 확인하는 함수
    // some 함수: 배열 중 하나라도 특정 조건을 충족하는지 확인하는 함수
    // push 함수: 배열 맨 '끝'에 요소를 추가
    if (item.rarity === "legendary" && leg_count >= MAX_LEG) {
      continue;
    }
    if (
      items.length === 2 &&
      item.rarity !== "legendary" &&
      leg_count < MIN_LEG &&
      players[currentPlayerIndex].pickedItems.length === 4
    ) {
      // 하드코딩됨 재량에 따라 수정
      continue;
    }

    if (
      item &&
      !items.includes(item) &&
      !players.some((player) => player.pickedItems.includes(item))
    ) {
      items.push(item);
    }
  }
  // 그렇게 나온 배열의 길이가 3이 됐을 때 배열을 반환
  return items;
}
// 실행 순서 2번
function renderItems() {
  // itemsDiv에 items에 있는 속성 추가
  // css에 있는 .items 클래스에 들어 있는 스타일도 같이 적용
  const itemsDiv = document.getElementById("items");
  // 3
  // 가챠 결과로 나온 배열을 itemsForRound에 지정
  const itemsForRound = generateItemsForRound();
  itemsDiv.innerHTML = "";
  // itemsForRound에 있는 배열을 순회하는 과정에서 선언된 function(item)의 코드 내용을 전부 적용
  itemsForRound.forEach((item) => {
    // itemDiv = div 요소 추가 후 css에 존재하는 item 클래스랑 가챠 결과로 나온 아이템의 등급을 추가
    const itemDiv = document.createElement("div");
    // flipCardBack가 카드 뒷면을 담당할 요소
    const flipCardBack = document.createElement("div");
    itemDiv.classList.add("item", item.rarity);
    // flipCardBack 요소에 .item.flip-card-back 클래스 선택자 추가
    flipCardBack.classList.add("item", "flip-card-back");
    // 그렇게 나온 가챠 결과의 내용을 name 속성에 있는 이름으로 지정
    itemDiv.textContent = item.name;
    // 5
    // 또한 아이템을 클릭으로 골랐을 경우
    itemDiv.onclick = () => pickItem(item);
    // 상기 내용을 itemDiv의 자식 노드로 추가시킴으로 카드 뒷면은 itemDiv의 자식으로 들어간다
    itemDiv.appendChild(flipCardBack);
    // 이 모든 내용을 itemsDiv에 자식 노드로 추가시켜 웹사이트에 표현한다
    itemsDiv.appendChild(itemDiv);
    anime({
      targets: flipCardBack,
      rotateY: "180deg",
      easing: "easeInOutQuad",
      duration: 800,
    });
    anime({
      targets: itemDiv,
      rotateY: "180deg",
      easing: "easeInOutQuad",
      duration: 800,
    });
  });
}
// 실행 순서 5번
function pickItem(item) {
  // player을 players[0]으로 지정 (currentPlayerIndex가 0으로 지정됐기 때문)
  // players[0]은 player 1의 정보가 들어 있는 배열
  // 이는 nextPlayer 함수 여부에 따라 currentPlayerIndex의 값이 변경 될 수 있음
  // 변경이 됐을 경우 변경된 값의 배열이 나옴
  const player = players[currentPlayerIndex];
  // 현재 선택된 플레이어의 뽑은 내용 맨 끝에 고른 아이템을 추가
  player.pickedItems.push(item);
  // 고른 아이템의 id를 뺀 모든 배열을 뽑기 가능한 아이템으로 설정함으로써 자연스레 중복 방지
  availableItems = availableItems.filter((i) => i.id !== item.id);
  // 6
  // 여기까지 오면 첫 번째 플레이어의 가챠 시퀸스가 끝나고 다음 플레이어로 넘어가는 함수로 이동
  nextPlayer();
}
// 실행 순서 6번
// 스네이크 뽑기 방식 구현
function nextPlayer() {
  // !isReversed, 즉 참일 때
  if (!isReversed) {
    // currentPlayerIndex에 1을 더한다
    currentPlayerIndex++;
    // 만약 currentPlayerIndex가 players의 배열 길이를 넘을 경우
    // isReversed를 true로 바꾸고 players의 배열 길이에서 1을 뺀 값을 할당
    // 또한 currentRound에 1을 추가
    if (currentPlayerIndex >= players.length) {
      isReversed = true;
      currentPlayerIndex = players.length - 1;
      currentRound++;
      // 만약 currentRound가 5 초과인 경우 라운드 종료 출력 후 종료
    }
    // 참이 '아닐' 경우, 즉
  } else {
    // currentPlayerIndex에 1을 뺀다
    currentPlayerIndex--;
    // currentPlayerIndex 값이 0보다 작을 경우
    // isReversed를 다시 false로 돌리고 currentPlayerIndex를 0으로 초기화 후 1을 더한다\
    // 즉 여기로 다시 오게 되면 자동적으로 if(!isReversed)가 되게 만들었다
    // 또한 currentRound에 1을 추가
    if (currentPlayerIndex < 0) {
      isReversed = false;
      currentPlayerIndex = 0;
      currentRound++;
      // 만약 currentRound가 7 초과인 경우 라운드 종료 출력 후 종료
    }
  }
  // 이 모든 것을 진행 한 후 다시 가챠를 진행
  renderPlayers();
  renderItems();
  if (currentRound > 5) {
    alert("All rounds completed!");
    return;
  }
}

document.getElementById("nextRound").onclick = () => {
  renderItems();
};

// 초기화
// 1
renderPlayers();
// 2
renderItems();

/*
0.08
0.12
0.20
0.60

arr  val
0    0.08
0.08 0.12
0.20 0.20
0.40 0.60
*/
