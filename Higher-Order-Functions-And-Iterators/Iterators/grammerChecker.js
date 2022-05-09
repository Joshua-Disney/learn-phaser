let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
// console.log(storyWords)
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
let count = 0
let newCount = 0

storyWords.forEach(word => count++)
console.log("count: ", count)

storyWords = storyWords.filter(word => {
    return word !== unnecessaryWord
})

storyWords = storyWords.map(word => {
    if (word === misspelledWord) {
        return 'beautiful'
    } else {
        return word
    }
})

const badWordIndex = storyWords.findIndex(word => {
    return word === badWord
})
console.log('badWordIndex: ', badWordIndex)
storyWords[badWordIndex] = 'really'

const lengthCheck = storyWords.every(word => {
    return word.length <= 10
})
console.log('lengthCheck: ', lengthCheck)

storyWords = storyWords.map(word => {
    if (word.length > 10) {
        return word = 'dazzling'
    } else {
        return word
    }
})

storyWords.forEach(word => newCount++)
console.log("new count: ", newCount)

console.log(storyWords.join(' '))

// LOG:
// count:  181
// badWordIndex:  78
// lengthCheck:  false
// new count:  178
// Last weekend, I took the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a really long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a dazzling 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you cross back into New York! At this point, you are very close to the end.