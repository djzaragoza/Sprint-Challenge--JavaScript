// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height) {
//     this.length = length
//     this.width = width
//     this.height = height
// }


// CuboidMaker.prototype.volume = function () {
//     return this.length * this.width * this.height
// }
class volume {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
}

// CuboidMaker.prototype.surfaceArea = function () {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
// }

class surfaceArea {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }   

    calcSurfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
    calcVolume() {
        return this.length * this.width * this.height
    }

}


     
const square = new volume(4, 5, 5);

const cuboid = new surfaceArea(4, 5, 5)


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.calcVolume()); // 100
console.log(cuboid.calcSurfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.