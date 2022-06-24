const log = console.log
const gameBoard = function (){
  let a = 0
  let body =  document.querySelector('body')
  let container = document.createElement('div')
  container.classList.add('container')
  body.appendChild(container)
  for(let i = 0; i < 9; i++){
      let div = document.createElement('div')
      div.classList.add('box')
      container.appendChild(div)
  }
  
  const playerOne = container.addEventListener('click', function(e){
        if(a === 0){
            if(e.target.classList.contains('box')){
                e.target.classList.add('x')
                e.target.classList.remove('box')
                e.target.innerHTML = '<img class="img" src="https://texas.thefootballbrainiacs.com/wp-content/uploads/2016/01/X.jpg">'
                a = a + 1
                log(a)
            }
        } else if(a === 1){
            if(e.target.classList.contains('box')){
                e.target.classList.add('o')
                e.target.classList.remove('box')
                e.target.innerHTML = '<img class="img" class="img-o" src="https://imgprd19.hobbylobby.com/6/f0/3c/6f03cacf1a6d78abcaa8e3655485f2f7c52978fe/700Wx700H-192948-0320-px.jpg">'
                a = a - 1
            }
        }
    })

    const playGame = function(){
            playerOne
    }
  return{playGame}
}
gameBoard().playGame()

