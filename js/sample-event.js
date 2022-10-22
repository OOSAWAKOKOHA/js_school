{
  //#evt_clicksをしたとき
  document.querySelector("#evt_clicks").onclick=function(){
    //#evt_clicksの文字色を変更
    document.querySelector("#evt_clicks").style.color="tomato";
  }

  //#evt_clicksをダブルクリックしたとき
  document.querySelector("#evt_clicks").ondblclick=function(){
    //#evt_clicksの不透明度を変更
    document.querySelector("#evt_clicks").style.opacity=0.5;
  }

  //#evt_mouseにマウスカーソルが乗ったとき
  document.querySelector("#evt_mouse").onmouseover=function(){
    //#evt_mouseの文字色を変更
    document.querySelector("#evt_mouse").style.color="skyblue";
  }

  //#evt_mouseにマウスカーソルが離れたとき
  document.querySelector("#evt_mouse").onmouseout=function(){
    //#evt_mouseの文字色を変更
    document.querySelector("#evt_mouse").style.color="";
  }

  //#evt_mouseにマウスカーソルが動いたとき
  document.querySelector("#evt_mouse").onmousemove=function(){
    console.log("on mouse move");
  }

  //#evt_mouseを左ボタンで押したとき
  document.querySelector("#evt_mouse").onmousedown=function(){
    //#evt_mouseの文字サイズを変更
    document.querySelector("#evt_mouse").style.fontSize="3em";
  }

  //#evt_mouseを左ボタンで離したとき
  document.querySelector("#evt_mouse").onmouseup=function(){
    //#evt_mouseの文字サイズを変更
    document.querySelector("#evt_mouse").style.fontSize="";
  }

  //#evt_focusがフォーカスされたとき
  document.querySelector("#evt_focus").onfocus=function(){
    //#evt_focusの枠を変更
    document.querySelector("#evt_focus").style.outline="2px solid pink";
    document.querySelector("#evt_focus").style.border="1px solid brown";
  }

  //#evt_focusのフォーカスが離れた(blur)とき
  document.querySelector("#evt_focus").onblur=function(){
    //#evt_focusの枠を変更
    document.querySelector("#evt_focus").style.outline="";
    document.querySelector("#evt_focus").style.border="";
  }

  //#evt_transitionのフォーカスが離れた(blur)とき
  document.querySelector("#evt_transition").ontransitionend=function(){
    document.querySelector("#evt_transition+p").style.color="green"
  }

  //#evt_changeが変更されたとき
  //changeの場合
  document.querySelector("#evt_change").onchange=function(){
    document.body.style.background=document.querySelector("#evt_change").value;
  }
  //inputの場合
  document.querySelector("#evt_change").oninput=function(){
    document.body.style.background=document.querySelector("#evt_change").value;
  }
}
