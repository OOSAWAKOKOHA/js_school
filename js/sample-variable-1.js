{
  // //#btn_price クリックイベント
  // document.querySelector( "#btn_calc" ).onclick = function( event ){
  //   //#input_priceの入力内容の消費税を#taxに表示する
  //   document.querySelector( "#tax" ).innerText =
  //   document.querySelector( "#input_price" ).value * 0.1;
  // }


  //変数を利用したバージョン

  //#btn_calc
  let calcButton = document.querySelector( "#btn_calc" );
  //#input_price
  let inputPrice = document.querySelector( "#input_price" );
  //#tax
  let taxArea = document.querySelector( "#tax" );
  //#taxRate
  let taxRate = 0.1;

  //#btn_calc クリックイベント
  calcButton.onclick = function( event ){
    //#input_priceの入力内容の消費税を#taxに表示する
    taxArea.innerText = inputPrice.value * taxRate;
  }
}