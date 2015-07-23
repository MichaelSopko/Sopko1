/**
 * Created by Michael on 23.07.2015.
 */
function randomRang(min,max){
    return Math.floor(Math.random()*(max - min+1) + min);
}
for(var i=0; i <= 10; i++) {
    console.log(randomRang(10, 20));
}