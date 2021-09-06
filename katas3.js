const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

document.body.style.cssText = 'background-color: #f5f5f5;'
const newMain = document.createElement('main')
newMain.style.cssText = 'width: 1080px; margin: 0 auto;'
document.body.appendChild(newMain)
const newh1 = document.createElement('h1')
newh1.innerText = 'JS - Resolução Katas 3'
newMain.appendChild(newh1)
const newOl = document.createElement('ol')
newMain.appendChild(newOl)


function showResults(data, exercise) {
    const newLi = document.createElement('li')
    const newP = document.createElement('p')
    newP.innerText = exercise
    const newP2 = document.createElement('p')
    newP2.innerText = data
    newLi.appendChild(newP)
    newLi.appendChild(newP2)
    newOl.appendChild(newLi)
}


// Kata 1
function kata1() {
    exercise = 'Exibir os números de 1 a 25:'
    let result = []
    for(let i = 1; i <= 25; i++) {
        result.push(i)
    }

    return showResults(result, exercise)
}
console.log(kata1())
// Kata 1


// Kata 2
function kata2() {
    // implemente o código do kata 2 aqui
    exercise = 'Exibir os números de 25 a 1:'
    let result = []
    for(let i = 25; i >= 1; i--) {
        result.push(i)
    }

    return showResults(result, exercise)
}
console.log(kata2())
// Kata 2


// Kata 3
function kata3() {
    // implemente o código do kata 3 aqui
    exercise = 'Exibir os números de -1 a -25:'
    let result = []
    for(let i = -1; i >= -25; i--) {
        result.push(i)
    }

    return showResults(result, exercise)
}
console.log(kata3())
// Kata 3


// Kata 4
function kata4() {
    // implemente o código do kata 4 aqui
    exercise = 'Exibir os números de -25 a -1:'
    let result = []
    for(let i = -25; i <= -1; i++) {
        result.push(i)
    }

    return showResults(result, exercise)
}
console.log(kata4())
// Kata 4


// Kata 5
function kata5() {
    // implemente o código do kata 5 aqui
    exercise = 'Exibir os números ímpares de 25 a -25:'
    let result = []
    let value = 0
    for(let i = 1; value > -25; i++) {
        value =  -2 * i + 27
        result.push(value)
    }

    return showResults(result, exercise)
}
console.log(kata5())
// Kata 5


// Kata 6
function kata6() {
    // implemente o código do kata 6 aqui
    exercise = 'Exibir os números divisíveis por 3 até o 100:'
    let result = []
    let value = 0
    for(let  i = 1; i < (100 / 3); i ++) {
        value = 3 * i
        result.push(value)
    }

    return showResults(result, exercise)
}
console.log(kata6())
// Kata 6


// Kata 7
function kata7() {
    // implemente o código do kata 7 aqui
    exercise = 'Exibir os números divisíveis por 7 até o 100:'
    let result = []
    let value = 0
    for(let  i = 1; i < (100 / 7); i ++) {
        value = 7 * i
        result.push(value)
    }

    return showResults(result, exercise)
}
console.log(kata7())
// Kata 7


// Kata 8
function kata8() {
    // implemente o código do kata 8 aqui
    exercise = 'Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100:'
    let result = []
    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0 || i % 7 === 0) {
            result.push(i)
        }
    }

    return showResults(result, exercise)
}
console.log(kata8())
// Kata 8


// Kata 9
function kata9() {
    // implemente o código do kata 9 aqui
    exercise = 'Exibir os números ímpares divisíveis por 5 até o 100:'
    let result = []
    let value = 0
    for(let i = 1; i < (100 / 5) ; i++) {
        value = 5 * i
        if(value % 2 !== 0) {
            result.push(value)
        }
    }
    return showResults(result, exercise)
}
console.log(kata9())
// Kata 9


// Kata 10
function kata10() {
    // implemente o código do kata 10 aqui
    exercise = 'Exibir os 20 elementos de sampleArray:'
    return showResults(sampleArray, exercise)
}
console.log(kata10())
// Kata 10


// Kata 11
function kata11() {
    // implemente o código do kata 11 aqui
    exercise = 'Exibir todos os números pares contidos em sampleArray:'
    let result = []
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 === 0) {
            result.push(sampleArray[i])
        }
    }

    return showResults(result, exercise)
}
console.log(kata11())
// Kata 11


// Kata 12
function kata12() {
    // implemente o código do kata 12 aqui
    exercise = 'Exibir todos os números ímpares contidos em sampleArray:'
    let result = []
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 !== 0) {
            result.push(sampleArray[i])
        }
    }

    return showResults(result, exercise)
}
console.log(kata12())
// Kata 12


// Kata 13
function kata13() {
    // implemente o código do kata 13 aqui
    exercise = 'Exibir os números divisíveis por 8 em sampleArray:'
    let result = []
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 8 === 0) {
            result.push(sampleArray[i])
        }
    }

    return showResults(result, exercise)
}
console.log(kata13())
// Kata 13


// Kata 14
function kata14() {
    // implemente o código do kata 14 aqui
    exercise = 'Exibir o quadrado de cada elemento de sampleArray:'
    let result = []
    for(let i = 0; i < sampleArray.length; i++) {
        result.push(sampleArray[i] ** 2)
    }

    return showResults(result, exercise)
}
console.log(kata14())
// Kata 14


