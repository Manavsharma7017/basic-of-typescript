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