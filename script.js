const log = console.log
const gameBoard = function (){
  let a = 0
  let b = 0
  let body =  document.querySelector('body')
  let container = document.querySelector('.container')
  const reset = document.querySelector('.reset')

  const restart =  function(){
    let confirmed =  confirm('Are you sure you want to restart game?')
    b = 0
    if(confirmed){
        const div = document.querySelectorAll('div')
        const image = document.querySelectorAll('.img')
        for(let i = 0; i < image.length; i++){
            image[i].remove()
        }
        for(let i = 0; i < div.length; i++){
            if(div[i].classList.contains('x')){
                div[i].classList.remove('x')
                div[i].classList.add('box')
            }
            if(div[i].classList.contains('o')){
                div[i].classList.remove('o')
                div[i].classList.add('box')   
            }
        }
    }
} 
  const winGame = function(){
    const x = 'user x has won the game'
    const o = 'user o has won the game'
    if((box[0].classList.contains('x') && box[1].classList.contains('x') && box[2].classList.contains('x') ) === true){
        alert(x)
        restart()
    } else if((box[0].classList.contains('o') && box[1].classList.contains('o') && box[2].classList.contains('o') ) === true){
        alert(o)
        restart()
    } else if((box[4].classList.contains('o') && box[3].classList.contains('o') && box[5].classList.contains('o') ) === true){
        alert(o)
        restart()
    } else if((box[4].classList.contains('x') && box[3].classList.contains('x') && box[5].classList.contains('x') ) === true){
        alert(x)
        restart()
    } else if((box[7].classList.contains('o') && box[8].classList.contains('o') && box[6].classList.contains('o') ) === true){
        alert(o)
        restart()
    } else if((box[7].classList.contains('x') && box[8].classList.contains('x') && box[6].classList.contains('x') ) === true){
        alert(x)
        restart()
    } else if((box[0].classList.contains('o') && box[3].classList.contains('o') && box[6].classList.contains('o') ) === true){
        alert(o)
        restart()
    } else if((box[0].classList.contains('x') && box[3].classList.contains('x') && box[6].classList.contains('x') ) === true){
        alert(x)
        restart()
    } else if((box[1].classList.contains('o') && box[4].classList.contains('o') && box[7].classList.contains('o') ) === true){
        alert(o)
        restart()
    } else if((box[1].classList.contains('x') && box[4].classList.contains('x') && box[7].classList.contains('x') ) === true){
        alert(x)
        restart()
    } else if((box[2].classList.contains('o') && box[5].classList.contains('o') && box[8].classList.contains('o') ) === true){
        alert(o)
        restart()
    } else if((box[2].classList.contains('x') && box[5].classList.contains('x') && box[8].classList.contains('x') ) === true){
        alert(x)
        restart()
    } else if((box[2].classList.contains('o') && box[4].classList.contains('o') && box[6].classList.contains('o') ) === true){
        alert(o)
        restart()
    } else if((box[2].classList.contains('x') && box[4].classList.contains('x') && box[6].classList.contains('x') ) === true){
        alert(x)
        restart()
    } else if((box[0].classList.contains('o') && box[4].classList.contains('o') && box[8].classList.contains('o') ) === true){
        alert(o)
        restart()
    } else if((box[0].classList.contains('x') && box[4].classList.contains('x') && box[8].classList.contains('x') ) === true){
        alert(x)
        restart()
    } else if(b === 9){
        alert('tie game')
        restart()
    }
}

const resetGame = reset.addEventListener('click', restart)
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
            resetGame
            winGame
    }
  return{playGame}
}
gameBoard().playGame()

// on reset remove all img elements
//remove all x and o classes 
// add back all box classes 
// ask users if they are sure they want to restart


