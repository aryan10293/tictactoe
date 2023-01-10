 class TicTacToe {
    constructor() {
        function playerOne() {
            let number = 0
            let playerClicks = 0
            const container = document.querySelector('.container')
            const ai = document.querySelector('#ai')

            // function rests the game board
            function restart() {
                let confirmed = confirm('Are you sure you want to restart game?')
                number = 0
                playerClicks = 0
                if (confirmed) {
                    const div = document.querySelectorAll('div')
                    const image = document.querySelectorAll('.img')
                    for (let i = 0; i < div.length; i++) {
                        if (div[i].classList.contains('x')) {
                            div[i].classList.remove('x')
                            div[i].classList.add('box')
                            div[i].innerHTML = ''
                        }
                        if (div[i].classList.contains('o')) {
                            div[i].classList.remove('o')
                            div[i].classList.add('box')
                            div[i].innerHTML = ''
                        }
                    }
                }
            }
            // function that checks who won the game
            function winGame() {
                const x = `${document.getElementById('player1').value} won the game`
                const o = `${document.getElementById('player2').value} won the game`
                console.log(((box[0].classList.contains('x') && box[1].classList.contains('x') && box[2].classList.contains('x')) === true))
                if ((box[0].classList.contains('x') && box[1].classList.contains('x') && box[2].classList.contains('x')) === true) {
                    alert(x)
                    restart()
                } else if ((box[0].classList.contains('o') && box[1].classList.contains('o') && box[2].classList.contains('o')) === true) {
                    alert(o)
                    restart()
                } else if ((box[4].classList.contains('o') && box[3].classList.contains('o') && box[5].classList.contains('o')) === true) {
                    alert(o)
                    restart()
                } else if ((box[4].classList.contains('x') && box[3].classList.contains('x') && box[5].classList.contains('x')) === true) {
                    alert(x)
                    restart()
                } else if ((box[7].classList.contains('o') && box[8].classList.contains('o') && box[6].classList.contains('o')) === true) {
                    alert(o)
                    restart()
                } else if ((box[7].classList.contains('x') && box[8].classList.contains('x') && box[6].classList.contains('x')) === true) {
                    alert(x)
                    restart()
                } else if ((box[0].classList.contains('o') && box[3].classList.contains('o') && box[6].classList.contains('o')) === true) {
                    alert(o)
                    restart()
                } else if ((box[0].classList.contains('x') && box[3].classList.contains('x') && box[6].classList.contains('x')) === true) {
                    alert(x)
                    restart()
                } else if ((box[1].classList.contains('o') && box[4].classList.contains('o') && box[7].classList.contains('o')) === true) {
                    alert(o)
                    restart()
                } else if ((box[1].classList.contains('x') && box[4].classList.contains('x') && box[7].classList.contains('x')) === true) {
                    alert(x)
                    restart()
                } else if ((box[2].classList.contains('o') && box[5].classList.contains('o') && box[8].classList.contains('o')) === true) {
                    alert(o)
                    restart()
                } else if ((box[2].classList.contains('x') && box[5].classList.contains('x') && box[8].classList.contains('x')) === true) {
                    alert(x)
                    restart()
                } else if ((box[2].classList.contains('o') && box[4].classList.contains('o') && box[6].classList.contains('o')) === true) {
                    alert(o)
                    restart()
                } else if ((box[2].classList.contains('x') && box[4].classList.contains('x') && box[6].classList.contains('x')) === true) {
                    alert(x)
                    restart()
                } else if ((box[0].classList.contains('o') && box[4].classList.contains('o') && box[8].classList.contains('o')) === true) {
                    alert(o)
                    restart()
                } else if ((box[0].classList.contains('x') && box[4].classList.contains('x') && box[8].classList.contains('x')) === true) {
                    alert(x)
                    restart()
                } else if (playerClicks === 9) {
                    alert('tie game')
                    restart()
                }
            }

            // creating an AI
            function isAiDisabled() {
                const player2 = document.querySelector('#player2')
                if (ai.checked) {
                    player2.setAttribute('disabled', '')
                    player2.value = 'AI'
                } else if (!ai.checked) {
                    player2.disabled = false
                    player2.value = ''
                }
            }
            ai.addEventListener('click', isAiDisabled)

            // creating computer for ai
            function computer() {
                const box = document.querySelectorAll('.box')
                let array = Array.from(box)
                const random = array[Math.floor(Math.random() * array.length)]
                for (let i = 0; i < box.length; i++) {
                    if (random.classList.contains('x') || random.classList.contains('o')) {
                        array.splice(array.indexOf(random), 1)
                    } else if (number === 1) {
                        random.classList.add('o')
                        random.classList.remove('box')
                        random.innerHTML = 'o'
                        number--
                    }
                }
            }


            container.addEventListener('click', function (e) {
                const ai = document.querySelector('#ai')
                if (number === 0) {
                    if (e.target.classList.contains('box')) {
                        e.target.classList.add('x')
                        e.target.classList.remove('box')
                        e.target.innerHTML = 'x'
                        number++
                        playerClicks++
                    }
                }
                if (ai.checked) {
                    computer()
                } else if (e.target.classList.contains('box')) {
                    e.target.classList.add('o')
                    e.target.classList.remove('box')
                    e.target.innerHTML = 'o'
                    number--
                    playerClicks++
                }
                winGame()
            })
        }
        function startingGame() {
            let c = 0
            let submit = document.querySelector('.form')
            if (c === 0) {
                submit.style.display = 'block'
                c++
            } else if (c === 1) {
                console.log(c)
                submit.style.display = 'none'
                c--
            }
        }
        function getUsername() {
            const input = document.querySelectorAll('.form input')
            const player1 = document.getElementById('player1')
            const player2 = document.getElementById('player2')
            const container = document.querySelector('.container')
            let submit = document.querySelector('.form')
            const usernames = Array.from(input).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {})
            submit.addEventListener('submit', function (e) {
                e.preventDefault()
                const user1 = usernames['player1'] = player1.value
                const user2 = usernames['player2'] = player2.value
                const play1 = document.querySelector('.user1')
                const play2 = document.querySelector('.user2')
                if (user1 == '' || user2 == '') {
                    alert('please enter username')
                } else {
                    play1.textContent = `X is ${user1}`
                    play2.textContent = `O is ${user2}`
                    container.style.display = 'grid'
                }

            })
            return usernames
        }

        this.playGame = function () {
            const start = document.querySelector('.start')
            playerOne()
            getUsername()
            start.addEventListener('click', startingGame)
        }
    }
}
const tic = new TicTacToe()
tic.playGame()
console.log(tic)