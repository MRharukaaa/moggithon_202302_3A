/*js後半*/
//リセットボタンをクリックした時のイベント
reset.addEventListener("click",()=>{
  // 関数start()を呼び出し
  start();
  //stateにテキストを表示
  state.textContent="最初はグー！じゃんけん・・・";
})

//result()の関数です。じゃんけん判定を判定をここで行います。
function result(){
  //if関数で分岐。
  //プレイヤーとCPUが同じだったら、stateにテキストを表示
  if(playjan===cpuja){
    state.textContent="あいこで・・・"
  //プレイヤーが勝った場合の分岐。
  }else if(playjan===jans[0]&&cpuja===jans[1]||playjan===jans[1]&&cpuja===jans[2]||playjan===jans[2]&&cpuja===jans[0]){
    //stateにテキストを表示
    state.textContent="かち";
    //関数display()を呼び出し
    display()
    //勝った回数に１プラス
    winCount++;
    //勝った回数をテキストに表示
    win.textContent=winCount;
  }else{
    //stateにテキストを表示
    state.textContent="まけ";
    //関数display()を呼び出し
    display()
    //負けた回数に１プラス
    loseCount++;
    //負けた回数をテキストに表示
    lose.textContent=loseCount;
  }
}

//start()の関数。ボタンの表示、非表示を設定。disabled＝falseだとボタンを表示され、disabled＝tureだと非表示となる。
function start(){
  gu.disabled=false;
  cho.disabled=false;
  pa.disabled=false;
  reset.disabled=true;
}
//display()の関数。ボタンの表示、非表示を設定。disabled＝falseだとボタンを表示され、disabled＝tureだと非表示となる。
function display(){
  gu.disabled=true;
  cho.disabled=true;
  pa.disabled=true;
  reset.disabled=false;
}
