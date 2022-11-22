'use strict'
// proj name: in-picture

var gCurrQuestIdx = 0
var gQuests

// data model

function onInit() {
    gQuests = createQuests()
}
function onStart() {
    renderQuest()
}
function createQuests() {
    gQuests = [
        { id: 1, opts: ['Dog', 'Cat'], correctOptIndex: 0 },
        { id: 2, opts: ['Horse', 'Cat'], correctOptIndex: 1 },
        { id: 3, opts: ['Red Panda', 'Panda'], correctOptIndex: 1 }
    ]
    // console.log('gQuests', gQuests)
    return gQuests
}
function renderQuest() {
    // console.log('gQuests', gQuests)
    // console.log('gQuests[0]', gQuests[0].opts)
    var elImg = document.querySelector('img')
    // console.log(elImg)
    // console.log(gCurrQuestIdx)
    elImg.src = `img/${gCurrQuestIdx}.jpg`
    elImg.style.display = 'block'

    var strHTML = ''
    var currQuestion = gQuests[gCurrQuestIdx]
    // console.log('currQuestion', currQuestion)
    if (gCurrQuestIdx < 3) {
        for (var i = 0; i < currQuestion.opts.length; i++) {
            var currOpts = gQuests[gCurrQuestIdx].opts
            console.log('currOpts', currOpts)
            var optIdx = currOpts[i]
            console.log('i', i)
            strHTML += `<div onclick="checkAnswer(${i})" class="answers opts ${i}">${currOpts[i]}</div>`
        }
        var elGame = document.querySelector('.game')
        elGame.innerHTML = strHTML
    }
}
function checkAnswer(optIdx) {
    // console.log('gQuests', gQuests)
    // console.log('optIdx', optIdx)
    var correctAnswer = gQuests[gCurrQuestIdx].correctOptIndex
    // console.log('correctAnswer', correctAnswer)
    if (optIdx === correctAnswer) {
        console.log('gCurrQuestIdx', gCurrQuestIdx)
        gCurrQuestIdx++
        renderQuest()

    }
    if (gCurrQuestIdx === 3) {
        greetWinner()
    }
}
// console.log('gCurrQuestIdx', gCurrQuestIdx)
function greetWinner() {
    gCurrQuestIdx = 0
    var strHTML = ''
    strHTML += `<div class="winner">YOU WON!</div>`
    var elGame = document.querySelector('.game')
    elGame.innerHTML = strHTML
    // var btn = document.querySelector('button')
    // btn.innerText = 'Play Again'
}