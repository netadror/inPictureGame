'use strict'
// proj name: in-picture

var gCurrQuestIdx = 0
var gQuests

// data model

function onInit() {
    gQuests = createQuests()
}
function onStart() {
    var elBg = document.querySelector('.game-bg')
    elBg.style.display = 'block'
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
    var elImg = document.querySelector('img')
    elImg.src = `img/${gCurrQuestIdx}.jpg`
    elImg.style.display = 'block'

    var strHTML = ''
    var currQuestion = gQuests[gCurrQuestIdx]
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
    var correctAnswer = gQuests[gCurrQuestIdx].correctOptIndex
    if (optIdx === correctAnswer) {
        console.log('gCurrQuestIdx', gCurrQuestIdx)
        gCurrQuestIdx++
        renderQuest()

    } if (gCurrQuestIdx === 3) {
        greetWinner()
    }
}
function greetWinner() {
    gCurrQuestIdx = 0
    var strHTML = ''
    strHTML += `<div class="winner">YOU WON!</div>`
    var elGame = document.querySelector('.game')
    elGame.innerHTML = strHTML
    var elbackground = document.querySelector('.game-bg')
    elbackground.style.backgroundImage = 'url("../img/confetti.gif")'
}