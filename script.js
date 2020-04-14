function isLastIndex(array, index)
{
    return index === (array.length - 1);
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
    }
}

console.log(player.introduction())
console.log(player.backpackInventory())
console.log(player.description())