
const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(names, surp){
    let message = []
    for (let i = 0; i < names.length; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${surp} gift!`);
        //console.log(message)
        //console.log(message)
    }
    return message
        //console.log(message);
        //console.log(message.length)
        //console.log(names)
        //console.log(names.length)
        
    //console.log(mes)
    //console.log(mes.length)
    //console.log(names)
    //console.log(names.length);
}

writeCards(names, "surprise")

function countDown(number){
    while(-1 < number){
        console.log(number--)
    }

}
countDown(10)