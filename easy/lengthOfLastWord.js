const lengthOfLastWord = (string) => {
    const wordsToArray = string.split(" ").filter((e) =>e.length !== 0)
    return wordsToArray[wordsToArray.length-1].length
}



console.log(lengthOfLastWord("   fly me   to   the moon  "))