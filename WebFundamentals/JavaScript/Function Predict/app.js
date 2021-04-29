//Predict1
function greeting(){
        return "Hello";
        console.log("World");
    }
    var word = greeting();
    console.log(word);
/*
    OUTPUT
--------------
"Hello"

T-Diagram:
Value|Variable                          |console
word   greetings()                        Hello                                  
*/


//Predict2
    function add(num1, num2){
            console.log("Summing Numbers!");
            console.log("num1 is: " + num1);
            console.log("num2 is: " + num2);
            var sum = num1 + num2;
            return sum;
        }
        var result1 = add(3,5);
        var result2 = add(4,7);
        console.log(result1);
        console.log(result2);
/*
    OUTPUT
--------------
"Summing Numbers!"
"num1 is: 3"
"num2 is: 5"
"Summing Numbers!"
"num1 is: 4"
"num2 is: 7"
8
11

T-Diagram:
Value     |Variable                        |console
result1   add(3,5)                          "Summing Numbers!"
                                            "num1 is: 3"
                                            "num2 is: 5"
result2   add(4,7)                          "Summing Numbers!"
                                            "num1 is: 4"
                                            "num2 is: 7"
result1                                     8
result2                                     11
*/


//Predict3
//nothing because there is no function call nor assigned values, but if we:
//assume  num=10:
        function highFive(num){
                for(var i=0; i<num; i++){
                    if(i == 5){
                        console.log("High Five!");
                    }
                    else{
                        console.log(i);
                    }
                }
            }

/*
    OUTPUT
--------------
0
1
2
3
4
"High Five!"
6
7
8
9

T-Diagram:
Value|Variable                                                     |console
i     0->1->2->3->4->5->6->7->8->9                                  0
i        1                                                          1
i           2                                                       2
i              3                                                    3
i                 4                                                 4
i                    5 ----------------------------------------"High Five!"
i                       6                                           6
i                          7                                        7
i                             8                                     8
i                                9                                  9
*/