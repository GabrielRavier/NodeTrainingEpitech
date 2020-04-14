function isLastIndex(array, index)
{
    return index === (array.length - 1);
}

// For an array of strings formatted as "number name", return a sorted array sorted by alphabetically by the value of name
function sortNumberedArrayByName(stringArray)
{
    stringArray.sort((elem1, elem2) =>
        {
            strippedElem1 = elem1.substr(elem1.indexOf(' ') + 1);
            strippedElem2 = elem2.substr(elem2.indexOf(' ') + 1);
            return strippedElem1.localeCompare(strippedElem2);
        });

    return stringArray;
}

const player =
{
    firstName: "John",
    lastName: "Doe",
    sex: "male",
    clothes: "a shirt",
    backpack: ["1 pen", "1 backpack", "1 sword", "1 laser"],

    introduction()
    {
        return `Je suis ${this.firstName} ${this.lastName}`;
    },

    backpackInventory()
    {
        let result = "Dans mon sac à dos, il y a :\n";
        this.backpack.forEach(function (item, index, backpack)
        {
            result += item;

            if (!isLastIndex(backpack, index))
                result += "\n";
        })

        return result;
    },

    description()
    {
        return `Je suis un(e) ${this.sex}. Je suis habillé(e) avec ${this.clothes} et j'ai un sac à dos!\n${this.backpackInventory()}`
    },

    sortBackpack()
    {
        this.backpack = sortNumberedArrayByName(this.backpack);
    }
}

console.log(player.introduction());
console.log(player.backpackInventory());
console.log(player.description());
player.sortBackpack();
console.log("After sorting backpack");
console.log(player.backpackInventory());
