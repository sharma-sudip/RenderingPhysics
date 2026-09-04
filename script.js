const WIDTH = game.width
const HEIGHT= game.height

console.log(WIDTH)
console.log(HEIGHT)

function point({x,y}) {
const ctx = game.getContext('2d')
ctx.fillStyle = "red";
ctx.fillRect(x,y,10,10)
}

function normalize({x,y}) {
    return {
        x: WIDTH/2*(x+1),
        y: HEIGHT/2*(y+1)
    }
}

function project({x,y,z}){
    return {
        x:x/z,
        y:y/z
    }

}
point(normalize(project({x:1,y:1,z:2})))




