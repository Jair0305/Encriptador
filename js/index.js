const divPadre = document.querySelector('.divPadre')
const divIzquierda = document.querySelector('.izquierda')
const divDerecha = document.querySelector('.derecha')
const textoEntradaInput = document.querySelector('.textoEntrada')
const desencriptadorBoton = document.querySelector('.desencriptador')
const encriptadorBoton = document.querySelector('.encriptador')
const encriptacionParrafo = document.querySelector('.encriptacion')
const copiarTextoBtn = document.querySelector('.copiar')
const errorMsg = document.querySelector('.error-msg')
const copyContainer = document.querySelector('.copyBtnContainer')
const contenido = document.querySelector('.contenido')
// a = "ai"
// e = "enter"
// i = "imes"
// o = "ober"
// u = "ufat"

function encriptacion() {
    const mensajeErrorEncrip = "El texto que ha agregado no se puede encriptar, verifique que use vocales dentro del texto!"
    const mensajeErrorVacio = "Necesita ingresar texto en el input"
    const texto = textoEntradaInput.value
    let textoEncriptado = ''
    let encriptado = false

    if (texto === '') {
        errorMsg.innerHTML = mensajeErrorVacio
        errorMsg.classList.remove('inactive')
        //console.log("error desde vacio")
        if(encriptacion != '')
        {
            encriptacionParrafo.innerHTML = ""
            copiarTextoBtn.classList.add('boton-inactivo')
        }
    } else 
    {
        for (let i = 0; i < texto.length; i++) 
        {
            let letra = texto[i]
            if (letra === 'a') 
            {
                textoEncriptado += 'ai'
                encriptado = true
            } else if (letra === 'e') 
            {
                textoEncriptado += 'enter'
                encriptado = true
            } else if (letra === 'i') 
            {
                textoEncriptado += 'imes'
                encriptado = true
            } else if (letra === 'o')
            {
                textoEncriptado += 'ober'
                encriptado = true
            } else if (letra === 'u') 
            {
                textoEncriptado += 'ufat'
                encriptado = true
            } else 
            {
                textoEncriptado += letra
            }
        }
        if (!encriptado) 
        {
            errorMsg.innerHTML = mensajeErrorEncrip
            //console.log("error")
            if(errorMsg.classList.contains('inactive'))
            {
                errorMsg.classList.remove('inactive')
                encriptacionParrafo.innerHTML = ""
                copiarTextoBtn.classList.add('boton-inactivo')
            }
        } else 
        {
            encriptacionParrafo.innerHTML = textoEncriptado
            if(!errorMsg.classList.contains('inactive'))
            {
                errorMsg.classList.add('inactive')
            }
            if(!copiarTextoBtn.classList.contains('boton-inactivo'))
            {
                copiarTextoBtn.classList.remove('boton-inactivo')
            }
            copyContainer.classList.remove('inactive')
            copiarTextoBtn.classList.remove('boton-inactivo')
        }
    }
}

function desencriptacion() {
    const mensajeErrorDesencrip = "El texto que ha agregado no se puede desencriptar!"
    const mensajeError = "Necesita ingresar texto en el input!"
    const texto = textoEntradaInput.value
    let textoDesencriptado = ''
    let desencriptado = false
    if (texto === '') 
    {
        errorMsg.innerHTML = mensajeError
        errorMsg.classList.remove('inactive')
        //console.log("error desde vacio")
        if(encriptacion != '')
        {
            encriptacionParrafo.innerHTML = ""
            copiarTextoBtn.classList.add('boton-inactivo')
        }
    }else
    {
        for (let i = 0; i < texto.length; i++) 
        {
            let letra = texto[i]
    
            if (letra === 'a' && texto.substring(i, i + 2) == 'ai') 
            {
                textoDesencriptado += 'a'
                i++
                desencriptado = true
            } else if (letra === 'e' && texto.substring(i, i + 5) === 'enter') 
            {
                textoDesencriptado += 'e'
                i += 4
                desencriptado = true
            } else if (letra === 'i' && texto.substring(i, i + 4) === 'imes') 
            {
                textoDesencriptado += 'i'
                i += 3
                desencriptado = true
            } else if (letra === 'o' && texto.substring(i, i + 4) === 'ober') 
            {
                textoDesencriptado += 'o'
                i += 3
                desencriptado = true
            } else if (letra === 'u' && texto.substring(i, i + 4) === 'ufat') 
            {
                textoDesencriptado += 'u'
                i += 3
                desencriptado = true
            } else 
            {
                textoDesencriptado += letra
            }
        }   
        if (!desencriptado) 
        {
            errorMsg.innerHTML = mensajeErrorDesencrip
            //console.log("error")
            if(errorMsg.classList.contains('inactive'))
            {
                errorMsg.classList.remove('inactive')
                encriptacionParrafo.innerHTML = ""
                copiarTextoBtn.classList.add('boton-inactivo')
            }
        } else 
        {
            encriptacionParrafo.innerHTML = textoDesencriptado
            if(!errorMsg.classList.contains('inactive'))
            {
                errorMsg.classList.add('inactive')
                if(!copiarTextoBtn.classList.contains('boton-inactivo'))
                {
                    copiarTextoBtn.classList.remove('boton-inactivo')
                }
                copiarTextoBtn.classList.remove('boton-inactivo')
            }
        }
    }
}

function copiarTexto() {
    const contenido = encriptacionParrafo.value;

    navigator.clipboard.writeText(contenido)
}

encriptadorBoton.addEventListener('click', encriptacion)
desencriptadorBoton.addEventListener('click', desencriptacion)
copiarTextoBtn.addEventListener('click', copiarTexto)

function EncriptacionBinaria() 
{
    const alphabetBinary = []

    for (let i = 32; i <= 126; i++) 
    {
        const letter = String.fromCharCode(i)
        const binary = i.toString(2)
        alphabetBinary.push({ letter, binary, i })
    }
    //console.log(alphabetBinary)
    console.table(alphabetBinary)

    const alphabetOctal = []

    for (let i = 32; i <= 126; i++) 
    {
        const letter = String.fromCharCode(i)
        const binary = i.toString(8)
        alphabetOctal.push({ letter, binary, i })
    }
    //console.log(alphabetOctal)
    console.table(alphabetOctal)

    const alphabetDecimal = []

    for (let i = 32; i <= 126; i++) 
    {
        const letter = String.fromCharCode(i)
        const binary = i.toString(10)
        alphabetDecimal.push({ letter, binary, i })
    }
    //console.log(alphabetDecimal)
    console.table(alphabetDecimal)

    const alphabetHexa = []

    for (let i = 32; i <= 126; i++) 
    {
        const letter = String.fromCharCode(i)
        const binary = i.toString(16)
        alphabetHexa.push({ letter, binary, i })
    }
    //console.log(alphabetHexa)
    console.table(alphabetHexa)
}

