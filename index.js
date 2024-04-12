const body = document.querySelector("body")

body.addEventListener("mousemove",(event)=>{
    console.log("mouse moved");
    const posX = event.offsetX;
    const posY = event.offsetY;
    const span = document.createElement("span")
    span.style.left = posX + "px"
    span.style.top  = posY + "px"
    const size = Math.random()*50;
    span.style.width = size + "px"
    span.style.height = size + "px"
    body.appendChild(span);
    setTimeout(()=>{
        span.remove()
    },2000)
})