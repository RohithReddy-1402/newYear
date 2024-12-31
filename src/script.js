
    setTimeout(() => {
        let img = document.getElementById('img');
        img.style.display = "none";
    }, 15000);

setTimeout(() => {
    let img1 = document.getElementById('img1');
    img1.style.display = "none";
}, 19000);
function screen(x){
    if(x.matches){
        setTimeout(() => {
            let img2 = document.getElementById('img2');
            img2.style.right = "-11%";
            img2.style.top="8.6%";    
        }, 10000);
    }else{
        setTimeout(() => {
            let img2 = document.getElementById('img2');
            img2.style.right = "38%";
            img2.style.top="-1%";    
        }, 10000);
    }

}
var x=window.matchMedia("(max-width:768px)")
screen(x);
x.addEventListener('change',function(){
    screen(x);
});