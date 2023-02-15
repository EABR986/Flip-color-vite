import './style.css'

const COLOR_PALETTE={
  '#28262C': 'Raisin Black',
  '#998FC7': 'Blue Bell',
  '#D4C2FC': 'Lavender Blue',
  '#F9F5FF': 'Magnolia',
  '#14248A': 'Resolution Blue'
}

const OTROS_COLORES= {
  '#28262C': 'Raisin Black',
  '#998FC7': 'Blue Bell',
  '#D4C2FC': 'Lavender Blue',
  '#F9F5FF': 'Magnolia',
  '#14248A': 'Resolution Blue'
}
/* ESTO VA A HACER QUE EN LA CASILLA DE SELECT SE CREE UNA LISTA DE OPCIONES CON LOS NOMBRES DE LOS COLOR*/

const addOptionsToColorPicker = () => {
  // CREA UNA FUNCION QUE LUEGO VA A PODER SER LLAMADA
  const colorPickerSelect = document.querySelector("#color-picker");
  // CREA UNA VARIABLE DONDE SE PUEDA LLAMAR LA SELECCION DE COLOR

  Object.keys(COLOR_PALETTE).forEach((color) => {
    // CREA UN ARRAY CON LOS CODIGOS DE COLOR_PALETTE Y DEVUELVE  UNA VARIABLE COLOR POR CADA
// UNA DE LAS LLAVES EN DICHA LISTA
    const option = document.createElement("option");
    // CREA UNA VARIABLE OPTION CON UN ELEMENTO OPTION DENTRO DE EL, POR CADA VALOR QUE SE ENCUENTRE EN LA VARIABLE
  // ITERADA ANTERIORMENTE
    option.value = color;
    // ESTO ADJUNDICA QUE EL VALOR QUE  VA A TENER EL ELEMENTO  PREVIAMENTE FORMADO SEA IGUAL A LA VARIABLE COLOR
  // PREVIAMENTE CREADA EN LA ITERACION DEL "Object.keys" ES IGUAL A : <option value=" CODIGO DE COLOR QUE SE 
  // ITERO ANTERIORMENTE"> </option>
    option.innerText = COLOR_PALETTE[color];
    // CREA QUE EL TEXTO QUE VA A TENER OPTION SEA IGUAL  AL VALOR QUE DA CADA LLAVE DEL ARRAY CREADO CON EL
    // con "Object.keys" ES IGUAL A : <option value=" CODIGO DE COLOR "> EL NOMBRE DEL COLOR QUE PERTENCE A 
    //DICHO CODIGO DE COLOR </option>

    colorPickerSelect.append(option);
    // SE LE UNE  AL ELEMENTO SLECT UN CHILD ELEMENT OPTION CON TODOS LOS VALORES DEFINIDOS ANTERIORMENTE
  })
}
/* ESTO VA  AHACER QUE AL SELECCIONAR DICHO COLOR, EL ORDENADOR ESTABLEZCA QUE LA KEY, EN ESTE CASO UN CODIGO DE COLOR,
SEA EL NUEVO VALOR DEL BACKGROUND Y ADEMAS SEA EL NUEVO VALOR DEL TAG h2*/

const addEventListenerToColorPicker = () => {
  // CREA UNA FUNCION QUE LUEGO SERA LLAMADA
  const colorPickerSelect = document.querySelector("#color-picker");
   // CREA UNA VARIABLE DONDE SE PUEDA LLAMAR LA SELECCION DE COLOR

  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (event) => {
    // console.log(event.target)
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    //Le asignamos a nuestro h2 el valor de la clave que hay almacenada en newColor al igual que hemos hecho en la primera función
    colorName.innerText = COLOR_PALETTE[newColor];

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}` 
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";

    const changemessage= document.querySelector("#message");



  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
