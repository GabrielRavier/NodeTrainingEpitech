function doColorArrayPrinting(colorArray)
{
    colorArray.forEach(function (colorString, index)
    {
        switch (colorString)
        {
        case "bleu":
        case "rouge":
        case "jaune":
        case "vert":
            console.log(`La couleur à l'index ${index} est : ${colorString}`);
            break;
    
        default:
            console.log(`La couleur ${colorString} n'était pas attendue`);
        }
    })
}

let colorArray = ["bleu", "rouge", "blu", "bruh", "vert"];
doColorArrayPrinting(colorArray);