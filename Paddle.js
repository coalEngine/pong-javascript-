const COM_SPEED = .009;
export default class Paddle {
    constructor(PaddleElm){
        this.PaddleElm = PaddleElm
        this.reset();
    }

    get position(){
        return parseFloat(getComputedStyle(this.PaddleElm).getPropertyValue("--position"))
    }

    set position(value){
        this.PaddleElm.style.setProperty("--position", value)
    }

    rect(){
        return this.PaddleElm.getBoundingClientRect()
    }

    reset(){
        this.position = 50;
    }

    Update(delta, ballHeight)
    {
        this.position += COM_SPEED * delta * (ballHeight - this.position)
    }
}