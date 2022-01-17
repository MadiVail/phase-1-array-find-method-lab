// code your solution here

function isWin(element){
    return element.result === 'W';
}

function superbowlWin(array) {
    const Obj = array.find(isWin);
    if(Obj){
        return Obj.year;
    }
}