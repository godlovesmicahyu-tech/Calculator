/* 11/11/2026 2:58 */

var currentNumber = 1;

var Num1;

var Num2;

var op;

var Answer;

var $screen = $("#Screen");

var $number = $(".Number");

var Click = 1;

 $("#Clear").css('background-color', 'gray')
     $("#Equals").css('background-color', 'gray')

$number.on('click', function() 
{

    Click++;
    if(Click > 8) 
    {
   
    $("#Screen").empty();
    $("#Screen").append("Invalid Input");
    return;
    }

    var numberPressed = $(this).html();
   
    $screen.append(numberPressed);
    $("#Clear").css('background-color', '#e98527');
    if(currentNumber == 1)
    {

        if(Num1 == null) {

        Num1 = numberPressed;

        } else {

        Num1 = Num1 + numberPressed;

        } 

    }  

   if(currentNumber == 2) 
    {

        if(Num2 == null) {

            Num2 = numberPressed;

        } else {

            Num2 = Num2 + numberPressed;

        }
        $("#Equals").css('background-color', '#e98527')
    }


});

function more() 
{

    if(Click > 8){

        Click = Click - 5;   

    }
    if(currentNumber == 2) {

        findAnswer();
        $("#Screen").empty();
        $("#Screen").append(Num1);

    }
    currentNumber = 2;
}

document.getElementById("Plus").onclick = function WritePlus() 
{

    if(Num1 != null){
    more();
    $("#Screen").append("+");
    op = "+";
    }
    return;
}

document.getElementById("Minus").onclick = function WriteMinus() 
{

    if(Num1 != null){
    more();
    $("#Screen").append("-");
    op = "-";
    }

    return;
}

document.getElementById("Times").onclick = function WriteTimes() 
{
   if(Num1 != null) {
    more();
    $("#Screen").append("x");
    op = "x"
   }
   return;
}

document.getElementById("Divide").onclick = function WriteDivide() 
{
    if(Num1 != null){
    more();
    $("#Screen").append("/");
    op = "/";
    }

    return;
}

function findAnswer() 
{
    Num1 = parseInt(Num1);
    Num2 = parseInt(Num2);

    console.log(Num1, op, Num2);

    if(op == "+") 
    {
        Answer = Num1 + Num2;
    } 

    if(op == "-") 
    {
        Answer = Num1 - Num2;
    } 

    if(op == "x") 
    {
        Answer = Num1 * Num2;
    }

    if(op == "/") 
    {
        Answer = Num1 / Num2;
    }   

    Num1 = Answer;
    Num2 = null;
    currentNumber = 1;

}

$("#Equals").on('click', 

    function() 
    {
        var element = document.getElementById('Equals');
        var style = window.getComputedStyle(element);
        var backgroundColor = "background-color";
        var buttonColor =  element.style.backgroundColor;

        if(buttonColor ==  'gray'){

            return;


        }

        $("#Screen").append("=");

        findAnswer();

        /* Clean up the display; Truncate if too long */
        if(Click > 8) 
        {
            $("#Screen").empty();
            var answerLength = Answer.toString();
            Click = answerLength.length;
        }

       $("#Screen").append(Answer);
    }
)

document.getElementById("Clear").onclick = function WriteClear() 
{

$("#Screen").empty();

    Num1 = null;
    Num2 = null;
    op = null;
    Answer = null;
    currentNumber = 1;
    Click = 1;
    $("#Clear").css('background-color', 'gray')
     $("#Equals").css('background-color', 'gray')
}