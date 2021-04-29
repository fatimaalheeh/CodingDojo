//Predict1
var arr = [8,6,7,5,3,0,9]//7elements
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}
/*
    OUTPUT
--------------
    8
    6
    7
    5
    3
    0
    9
T-Diagram:
Value|Variable                     |console
i     0-> 1-> 2-> 3-> 4-> 5-> 6     8
arr   [8, 6, 7, 5, 3, 0, 9]         6
                                    7
                                    5
                                    3
                                    0
                                    9
*/
//Predict2
var arr = [7,3,8,4,2,0,1];//length=7
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

/*
    OUTPUT
--------------
"That is odd!"
"That is odd!"
8
4
2
0
"That is odd!"

T-Diagram:
Value|Variable                     |console
i     0-> 1-> 2-> 3-> 4-> 5-> 6     "That is odd!"
arr   [7, 3, 8, 4, 2, 0, 1]         "That is odd!"
                                    8
                                    4
                                    2
                                    0
*/


//Predict3
var arr = [1,3,8,-5,0,-2,4,-1];//length=8
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;//if negative make it positive
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";//if 0 change it to "Zero"
    }
    else{
        arr[i] = arr[i] * -1;//if positive make it negative
    }
}
console.log(arr);
console.log(newArr);
/*
    OUTPUT
--------------
[-1, -3, -8, 5, "Zero", 2, -4, 1]//arr
[-5, -2, -1]//newArr

T-Diagram:
Value|Variable                          |console
i     0-> 1-> 2-> 3-> 4-> 5-> 6-> 7       [-1, -3, -8, 5, "Zero", 2, -4, 1]
arr   [1, 3, 8,-5, 0,-2, 4, -1]->         [-5, -2, -1]
i 0     [-1, 3, 8,-5, 0,-2, 4, -1]->
i 1     [-1,-3, 8,-5, 0,-2, 4, -1]->
i 2     [-1,-3,-8,-5, 0,-2, 4, -1]->
i 3     [-1,-3,-8, 5, 0,-2, 4, -1]->
i 4     [-1,-3,-8, 5, "Zero",-2, 4, -1]->
i 5     [-1,-3,-8, 5, "Zero", 2, 4, -1]->
i 6     [-1,-3,-8, 5, "Zero", 2,-4, -1]->
i 7     [-1,-3,-8, 5, "Zero", 2,-4,  1]
newArr  []->
i 0       
i 1
i 2        
i 3     [-5]->
i 4
i 5    [-5,-2]->
i 6
i 7    [-5,-2,-1]
*/
