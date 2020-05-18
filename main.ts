namespace SpriteKind {
    export const circle = SpriteKind.create()
}
class circle{
    public radius:number
    public color:number
    private _circle_image:Image
    private _circle_sprite:Sprite
    private _wh:number
    constructor(radius:number, color:number, 
                x:number = screen.width/2, 
                y:number=screen.height/2){
        this.radius = radius
        this.color = color
        this._wh = this.radius/2
        this._circle_image = image.create(this._wh,this._wh)
        this._circle_image.drawCircle(x, y, this.radius, this.color)
        this._circle_sprite = sprites.create(this._circle_image,SpriteKind.circle)
    }
}
