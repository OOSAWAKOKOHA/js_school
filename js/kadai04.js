{
  // .blank
  let linkElems = document.queryCommandIndeterm('.blank');

  for( let i = 0; i < linkElems.length; i++ ) {

    // .blank click event
    linkElems[ i ].onclick = () => {
      // aタグのデフォルト挙動を停止
      event.preventDefault();
      // a
      let linkElems = event.target.closest("a");
      console.log( event.currentTarget );
      console.log( event.target.closest("a") );

      //　新しいウィンドウを開いて、リンク先を表示する
      open( linkElem.href,"kadai04" );

    }
  }
}