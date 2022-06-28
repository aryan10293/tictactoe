const log = console.log
const gameBoard = function (){
  let a = 0
  let b = 0
  let c = 0
  const body =  document.querySelector('body')
  const container = document.querySelector('.container')
  const start = document.querySelector('.start')
  const reset = document.querySelector('.reset')
  const submit = document.querySelector('.form') 
  const ai =  document.querySelector('#ai')
  const startingGame = function(){
    if(c === 0){
        submit.style.display = 'block'
        c++
    } else if (c === 1) {
        submit.style.display = 'none'
        c--
    }
} 
  const getUsername = function(){
    const input = document.querySelectorAll('.form input')
    const player1 = document.getElementById('player1')
    const player2 = document.getElementById('player2')
    const usernames = Array.from(input).reduce((acc, input) => ({...acc, [input.id]: input.value }) , {});
    submit.addEventListener('submit', function(e){
        e.preventDefault()
        const user1 = usernames['player1'] = player1.value
        const user2 = usernames['player2'] = player2.value
        const play1 = document.querySelector('.user1')
        const play2 = document.querySelector('.user2')
        if(user1 == '' || user2 == ''){
            alert('please enter username')
        } else {
        play1.textContent = `X is ${user1}`
        play2.textContent = `O is ${user2}`
        container.style.display = 'grid'
      }
      
    })
    return usernames
}
  const lol = getUsername()
  const restart =  function(){
    let confirmed =  confirm('Are you sure you want to restart game?')
    b = 0
    a = 0
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
    const x = `${lol.player1} won the game`
    const o = `${lol.player2} won the game`
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
const computer = function(){
    const box = document.querySelectorAll('.box')
    let array = Array.from(box)
    const random = array[Math.floor(Math.random() * array.length)]
    for(let i = 0; i < box.length; i++){
        if(random.classList.contains('x') || random.classList.contains('o')){
            array.splice(array.indexOf(random), 1)
        } else if (a === 1) {
            random.classList.add('o')
            random.classList.remove('box')
            random.innerHTML = '<img class="img" class="img-o" src="https://imgprd19.hobbylobby.com/6/f0/3c/6f03cacf1a6d78abcaa8e3655485f2f7c52978fe/700Wx700H-192948-0320-px.jpg">'
            a = a - 1
        }
    }
}

  const resetGame = reset.addEventListener('click', restart)
  const startGame = start.addEventListener('click', startingGame)
  const playerOne = container.addEventListener('click', function(e){
        if(a === 0){
            if(e.target.classList.contains('box')){
                e.target.classList.add('x')
                e.target.classList.remove('box')
                e.target.innerHTML = '<img class="img" src="https://texas.thefootballbrainiacs.com/wp-content/uploads/2016/01/X.jpg">'
                a = a + 1
                b++
            }
        } 
        if(ai.checked){
            computer()
        }
        winGame()
    })

    const playGame = function(){
            playerOne
            startGame
            resetGame
            winGame
            getUsername()
            log()
    }
  return{playGame}
}
gameBoard().playGame()


// add if ai is not checked the same alert will still show
// ai needs to get all box elements
// ai needs to select a random box element ans dis play a 'o'
// add class 'o' to the element
// if(e.target.classList.contains('box')){
//     e.target.classList.add('o')
//     e.target.classList.remove('box')
//     e.target.innerHTML = '<img class="img" class="img-o" src="https://imgprd19.hobbylobby.com/6/f0/3c/6f03cacf1a6d78abcaa8e3655485f2f7c52978fe/700Wx700H-192948-0320-px.jpg">'
//     a = a - 1
//     b++
// }


// turn it into a array
// when a box turn into x pop it out of that array
// when a box turn into o pop it out of that array 