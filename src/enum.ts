enum man{
    up,
    down,
    left,
    rigth
}

function dosomething(keypress:man):void{
    console.log(keypress)
}

dosomething(man.rigth)
enum man2{
    up=1,
    down,
    left,
    rigth
}

function dosomething2(keypress:man2):void{
    console.log(keypress)
}

dosomething2(man2.rigth)
console.log(man.down)
console.log(man.rigth)
// enum Direction {
//     Up = "UP",
//     Down = "Down",
//     Left = "Left",
//     Right = 'Right'
// }

// function doSomething(keyPressed: Direction) {
// 	// do something.
// }

// doSomething(Direction.Down)



// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })