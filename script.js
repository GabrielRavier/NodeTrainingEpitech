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
    backpack: ["a pen", "a backpack", "a sword", "a laser"],

    introduction()
    {
        return `I am ${this.firstName} ${this.lastName}`;
    },

    backpackInventory()
    {
        let result = "The backpack contains ";
        this.backpack.forEach(function (item, index, backpack)
        {
            result += item;

            if (!isLastIndex(backpack, index))
                result += ", ";
        })

        return result;
    },

    description()
    {
        return `${this.introduction()}, a ${this.sex} wearing ${this.clothes}`;
    }
}

console.log(player.introduction())
console.log(player.backpackInventory())
console.log(player.description())