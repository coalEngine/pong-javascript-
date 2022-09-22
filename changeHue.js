let lastTime;
function Update(time)
{
    if (lastTime != null)
    {
        const delta = time - lastTime;
        //Changes the Hue
        const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))
        document.documentElement.style.setProperty("--hue", hue + delta * .01) 
    }
    lastTime = time
    window.requestAnimationFrame(Update);
}

window.requestAnimationFrame(Update);