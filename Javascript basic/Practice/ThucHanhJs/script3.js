// Bài 1
function reverse(x){
    if(typeof (x) != 'string'){
        console.log("Giá trị truyền vào phải là 1 chuỗi");
        return null;
    } 
    let result = [];
    for(var i = 0;i<x.length;i++){
        result[i] = x[x.length - i - 1];
    }
    return result.join("");
}
console.log(reverse("abcde"));  
// Bài 2
function sortByAlp(x){
    if(typeof (x) != 'string'){
        console.log("Giá trị truyền vào phải là 1 chuỗi");
        return null;
    } 
    var result = x.split("");
    result.sort();
    return result.join("");
}
console.log(sortByAlp("nchaa"));
// Bài 3
function upperFirstLetter(x){
    if(typeof (x) != 'string'){
        console.log("Giá trị truyền vào phải là 1 chuỗi");
        return null;
    } 
    var temp = x;
    var result = [];
    result.push(temp.charAt(0).toUpperCase());
    for(var i = 1;i < temp.length; i++){
        if(temp[i]==" "){
            result.push(temp.charAt(i));
            result.push(temp.charAt(i+1).toUpperCase());
            i++;
        }
        else{
            result.push(temp[i]);
        }
    }
    return result.join("");
}
console.log(upperFirstLetter("the fast brown fox"));

//Bài 4
function longestWord(x){
    if(typeof (x) != 'string'){
        console.log("Giá trị truyền vào phải là 1 chuỗi");
        return null;
    } 
    var result = x.split(" ");
    var max = result[0].length;
    var pos = 0;
    for(var i = 1;i < result.length; i++){
        if(result[i].length > max){
            max = result[i].length;
            pos = i;
        }
    }
    return result[pos];
}
console.log(longestWord("Web Development Tutorial"));

// Bài 5
function checkPrime(x){
    if(typeof (x) != 'number'){
        console.log("Giá trị truyền vào phải là 1 số");
        return null;
    } 
    for(var i = 2; i <= Math.sqrt(x); i++){
        if(x % i==0){
            return false;
        }
    }
    return true;

}
console.log(checkPrime(13));

// Bài 6
function printMultiplicationTable(x){
    if(typeof (x) != 'number'){
        console.log("Giá trị truyền vào phải là 1 số");
        return null;
    } 
    for(var i = 1; i <= 10;i++){
        console.log(x + "*" + i + "="+ x*i);
    }
}
printMultiplicationTable(3);

//Bài 7
function sortArray(a){
    if(typeof a[0] == "string"){
        return a.sort();
    }
    return a.sort(function(a,b){
        return a-b;        
    });
}
console.log(sortArray([23,11,333,5,6]));


//Baì 8
function findMaxNumber(x){
    for(var i = 0;i < x.length; i++){
        if(typeof x[i] != "number"){
            console.log("Mảng truyền vào phải chứa các phần tử kiểu số");
            return null;
        }
    }
    var max = x[0];
    for(var i = 1;i < x.length; i++){
        if(x[i] > max){
            max = x[i];
        }
    }
    return max;
} 
console.log(findMaxNumber([44,123,555,2,-1123,2000]));
