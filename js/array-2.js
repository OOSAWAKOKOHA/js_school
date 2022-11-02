{
  //document
  let doc = document;

  //#input_name
  let inputName = doc.querySelector( "#input_name" );

  //#btn_set
  let setButton = doc.querySelector( "#btn_set" );

  //todoリスト
  let todoList = [];
  //todoリストのカウント
  let index = 0;

  //#btn_set clickEvent
  setButton.onclick = function( event ) {
    todoList[ index ] = inputName.value;
    //+1ずつ増やす（インクリメント）
    //省略：index += 1 や index ++
    index = index + 1;
    console.log( todoList );
  }

  // //#btn_set clickEvent：アロー
  // setButton.onclick = ( event ) => {
    
  // }
}