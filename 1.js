var result=+prompt('введите число');
if(typeof +result!=='number'){
   alert('упс, кажется вы ошиблись')
   }
else if(isNaN(+result % 2)){
  alert('is not a number')
}
else if(+result % 2 === 0){
  alert('четное')
}
else{
  alert('нечетное')
}