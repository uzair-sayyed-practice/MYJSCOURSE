// LEXICAL SCOPE 

const myApp = () => {

    const myVar = "value1";

    const myFunc = () => {

        const myFunc2 = () => {
            const myVar = "value3";
            console.log("inside myFunc2",myVar);
        }

        const myVar = "value2";
        console.log("inside myFunc",myVar);
        myFunc2();

    }

    console.log(myVar);
    myFunc();
}
myApp();