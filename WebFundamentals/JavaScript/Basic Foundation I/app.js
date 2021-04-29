//1.Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
var arr=[];
for(var i=1;i<=255;i++)
{
    arr.push(i);
}
console.log(arr);
//2.Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function EvenThousand()
{
    var sum=0;
    for(var i=1;i<=1000;i++)
    if(i%2==0)
    {
       sum+=i;
    }
    return sum;
}
console.log(EvenThousand());
console.log(EvenThousand());
//3.Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function OddFiveThousand()
{
    var sum=0;

for(var i=1;i<=5000;i++)
{
    if(i%2!=0)
    {
        sum+=i;
    }
   
}
 return sum;
}
console.log(OddFiveThousand());
//4.Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumOfGivenArray(arr)
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}
var ar=[1,2,3]
console.log(sumOfGivenArray(ar));
//5.Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function maxOfGivenArray(arr)
{
    var max=arr[0];
    for(var i=1;i<arr.length;i++)
    {
        if(max<arr[i])
        {
            max=arr[i];
        }
    }
    return max;
}
var ar=[1,2,3];
console.log(maxOfGivenArray(ar));
//6.Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function overAge(arr)
{
    var sum=0;
    
    for(var i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    var Average=sum/arr.length;
    return Average
    }
var ar=[10,34,76,29];
console.log(overAge(ar));
//7.Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function ArrayOdd()
{
    var tempArray=[];
    for(var i=1;i<=50;i++)
    {
        if(i%2!=0)
        {
            tempArray.push(i);
        }
    }
    return tempArray;
}

console.log(ArrayOdd());
//8.Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function GreaterThanY(y,arr)
{
    var countGreaterThanY=0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>y)
        {
            countGreaterThanY++;
        }
    }
    return countGreaterThanY;
}
var ar = [1,2,4];
var y=3;
console.log(GreaterThanY(y,ar));
//9.Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function ArraySquares(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        arr[i]*=arr[i];
    }
    return arr;
}
var ar=[2,3,11,34];
console.log(ArraySquares(ar));

//10.Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function negativeToZero(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]<0)
        {
            arr[i]=0;
        }
    }
    return arr;
}
var ar=[1,-4,6,8,-5,-2-3,0,9,3];
console.log(negativeToZero(ar));

//11.Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function MaxMinAvgOfArray(arr)
{
    var sum=0;
    var max=arr[0];
    var min=arr[0];
    var average=0;
    var finalArr=[];
    for(var i=0;i<arr.length;i++)
    {
        sum+=arr[i];
        if(max>arr[i])
        {
            max=arr[i];
        }
        else
        {
            min=arr[i];
        }
    }
    average=sum/arr.length;
    finalArr.push(max,min,average);
    return finalArr;
}
ar=[-1,0,6,3,5,-2,7,3];
console.log(MaxMinAvgOfArray(ar))
    
//12.Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function SwapArrayFirstWithLast(arr)
{
    var x=arr[arr.length-1];
    var y=arr[0];
		arr[arr.length-1]=y;
    arr[0]=x;
    return arr;
}
var ar=[1,2,3,4,5];
console.log(SwapArrayFirstWithLast(ar));
//13.Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function NegativeToDojoString(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]<0)
        {
            arr[i]="Dojo";
        }
    }
    return arr;
}
var ar =[-1,-2, 5,4];
console.log(NegativeToDojoString(ar));