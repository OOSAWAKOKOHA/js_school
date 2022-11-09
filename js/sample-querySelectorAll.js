{
  // .read
  let readElem = document.querySelectorAll( ".read" );
  console.log( readElem );

  // .readテキストカラーを変更
  readElem[ 0 ].style.color = "tomato";
  readElem[ 1 ].style.color = "blue";
  readElem[ 2 ].style.color = "green";

  // .read click event
  for( let i = 0; i < readElem.length; i++ ){
    readElem[ i ].onclick = function( event ){
      readElem[ i ].style.color = "black";
    }
  }
}