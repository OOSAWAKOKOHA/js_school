{
  //配列の作成
  let classes = [];
  console.log( classes );

  //上のとき、配列(classes)に保存されているデータ数
  console.log( `データの個数：${ classes.length }` );

  //配列(classes)にデータを保存：よくない例 -> []の中を自分で書いている
  classes[ 0 ] = "WD1A";
  classes[ 1 ] = "WD2A";
  console.log( classes );

  //上のとき、配列(classes)に保存されているデータ数
  console.log( `データの個数：${ classes.length }` );

  //classesの[ 2 ]要素に"WD3A"を保存：これを使う
  //classes[ 2 ] = "WD3A" は使わない
  classes[ classes.length ] = "WD3A";
  console.log( classes );

  //上のとき、配列(classes)に保存されているデータ数
  console.log( `データの個数：${ classes.length }` );
}