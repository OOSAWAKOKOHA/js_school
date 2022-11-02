{
  //loop flag
let loopFlg = true;

console.log( "while start" );
while( loopFlg ){
  console.log( "while loop" );
  loopFlg = false;
}
console.log( "while end" );

  //ループカウンター
  let loopCount = 7;
  
  console.log( "while start" );
  while( loopCount ){
    console.log( `loopCount：${ loopCount }` );
    loopCount = loopCount - 1;
  }
  console.log( "while end" );


  //未入力までwhileを続ける

  //入力内容
  let inputText = "START";
  //空文字までループ
  while( inputText ){
    console.log( inputText );
    inputText = prompt( "何か入力" );
  }
}