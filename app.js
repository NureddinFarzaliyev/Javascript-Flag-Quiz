var imgPlace = document.getElementsByClassName('imgPlace')
var btns = document.getElementsByClassName('btn')
buttons = [
    btns[0], btns[1], btns[2], btns[3]
]

var flags = [
    'flags/Azerbaijan.jpg',
    'flags/Angola.jpg',
    'flags/Colombia.jpg',
    'flags/Denmark.jpg',
    'flags/England.jpg',
    'flags/Germany.jpg',
    'flags/Netherlands.jpg',
    'flags/Russia.jpg',
    'flags/Turkey.jpg',
    'flags/UAE.jpg'
]

var names = [
    'Azerbaijan', 'Angola', 'Colombia', 'Denmark', 'England', 'Germany', 'Netherlands', 'Russia', 'Turkey', 'UAE'
]

function correct() {
    btn1.style.backgroundColor  = 'green';
    btn1.style.color = "#fff";
    document.getElementById('next').style.visibility = 'visible';
}

function wrong(wrong_btn) {
    wrong_btn.style.backgroundColor  = 'red';
}

function setGame() {
    correctName = Math.floor(Math.random() * names.length) 
    correctBtn = Math.floor(Math.random() * buttons.length)

    btn1 = buttons[correctBtn]
    btn1.value = names[correctName]

    btn1.setAttribute('onclick', 'correct()')

    imgPlace[0].setAttribute('src', 'flags/' + names[correctName] + '.jpg')

    // btns[0].value = names[Math.floor(Math.random() * names.length)]

    buttons.splice(correctBtn, 1);
    btn2 = buttons[0]; btn3 = buttons[1]; btn4 = buttons[2]

    names.splice(correctName, 1)

    btn2.value = names[Math.floor(Math.random() * names.length)]
    btn3.value = names[Math.floor(Math.random() * names.length)]
    btn4.value = names[Math.floor(Math.random() * names.length)]

    btn2.setAttribute('onclick', 'wrong(btn2)')
    btn3.setAttribute('onclick', 'wrong(btn3)')
    btn4.setAttribute('onclick', 'wrong(btn4)')

    console.log("Correct Answer: " + btn1.value)
}

function reset() {
    buttons = [
        btns[0], btns[1], btns[2], btns[3]
    ]

    names = [
        'Azerbaijan', 'Angola', 'Colombia', 'Denmark', 'England', 'Germany', 'Netherlands', 'Russia', 'Turkey', 'UAE'
    ]

    btn1.style.backgroundColor = 'white';
    btn2.style.backgroundColor = 'white';
    btn3.style.backgroundColor = 'white';
    btn4.style.backgroundColor = 'white';
    btn1.style.color = "black";

    document.getElementById('next').style.visibility = 'hidden';    

    setGame()
}

function startGame() {
    const start = document.getElementsByClassName('start')
    const game = document.getElementsByClassName('game')  

    start[0].style.visibility = 'hidden';
    game[0].style.visibility = 'visible';

    setGame()
}