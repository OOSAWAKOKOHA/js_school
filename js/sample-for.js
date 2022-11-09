{
  //forの基本的な使い方
  for( let i = 0; i < 10; i++ ){
    //i++は、iを+1づつ増やす（インクリメント）
    console.log( `${ i }回目のループ`);
  }

  //処理が終わった後consoleに出すためには？
  // -> 変数を外に作る
  let i
  for( i = 0; i < 10; i++ ){
    console.log( `${ i }回目のループ`);
  }
  console.log( `ループ回数：${ i }回 `);


  //配列とforループの組み合わせ その１
  let arr = [];
  for( let i = 0; i < 10; i++ ){
    arr[ i ] = i;
  }
  console.log( arr );

  //配列とforループの組み合わせ その２
  arr = [];
  let j = 0;
  while( j < 10 ){
    arr[ j ] = j;
    j++;
  }
  console.log( arr );

  //配列とforループの組み合わせ その3
  const classes = [ "WD1A","WD2A","WD3A" ];
  //classesの中にあるクラス名をconsoleに表示するforループ
  for( let i =0; i < classes.length; i++ ){
    console.log( classes[ i ] );
  }
}