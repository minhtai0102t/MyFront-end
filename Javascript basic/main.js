//hand make array method
var myArray = [
    {
        name: 'tai',
        id:'222',
        isFinish: false
    },
    {
        name: 'tho',
        id:'223',
        isFinish: false
    },
    {
        name: 'tri',
        id:'224',
        isFinish: true
    }
]

var myArray2 = new Array(10);


Array.prototype.every2 = function(callback){
    var output = true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],index,this);
        }
        if(!result){
            output = false;
            break;
        }
    }
    return output;
}

Array.prototype.some2 = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)){
                return true;
            }

        }
    }
    return false;
}

Array.prototype.filter2 = function(callback){
    var output = [];
    for(var i in this){
        if(this.hasOwnProperty(i)){
            var result = callback(this[i],i,this);
            if(result){
                output.push(this[i]);
            }
        }
    }
    return output;
}

Array.prototype.forEach2 = function(callback){
    for(var i in this){
        if(this.hasOwnProperty(i)){
            var result = callback(this[i],i,this);
        }
    }
}





function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    });
}
var i = 1;
sleep(2000)
    .then(function(){
        console.log(i++);
        return sleep(2000);
    })
    .then(function(){
        console.log(i++);
        return sleep(2000);
    })

    .then(function(){
        console.log(i++);
        return sleep(2000);
    })

    var postApi = 
    'https://jsonplaceholder.typicode.com/posts';


    fetch(postApi)
    .then(function(response){
        return response.json();//Response return JSON:.json() => Javascript
    })
    .then(function(data){
        var htmls = data.map(function(value){
            return `<li>
            <h2>${value.title}</h2>
            <p>${value.body}</p>
            </li>`
        })
        document.getElementById('postContent').innerHTML = htmls;
    })

    //...:rest , spread
    class Course{
        constructor(name,price){
            this.name = name;
            this.price = price;
        }
    }