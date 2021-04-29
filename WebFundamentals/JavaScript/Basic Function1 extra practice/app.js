//practice1
function a(){
    return 35;
}
console.log(a())
/*
    OUTPUT
--------------
35
--------------
T-Diagram:
console        |a()
console.log <-  return 35
*/



//practice2
function a(){
    return 4;
}
console.log(a()+a());
/*
    OUTPUT
--------------
8
--------------
T-Diagram:
console        |a()
a()        <-  return 4
a()        <-  return 4
------------------
console
4
4+4
8     
*/





//practice3
function a(b){
    return b;
}
console.log(a(2)+a(4));
/*
    OUTPUT
--------------
6
--------------
T-Diagram:
var |val            |a()         console
b    2->4           return 2        2
a()  2->4           return 4        4
                                    2+4->8
*/

//practice4
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
/*
    OUTPUT
--------------
6
--------------
T-Diagram:
var |val        console
a()  3->9        3
b    3           9
*/

//practice5
function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));
/*
OUTPUT
--------------
6
--------------
T-Diagram:
var |val        console
a()  10->40        10
b    10            40
*/


//practice6
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
/*
OUTPUT
--------------
6
--------------
T-Diagram:
var |val        console
a()  4             15
b    15            4
*/





//practice(7)
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
/*
OUTPUT
--------------
10
3
30
--------------
T-Diagram:
var |val        console
b    3            10
c    10           3
a()  10*3=30      30 
*/





//practice8
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
/*
OUTPUT
--------------
3
4
--------------
T-Diagram:
var |val        console
    3           3
    4           4
*/




//practice9
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
/*
OUTPUT
--------------
2
4
6
8
--------------
T-Diagram:
var |val        console
i   0->2          2
    2->4          4
    4->6          6
    6->8          8
    8->10
    
*/




//practice10
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
/*
OUTPUT
--------------a(0,10):
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
--------------
T-Diagram:
var     |val        console
a       0
b       10
i       0              0
        0->1           1
        1->2           2
        2->3           3
        3->4           4
        4->5           5
        5->6           6
        6->7           7
        7->8           8
        8->9           9
        9->10
-------------------console.log(a(0,10)):
a       0
b       10
i       0              0
        0->1           1
        1->2           2
        2->3           3
        3->4           4
        4->5           5
        5->6           6
        6->7           7
        7->8           8
        8->9           9
        9->10
a(10,0) 0              0
*/




//practice11
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
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
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9 
0
1
2
3
4
5
6
7
8
9
--------------
T-Diagram:
var| val
i   0------------------------->   1------------------------->   2------------------------->     3------------------------->     4------------------------->     5------------------------->     6------------------------->     7------------------------->     8------------------------->9
j   0->1->2->3->4->5->6->7->8->9  0->1->2->3->4->5->6->7->8->9  0->1->2->3->4->5->6->7->8->9    0->1->2->3->4->5->6->7->8->9    0->1->2->3->4->5->6->7->8->9    0->1->2->3->4->5->6->7->8->9    0->1->2->3->4->5->6->7->8->9    0->1->2->3->4->5->6->7->8->9    0->1->2->3->4->5->6->7->8->9
i |j
------------------------

0 |0 1 2 3 4 5 6 7 8 9
1 |0 1 2 3 4 5 6 7 8 9
2 |0 1 2 3 4 5 6 7 8 9
3 |0 1 2 3 4 5 6 7 8 9
4 |0 1 2 3 4 5 6 7 8 9
5 |0 1 2 3 4 5 6 7 8 9
6 |0 1 2 3 4 5 6 7 8 9
7 |0 1 2 3 4 5 6 7 8 9
8 |0 1 2 3 4 5 6 7 8 9
9 |0 1 2 3 4 5 6 7 8 9
*/




//practice12
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//nothing because the function call is missing,
//but assume we have -a();-
/*
OUTPUT
--------------
0,1
0,2
0,3
0,4
0,5
0,6
0,7
0,8
0,9
10,0
1,0
1,1
1,2
1,3
1,4
1,5
1,6
1,7
1,8
1,9
10,1
2,0
2,1
2,2
2,3
2,4
2,5
2,6
2,7
2,8
2,9
10,2
3,0
3,1
3,2
3,3
3,4
3,5
3,6
3,7
3,8
3,9
10,3
4,0
4,1
4,2
4,3
4,4
4,5
4,6
4,7
4,8
4,9
10,4
5,0
5,1
5,2
5,3
5,4
5,5
5,6
5,7
5,8
5,9
10,5
6,0
6,1
6,2
6,3
6,4
6,5
6,6
6,7
6,8
6,9
10,6
7,0
7,1
7,2
7,3
7,4
7,5
7,6
7,7
7,8
7,9
10,8
8,0
8,1
8,2
8,3
8,4
8,5
8,6
8,7
8,8
8,9
10,8
9,0
9,1
9,2
9,3
9,4
9,5
9,6
9,7
9,8
9,9
10,9
--------------
T-Diagram:
var |val                                console
i   0->1->2->3->4->5->66->7->8->9
j   0->1->2->3->4->5->6->7->8->9->10
(j,i) shown up
(i,j) shown up
*/



//practice13
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
/*
OUTPUT
--------------
10
--------------
T-Diagram:
var |val        console
z   10          10
*/


//practice14
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
/*
OUTPUT
--------------
15
10
--------------
T-Diagram:
var |val        console
a()   15          15
z     10          10
*/



//practice15
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
/*
OUTPUT
--------------
15
15
--------------
T-Diagram:
var |val            console
a()   15              15
z     10->15          15
*/
