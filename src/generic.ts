function identift<t>(arr:t[]):t{
    return arr[0]
}
const value=identift<string>(["manav","manan"])
console.log(value.toUpperCase())