let count = 0;


document.getElementById("click").addEventListener("click",function(){
    count++;
    if (count>1){
        return;
    }
    console.log("clicked" + count + " times")
});