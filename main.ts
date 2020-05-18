namespace SpriteKind {
    export const circle = SpriteKind.create()
}
class circle {
    private radius:number
    private color:number
    private circle_image:Image
    private circle_sprite:Sprite
    private wh:number
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
    }
    getSprite():Sprite{
        return this.circle_sprite
    }
    getImage(): Image {
        return this.circle_image
    }

}
function add_circle():circle{
    radius = 2 * Math.randomRange(10, 30) + 1
    color_number = (color_number + 1) % 12
    let c = new circle(radius, color_number)
    let cs = c.getSprite()
    cs.vx = Math.randomRange(-100, 100)
    cs.vy = Math.randomRange(-100, 100)
    cs.setFlag(SpriteFlag.BounceOnWall, true)
    return c;
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    let c:circle = add_circle()
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    let c: circle = add_circle()
})
let color_number = -1
let radius = 0
let c:circle = add_circle()
