//index.htmlからidを取得して固定値代入
const state = document.getElementById("state");
const cpu = document.getElementById("cpu");
const gu = document.getElementById("gu");
const cho = document.getElementById("cho");
const pa = document.getElementById("pa");
const player = document.getElementById("player");
const reset = document.getElementById("reset");
const win = document.getElementById("win");
const lose = document.getElementById("lose");

//配列にじゃんけんの選択肢を入れる
//jans[0]="グー",jans[1]="チョキ",jans[2]="パー"
const jans = ["グー", "チョキ", "パー"];
//プレイヤーの選択肢を格納する変数を設定
let playjan;
//CPUの選択肢を格納する変数を設定
let cpuja;
//勝った回数をカウント
let winCount = 0;
//負けた回数をカウントする変数を設定。初期値は０
let loseCount = 0;

//関数start()を呼び出し。
start();

//グーのボタンを押した時イベント
gu.addEventListener("click", () => {
  //プレイヤーのテキストにグーを表示
  player.textContent = jans[0];
  //プレイヤーの選択肢を格納する変数にグーを格納
  playjan = jans[0];
  //CPUの選択肢を格納する変数に配列jansからランダムに取得した選択肢を格納
  cpuja =
    jans[
      Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]
    ];
  //上記で取得した変数をCPUのテキストに表示
  cpu.textContent = cpuja;
  //関数result()を呼び出し
  result();
});
//チョキのボタンを押した時イベント。挙動はグーと同じ
cho.addEventListener("click", () => {
  player.textContent = jans[1];
  playjan = jans[1];
  cpuja =
    jans[
      Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]
    ];
  cpu.textContent = cpuja;
  result();
});
//パーのボタンを押した時イベント。挙動はグーと同じ
pa.addEventListener("click", () => {
  player.textContent = jans[2];
  playjan = jans[2];
  cpuja =
    jans[
      Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]
    ];
  cpu.textContent = cpuja;
  result();
});
