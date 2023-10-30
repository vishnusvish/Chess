
//     function getcoin(num){
//        console.log(num);
//    }



var chessElements = document.getElementsByClassName("chessboard");
var coinElement = "";
var firstClick = 0;


function getcoin(num, index) {
        if (!firstClick) {

                coinElement = document.getElementById(chessElements[index].firstChild.id);

                chessElements[index].removeChild(coinElement);

        }
        else {
                if (chessElements[index].firstChild) {
          let strikeElement = document.getElementById(chessElements[index].firstChild.id);
          chessElements[index].removeChild(strikeElement);

                }
                chessElements[index].appendChild(coinElement);
        }
        firstClick = !firstClick

}


