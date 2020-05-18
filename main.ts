namespace SpriteKind {
    export const circle = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    let e: circle = add_circle()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    let d:circle = add_circle()
})
let radius = 0
class circle {
    private radius:number
    private color:number
    private circle_image:Image
    private circle_sprite:Sprite
    private wh:number
    private name:string
    constructor(radius:number, color:number, 
                x:number = 80, 
                y:number= 40){
        this.radius = radius
        this.color = color
        this.wh = 2 * this.radius + 1
        this.circle_image = image.create(this.wh,this.wh)
        this.circle_image.drawCircle(this.radius, this.radius, this.radius, this.color)
        this.circle_sprite = sprites.create(this.circle_image,SpriteKind.circle)
        this.circle_sprite.x = x
        this.circle_sprite.y = y
        this.name = ""
    }
    get Sprite(){
        return this.circle_sprite
    }
    get Image(){
        return this.circle_image
    }
    get Color(): number{
        return this.color
    }
    set Color(value:number){
        this.color = value;
        this.circle_image.drawCircle(this.radius, this.radius, this.radius, this.color)
    }
    set Name(value:string){
        this.name = value;
    }
    get Name():string{
        return this.name
    }
}
function add_circle():circle{
    radius = 2 * Math.randomRange(10, 30) + 1
    color_number = (color_number + 1) % 12 + 1
    let c = new circle(radius, color_number)
    let cs = c.Sprite()
    cs.vx = Math.randomRange(-100, 100)
    cs.vy = Math.randomRange(-100, 100)
    cs.setFlag(SpriteFlag.BounceOnWall, true)
    info.changeScoreBy(1)
    return c;
}
let color_number = 0
let f:circle = add_circle()
pause(5000)
f.Color= 10
