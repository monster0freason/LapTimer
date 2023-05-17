let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let stopp = 0;
let lapCount=0

function START() {
    stopp=1;

    function incrementCount() {
        countEl.style="color:red";
        count += 1;
        countEl.innerHTML = count + "<span>s</span>";

        if (stopp === 1) {
            setTimeout(incrementCount, 1000);
        }
        else{
            count=count-1;
            countEl.style="color:black";
            countEl.innerHTML = count + "<span>s</span>";
            
        }
    }

    incrementCount();

}

function STOP() {
    stopp = 0;
    lapCount+=1;
    saveEl.innerHTML += "{lap "+lapCount+" : "+count+" sec}"
    saveEl.textContent += " , ";
    count = 0;
    countEl.innerHTML = count + "<span>s</span>";
    
}

function RESET(){
    saveEl.innerHTML="Previous entries: ";
    lapCount=0;
}
