var fruits =["apple", "greenapple", "grapes", "guava", "pineapple"];

// var enterIndex = document.getElementById('arrindex').value;//index number for the indexof to be placed in a array


fruit();

function dropMenu(){
    var dropMenuValue = document.getElementById('drop').value;
    switch(dropMenuValue){
        case 'front':
            console.log("front");
            break;
        case 'back':
            console.log("back");
            break;
        case 'indexNumber':
            var enterIndex = document.getElementById('arrindex');//index number for the indexof to be placed in a array
            enterIndex.style.display = "block";
            var index = enterIndex.value //numbere 0-5 indexNumber
        default:
            break;
    }
}

function addFruit(){
    var NameofFruit = document.getElementById("fruitName").value;//first input fruit name
    if(NameofFruit!=0){
        var dropMenuValue = document.getElementById('drop').value;
        
        switch(dropMenuValue){
            case 'front':
               document.getElementById('fruitList').textContent = '';
               NameofFruit.value = '';
               dropMenuValue.value ='';
               fruits.unshift(NameofFruit);
               fruit();
                break;
            case 'back':
                document.getElementById('fruitList').textContent = '';
                NameofFruit.value = '';
                dropMenuValue.value ='';
                fruits.push(NameofFruit);
                fruit();
                 break;
            case 'indexNumber':
                document.getElementById('fruitList').textContent = '';
                NameofFruit.value = '';
                dropMenuValue.value ='';
                var enterIndex = document.getElementById('arrindex');//index number for the indexof to be placed in a array
                enterIndex.style.display = "block";
                var index = enterIndex.value //numbere 0-5 indexNumber
                fruits[index] = NameofFruit;
                fruit(); 
                

                
            default:
                break;   
        }   
    }
}


// function empting(){
//     document.getElementById('fruitList').innerHTML = '';
//     NameofFruit.value ='';
//     dropMenuValue.value = '';
// }


function fruit(){//<li>fruits array will be display one by one </li>
    var fLen = fruits.length;
   
    for(var i=0; i< fLen; i++){
        var newDiv = document.createElement('li');
        var newContent = document.createTextNode(fruits[i]);
        newDiv.appendChild(newContent); 
        document.getElementById('fruitList').appendChild(newDiv);
    }

}