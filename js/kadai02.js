{
  //documentのマウスムーブイベント
  document.onmousemove = function( event ) {
    console.log( event );
    //クライアント座標
    //#client-xにクライアントのx座標
    document.querySelector( "#client-x" ).value = event.clientX;
    //#client-yにクライアントのx座標
    document.querySelector( "#client-y" ).value = event.clientY;

    //スクリーン座標
    //#screen-xにスクリーンのx座標
    document.querySelector( "#screen-x" ).value = event.screenX;
    //#screen-yにスクリーンのy座標
    document.querySelector( "#screen-y" ).value = event.screenY;

    //グローバル座礁
    //#global-xにグローバルのx座標
    document.querySelector( "#global-x" ).value =
    document.documentElement.scrollLeft + event.clientX;
    //#global-yにグローバルのy座標
    document.querySelector( "#global-y" ).value =
    document.documentElement.scrollTop + event.clientY;

  }//end mousemove
}