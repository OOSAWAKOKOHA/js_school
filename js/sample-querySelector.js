{
        /*
                タグの操作
                １・タグを探す
                ２・探してきたタグに命令

                document.querySelector("cssセレクタ");
                (ドキュメント・文書.機能・メソッド("探す対象の指定");)
                -> 指定されたcssセレクタに一致するタグ(エレメント)をひとつ(最初にあるもの)返す...ちょっと複雑なところで使う
                -> もし、対象がなかった場合は、null(ない)を返す。
        */


        //タグを１つ探す
        //document.querySelector("cssセレクタ");
        console.log(document.querySelector("h1"));



        /*
                ID名でタグを探す

                document.getElementById("IDの名前");
                -> 指定されたID名と一致するタグを１つ返す
        */




        /*
                Element.style.cssプロパティ名
                (タグ情報.プロパティ.cssプロパティ名.)
                -> タグのstyleプロパティを使って、見た目を操作できる
                -> cssプロパティ名はJSの書き方

                JSの命名ルール
                ・キャメルケース(ローリー)
                -> 単語同士の組み合わせは、先頭大文字

                cssの命名ルール
                ・ケバブケース
                -> 単語同士の組み合わせは、-(ハイフン)
        */

        //#txt1のスタイルを操作
        document.querySelector("#txt1").style.color="tomato";
        document.querySelector("#txt1").style.fontSize="28px";


        //#btn_txt2をクリックしたときに#txt2のスタイルを変更する
        //スタイル：文字色 境界線 内余白

        document.querySelector("#btn_txt2").onclick=function(){

                //#set_colorの入力内容を文字色に使う
                console.log(document.querySelector("#set_color").value);

                //実行ボタンを押すと#txt2のスタイルが変わる
                document.querySelector("#txt2").style.color=document.querySelector("#set_color").value;
                document.querySelector("#txt2").style.border="solid 2px #00A5A5";
                document.querySelector("#txt2").style.padding="10px";
        }
}