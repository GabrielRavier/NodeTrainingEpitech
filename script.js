function isLastIndex(array, index)
{
    return index === (array.length - 1);
}

const describeColorArray = colorArray =>
{
    let constructedString = "";
    colorArray.forEach(function (colorString, index, colorArray)
    {
        switch (colorString)
        {
        case "bleu":
        case "rouge":
        case "jaune":
        case "vert":
            constructedString += `La couleur à l'index ${index} est : ${colorString}`;
            break;
    
        default:
            constructedString += `La couleur ${colorString} n'était pas attendue`;
        }

        if (!isLastIndex(colorArray, index))
            constructedString += '\n';
    });

    return constructedString;
}

let colorArray = ["bleu", "rouge", "blu", "bruh", "vert"];
console.log(describeColorArray(colorArray));