// Kata 15
function kata15() {
    // implemente o código do kata 15 aqui
    exercise = 'Exibir a soma de todos os números de 1 a 20:'
    let result = 0
    for(let i = 1;  i <= 20; i++) {
        result +=  i
    }
    return showResults(result, exercise)
}
console.log(kata15())
// Kata 15


// Kata 16
function kata16() {
    // implemente o código do kata 16 aqui
    exercise = 'Exibir a soma de todos os elementos de sampleArray:'
    let result = 0
    for(let i = 1; i < sampleArray.length; i++) {
        result += sampleArray[i]
    }
    return showResults(result, exercise)
}
console.log(kata16())
// Kata 16


// Kata 17
function kata17() {
    // implemente o código do kata 17 aqui
    exercise = 'Exibir o menor elemento de sampleArray:'
    let result = sampleArray[0]
    for(let i = 1;  i < sampleArray.length; i++) {
        if(sampleArray[i] < result) {
            result = sampleArray[i]
        }
    }
    return showResults(result, exercise)
}
console.log(kata17())
// Kata 17


// Kata 18
function kata18() {
    // implemente o código do kata 18 aqui
    exercise = 'Exibir o maior elemento de sampleArray:'
    let result = sampleArray[0]
    for(let i = 1;  i < sampleArray.length; i++) {
        if(sampleArray[i] > result) {
            result = sampleArray[i]
        }
    }
    return showResults(result, exercise)
}
console.log(kata18())
// Kata 18

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */


// KataBonus 1
function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    exercise = 'Bonus 1:'
    const bonus1Section = document.createElement('section')
    bonus1Section.classList.add('bonus1')
    const newH2 = document.createElement('h2')
    newH2.innerText = exercise
    bonus1Section.appendChild(newH2)
    newMain.appendChild(bonus1Section)
    for(let i = 1; i <= 20; i++) {
        let rectangleDiv = document.createElement('div')
        rectangleDiv.style.cssText = 'width: 100px; height: 20px; background-color: gray; margin: 5px;'
        bonus1Section.appendChild(rectangleDiv)
    }
}
console.log(kataBonus1())
// KataBonus 1


// KataBonus 2
function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    exercise = 'Bonus 2:'
    const bonus2Section = document.createElement('section')
    bonus2Section.classList.add('bonus2')
    const newH2 = document.createElement('h2')
    newH2.innerText = exercise
    bonus2Section.appendChild(newH2)
    newMain.appendChild(bonus2Section)
    for(let i = 1; i <= 20; i++) {
        let rectangleDiv = document.createElement('div')
        let value = 100 + 5 * i
        rectangleDiv.style.cssText = 'width: ' + value + 'px; height: 20px; background-color: gray; margin: 5px;'
        bonus2Section.appendChild(rectangleDiv)
    }
}
console.log(kataBonus2())
// KataBonus 2


// KataBonus 3
function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    exercise = 'Bonus 3:'
    const bonus3Section = document.createElement('section')
    bonus3Section.classList.add('bonus3')
    const newH2 = document.createElement('h2')
    newH2.innerText = exercise
    bonus3Section.appendChild(newH2)
    newMain.appendChild(bonus3Section)
    for(let i = 0; i <= 19; i++) {
        let rectangleDiv = document.createElement('div')
        let value = sampleArray[i]
        rectangleDiv.style.cssText = 'width: ' + value + 'px; height: 20px; background-color: gray; margin: 5px;'
        bonus3Section.appendChild(rectangleDiv)
    }
}
console.log(kataBonus3())
// KataBonus 3


// KataBonus 4
function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
    exercise = 'Bonus 4:'
    const bonus4Section = document.createElement('section')
    bonus4Section.classList.add('bonus4')
    const newH2 = document.createElement('h2')
    newH2.innerText = exercise
    bonus4Section.appendChild(newH2)
    newMain.appendChild(bonus4Section)
    for(let i = 0; i <= 19; i++) {
        let rectangleDiv = document.createElement('div')
        let value = sampleArray[i]
        if(i % 2 === 0) {
            rectangleDiv.style.cssText = 'width: ' + value + 'px; height: 20px; margin: 5px; background-color: red;'
            bonus4Section.appendChild(rectangleDiv)
        } else {
            rectangleDiv.style.cssText = 'width: ' + value + 'px; height: 20px; margin: 5px; background-color: gray;'
            bonus4Section.appendChild(rectangleDiv)
        }
    }
}
console.log(kataBonus4())
// KataBonus 4


// KataBonus 5
function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
    exercise = 'Bonus 5:'
    const bonus5Section = document.createElement('section')
    bonus5Section.classList.add('bonus5')
    const newH2 = document.createElement('h2')
    newH2.innerText = exercise
    bonus5Section.appendChild(newH2)
    newMain.appendChild(bonus5Section)
    for(let i = 0; i <= 19; i++) {
        let rectangleDiv = document.createElement('div')
        let value = sampleArray[i]
        if(value % 2 === 0) {
            rectangleDiv.style.cssText = 'width: ' + value + 'px; height: 20px; margin: 5px; background-color: red;'
            bonus5Section.appendChild(rectangleDiv)
        } else {
            rectangleDiv.style.cssText = 'width: ' + value + 'px; height: 20px; margin: 5px; background-color: gray;'
            bonus5Section.appendChild(rectangleDiv)
        }
    }
}
console.log(kataBonus5())
