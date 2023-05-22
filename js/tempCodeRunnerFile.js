const alphabetBinary = [];

    for (let i = 32; i <= 126; i++) 
    {
        const letter = String.fromCharCode(i);
        const binary = i.toString(2);
        alphabetBinary.push({ letter, binary, i });
    }
    //console.log(alphabetBinary)
    console.table(alphabetBinary)

    const alphabetOctal = [];

    for (let i = 32; i <= 126; i++) 
    {
        const letter = String.fromCharCode(i);
        const binary = i.toString(8);
        alphabetOctal.push({ letter, binary, i });
    }
    //console.log(alphabetOctal)
    console.table(alphabetOctal)

    const alphabetDecimal = [];

    for (let i = 32; i <= 126; i++) 
    {
        const letter = String.fromCharCode(i);
        const binary = i.toString(10);
        alphabetDecimal.push({ letter, binary, i });
    }
    //console.log(alphabetDecimal)
    console.table(alphabetDecimal)

    const alphabetHexa = [];

    for (let i = 32; i <= 126; i++) 
    {
        const letter = String.fromCharCode(i);
        const binary = i.toString(16);
        alphabetHexa.push({ letter, binary, i });
    }
    //console.log(alphabetHexa)
    console.table(alphabetHexa)