// OBJECT DESTRUCTURING
const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
}
console.log(band);

let {bandName, famousSong, ...restProps} = band;
console.log(bandName);
console.log(famousSong);
console.log(restProps);