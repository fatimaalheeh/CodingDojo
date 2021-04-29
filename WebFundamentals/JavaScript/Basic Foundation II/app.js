//1.Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>0)
        {
            arr[i]="big";
        }
    }
    return arr;
}
var ar=[-1,3,5,-5];
console.log(makeItBig(ar));
//2.Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function PrintLowReturnHigh(arr)
{
var max=arr[0]; 
var min=arr[0];
for(var i=0;i<arr.length;i++)
{
    if(max<arr[i])
    {
        max=arr[i];
    }
    else    {
        min=arr[i];
    }
}
console.log(min);
return max;
}
var ar=[-1,3,5,-5];
console.log(PrintLowReturnHigh(ar));

//3.Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function PrintOneReturAnother(arr)
{
    var OddArr=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            OddArr.push(arr[i]);
        }
    }
    console.log(arr.length-2);//print second-to-last
    return OddArr[0];//return first odd
}
var ar=[2,8,5,4];
console.log(PrintOneReturAnother(ar));
//4.Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function DoubleVision(arr)
{
for(var i=0;i<arr.length;i++)
{
    arr[i]*=2;
}
return arr;
}
var ar=[2,8,5,4];
    console.log(DoubleVision(ar));
//5.Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPositives(arr)
{
    var PositivesCounter=0;
for(var i=0;i<arr.length;i++)
{
    if(arr[i]>0)
    {
        PositivesCounter++;
    }

}
arr.pop();
arr.push(PositivesCounter);
return arr;
}
var ar=[-1,1,1,1];
    console.log(countPositives(ar));
//6.Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
// function EvensAndOdds(arr)
// {   var OddCouner=0;
//     var EvenCounter=0;
  
//     for(var i=0;i<arr.length;i++){
//        if(OddCounter<3)
//        {
//         if(arr[i]%2!=0)
//         {
//             OddCounter++
//         }
//         else
//         {
//             console.log("That's odd!");    
//         }
//         if(arr[i]%2==0)
//         {
//             EvenCounter++
//         }
//         else
//         {
//             console.log("That's Even!");    
//         }

//        }
//     }


// }
// var ar=[-1,1,1,1];
//     console.log(EvensAndOdds(ar));
function EvensAndOdds(arr)
{
for(var i=0;i<arr.length;i++){
if(arr[i] % 2 !==0){//first odd
    if(arr[i+1] % 2 !==0){//second odd
        if(arr[i+2] % 2 !==0){//third odd
            console.log("That's odd!");
    }
    }
}
if(arr[i] % 2 == 0){//first even
    if(arr[i+1] % 2 == 0){//second even
        if(arr[i+2] % 2 == 0){//third even
            console.log("Even more so!");
    }
    }
}
}
}
var ar=[1,2,3,7,9,8,2,4];
console.log(EvensAndOdds(ar));


//7.Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function IncrementSeconds(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(i%2!=0)
        {
            arr[i]+=1;
        }
        console.log(arr[i]);
    }
    return arr;
}
var ar=[1,2,3,7,9,8,2,4];
console.log(IncrementSeconds(ar));
//8.Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function PreviousLengths(arr)
{
    for(var i=arr.length;i>0;i--)
    {
        arr[i]=ar[i-1].length;
    }
    return arr;
}
var ar=["hello", "dojo", "awesome"];
console.log(PreviousLengths(ar));
//9.Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function AddSeven(arr){
    var TempArr = [];
    for(var i=1;i<arr.length;i++){
        TempArr.push(arr[i]+7);
    }
    return TempArr;
}

var ar=[1,2,3,7,9,8,2,4];
console.log(AddSeven(y));
//10.Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function ReverseArray(arr)
    { 
    var tempindexRT;
    var tempindexLT
    for(var i=0;i<arr.length/2;i++)
    {
    tempindexLT=arr[i];
    tempindexRT=arr[arr.length-1-i];
    arr[arr.length-1-i]=tempindexLT;
    arr[i]=tempindexRT;
    }
    return arr;
    }
    var ar= [3,1,6,4,2,8,9];
    console.log(ReverseArray(ar));
//11.Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function OutlookNegatives(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>0)
        {
            arr[i]*=-1;
        }
    }
    return arr;
}
var ar=[1,-3,5];
console.log(OutlookNegatives(ar));

//12.Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function AlwaysHungry(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]=="food")
        {
            console.log("yummy");
        }
        else
        {
            console.log("I'm hungry");
            
        }
    }
    
}
var ar= ["food","no food","food","no food"];
console.log(AlwaysHungry(ar));
//13.Swap Toward the Center - Given an array, swap the first and last values,
//third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"])
//turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array
//into [6,2,4,3,5,1].  No need to return the array this time.

function swapTowardCenter(arr) {
    var tmpArr = [];
    var tmpValue=arr[ Math.floor(arr.length / 2)];
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
        var templeft = arr[i];
        var tempright = arr[arr.length - 1 - i];
        tmpArr.push(tempright);
        tmpArr.push(templeft);
    
    }
    if(arr.length%2!=0)
    {
    tmpArr.push(tmpValue);
    }
    return tmpArr;
    }
    
  var ar = [1, -3, 5, 4, 6]; //[6, 1, 4, -3, 5]
  //var ar = [1, -3, 5, 4, 6,7]; //[6, 1, 4, -3, 5]
   //[6, 1, 4, -3, 5]
    console.log(swapTowardCenter(ar));
    

//14.Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function ArrayScale(arr, num)
{
    for(var i=0;i<arr.length;i++)
    {
        arr[i]*=num;
    }
    return arr;
}
var ar=[1,2,3];
var num= 3;
console.log(ArrayScale(ar,num));