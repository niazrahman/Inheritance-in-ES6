
//Parent Class
class Shape{
    constructor(color){
        this.color = color
    }
    draw(){
        console.log('Drawing..')
    }
}


// Rectangle inherite Shape
class Rectangle extends Shape{
    constructor (color,height, width){
        super(color)   /*call super method to get access in Shape's property*/
        this.height = height  
        this.width = width
    }

    calculate (){
        return this.height * this.width
    }
}

// Circle inherite Shape

class Circle extends Shape{
    constructor (color,radius){
        super(color)  /*call super method to get access in Shape's property*/
    
        this.radius = radius
    }

    area (){
        console.log('I am the area of this circle')
    }
}

// create new rectangle object
let r1 = new Rectangle('Green',10,8)
r1.draw()
let res = r1.calculate()
console.log(res)
console.log(r1)


// create new circle object 
let c1 = new Circle('Yellow',3.5345)
c1.draw()
c1.area()
console.log(c1)