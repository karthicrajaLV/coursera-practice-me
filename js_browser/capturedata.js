var h1 = document.querySelector('h1')
var arr = ['Example Domain','First Click','Second Click','Third Click']
function handleclicks(){
  switch(h1.innerText){
    case arr[0]:
      h1.innerText = arr[1]
      return
    case arr[1]:
      h1.innerText = arr[2]
      return
    case arr[3]:
      h1.innerText = arr[3]
      return
    default:
      h1.innerText = arr[0]
  }
  h1.EventListener('click',handleclicks);
}