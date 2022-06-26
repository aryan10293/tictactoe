const log = console.log
const gameBoard = function (){
  let a = 0
  let b = 0
  let body =  document.querySelector('body')
  let container = document.createElement('div')
  container.classList.add('container')
  body.appendChild(container)
  for(let i = 0; i < 9; i++){
      let div = document.createElement('div')
      div.classList.add('box')
      div.setAttribute('id', 'box')
      container.appendChild(div)
  }
  const winGame = function(){
    const x = 'user x has won the game'
    const o = 'user o has won the game'
    if((box[0].classList.contains('x') && box[1].classList.contains('x') && box[2].classList.contains('x') ) === true){
        alert(x)
    } else if((box[0].classList.contains('o') && box[1].classList.contains('o') && box[2].classList.contains('o') ) === true){
        alert(o)
    } else if((box[4].classList.contains('o') && box[3].classList.contains('o') && box[5].classList.contains('o') ) === true){
        alert(o)
    } else if((box[4].classList.contains('x') && box[3].classList.contains('x') && box[5].classList.contains('x') ) === true){
        alert(x)
    } else if((box[7].classList.contains('o') && box[8].classList.contains('o') && box[6].classList.contains('o') ) === true){
        alert(o)
    } else if((box[7].classList.contains('x') && box[8].classList.contains('x') && box[6].classList.contains('x') ) === true){
        alert(x)
    } else if((box[0].classList.contains('o') && box[3].classList.contains('o') && box[6].classList.contains('o') ) === true){
        alert(o)
    } else if((box[0].classList.contains('x') && box[3].classList.contains('x') && box[6].classList.contains('x') ) === true){
        alert(x)
    } else if((box[1].classList.contains('o') && box[4].classList.contains('o') && box[7].classList.contains('o') ) === true){
        alert(o)
    } else if((box[1].classList.contains('x') && box[4].classList.contains('x') && box[7].classList.contains('x') ) === true){
        alert(x)
    } else if((box[2].classList.contains('o') && box[5].classList.contains('o') && box[8].classList.contains('o') ) === true){
        alert(o)
    } else if((box[2].classList.contains('x') && box[5].classList.contains('x') && box[8].classList.contains('x') ) === true){
        alert(x)
    } else if((box[2].classList.contains('o') && box[4].classList.contains('o') && box[6].classList.contains('o') ) === true){
        alert(o)
    } else if((box[2].classList.contains('x') && box[4].classList.contains('x') && box[6].classList.contains('x') ) === true){
        alert(x)
    } else if((box[0].classList.contains('o') && box[4].classList.contains('o') && box[8].classList.contains('o') ) === true){
        alert(o)
    } else if((box[0].classList.contains('x') && box[4].classList.contains('x') && box[8].classList.contains('x') ) === true){
        alert(x)
    } else if(b === 9){
        alert('tie game')
    }
}
  
  const playerOne = container.addEventListener('click', function(e){
        if(a === 0){
            if(e.target.classList.contains('box')){
                e.target.classList.add('x')
                e.target.classList.remove('box')
                e.target.innerHTML = '<img class="img" src="https://texas.thefootballbrainiacs.com/wp-content/uploads/2016/01/X.jpg">'
                a = a + 1
                b++
                log(a)
            }
        } 
        if(a === 1){
            if(e.target.classList.contains('box')){
                e.target.classList.add('o')
                e.target.classList.remove('box')
                e.target.innerHTML = '<img class="img" class="img-o" src="https://imgprd19.hobbylobby.com/6/f0/3c/6f03cacf1a6d78abcaa8e3655485f2f7c52978fe/700Wx700H-192948-0320-px.jpg">'
                a = a - 1
                b++
            }
        }
        winGame()
    })

    const playGame = function(){
            playerOne
            winGame
    }
  return{playGame, testing}
}
gameBoard().playGame()

// if box 1 2 and 3 contain classlist x user x won game
// 
