let bloqueImagenes = document.getElementById("imagenes");
let bloqueChistes = document.getElementById("chistes");
let bloqueFrases = document.getElementById("frases");
let bloqueAcertijos = document.getElementById("acertijos");

//En la parte de acertijos, la respuesta se guardara aqui
let respuestaAcertijo = "";

//Se obtienen todos los articulos en un array para realizar una operacion mas adelante
let articulos = document.querySelectorAll("article");

document.getElementById("btnImagenes").onclick = function(){
    mostrarImagen();
}
document.getElementById("btnChistes").onclick = function(){
    mostrarChiste();
}
document.getElementById("btnFrases").onclick = function(){
    mostrarFrase();
}
document.getElementById("btnAcertijos").onclick = function(){
    mostrarAcertijo();
}
document.getElementById("respuestaAcertijo").onclick = function(){
    mostrarRespuestaAcertijo();
}

function verificarBloques(){
    //Se itera por los elementos del array
    articulos.forEach((articulo) => {

        //Si existe mas de un elemento en el array, se elimina
        //Esto sirve para que no se amontonen las imagenes, frases, etc
        //Luego se volvera a cargar otra imagen, frase, etc
        if(articulo.childElementCount > 1){

            //Si se esta en el bloque de acertijos y hay tres elementos en el bloque
            if(articulo.id == "acertijos" && articulo.childElementCount == 3){
                //Se eliminara el segundo elemento antes de eliminar el ultimo
                //El ultimo elemento corresponderia a la respuesta del acertijo, y el segundi
                //al acertijo como tal
                articulo.removeChild(articulo.lastChild.previousSibling);
            }
            articulo.removeChild(articulo.lastChild);
            
            
            
        }
    });
}


//Todo lo que se genere se pasa a esta funcion para devolver un elemento de un array aleatorio
function generarAlgoAleatorio(array){
    let indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

function generarImagenAleatoria(){
    //Imagenes sacadas de internet. 
    let ListaImagenes = ["https://i.pinimg.com/236x/8b/36/da/8b36daccf4cb535b0be535bc32f13537.jpg",
    "https://i.pinimg.com/236x/9b/19/cd/9b19cda3a8bfcd8bb4edf9cdc711a3cd.jpg",
    "https://i.pinimg.com/236x/88/a7/f3/88a7f3d5883b02e23a4fc2fcd7d5b0dc.jpg",
    "https://i.pinimg.com/236x/39/d3/15/39d31504c3699d07e5ecb07c8212928e.jpg",
    "https://i.pinimg.com/236x/fa/79/51/fa795192f0378c9ccf95e1a8547f7611.jpg",
    "https://i.pinimg.com/236x/ab/82/c5/ab82c52ba57a579de4db3fc4304a75bb.jpg",
    "https://i.pinimg.com/236x/27/89/89/2789891e40287f62a1a669721ffac914.jpg",
    "https://i.pinimg.com/236x/48/59/c3/4859c325db404099117ac5b3dbaee165.jpg",
    "https://i.pinimg.com/236x/43/47/b1/4347b195e153df2fd4fcc48dd2bc5f25.jpg",
    "https://i.pinimg.com/236x/94/fe/aa/94feaade2e98a7421f8d89c4103698c4.jpg"];

    //Se obtiene una imagen aleatoria y se devuelve
    let imagenAleatoria = generarAlgoAleatorio(ListaImagenes);
    return imagenAleatoria;
}

function mostrarImagen(){

    //Se verifica que no hayan mas de dos elementos en el bloque
    verificarBloques();

    //Se crea el elemento de imagen
    let imagen = document.createElement("img");
    //Se le dan atribytos
    imagen.src = generarImagenAleatoria();
    imagen.alt = "Imagen aleatoria";
    //Se agrega la imagen al bloque
    bloqueImagenes.appendChild(imagen);
}

function generarChisteAleatorio(){
    let arrayChistes = ["—Oye, ¿sabes cómo se llaman los habitantes de Barcelona?<br> —Hombre, pues todos no.",
"—¿Dónde vas, Antonio?<br> —A por estiércol para las fresas.<br> —¿Pero por qué no te las comes con nata, como todo el mundo?",
"—Doctor, tengo todo el cuerpo cubierto de pelo. ¿Qué padezco?<br> —Padece uzté un ozito.",
"—Hombre, Juan, cómo has cambiado.<br>—Yo no soy Juan.<br>—Más a mi favor.",
"–Gol.<br>–¿De quién?<br> –Di María.<br> –María, pero quién ha marcado el gol.",
"—Mamá, en el cole me llaman despistado.<br>—Niño, que esta no es tu casa.",
"—¿Pero qué haces hablando con una zapatilla.<br>—Aquí pone “CONVERSE”.",
"—Parece que su tos está mejor.<br>—Sí, estuve practicando toda la noche.",
"—¡Camarero! Este filete tiene muchos nervios.<br>—Normal, es que es la primera vez que se lo comen.",
"—Deme dos barras de pan, por favor. Y si tiene huevos, dos docenas.<br>Y le dio VEINTICUATRO BARRAS DE PAN."];
let chisteAleatorio = generarAlgoAleatorio(arrayChistes);
return chisteAleatorio;
}

function mostrarChiste(){
    verificarBloques();
    let chiste = document.createElement("p");
    chiste.classList.add("parrafo");
    chiste.innerHTML = generarChisteAleatorio();
    bloqueChistes.appendChild(chiste);
}

function generarFraseAleatoria(){

    //Se utiliza un array de objetos de tipo key:value
    let frasesConAutor = [{frase:"El único modo de hacer un gran trabajo es amar lo que haces ",autor:"Steve Jobs"},
    {frase:"Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo"
    ,autor:"Michael Jordan"},
    {frase:"El dinero no es la clave del éxito; la libertad para poder crear lo es",autor:"Nelson Mandela"},
    {frase:"La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica"
    ,autor:"Aristoteles"},
    {frase:"Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan"
    ,autor:"Elon Musk"},
    {frase:"Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro",autor:"Colin Powell"},
    {frase:"Cuéntamelo y me olvidaré. enséñamelo y lo recordaré. involúcrame y lo aprenderé",autor:"Benjamin Franklin"},
    {frase:"La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar ",autor:"Albert Einstein"},
    {frase:"Cuando pierdas, no pierdas la lección",autor:"Dalai Lama"},
    {frase:"No cuentes los días, haz que los días cuenten ",autor:"Muhammad Ali"},];

    let fraseAleatoria = generarAlgoAleatorio(frasesConAutor);
    return fraseAleatoria;

}
function mostrarFrase(){
    verificarBloques();
    let frase = document.createElement("p");
    frase.classList.add("parrafo");
    //Esta funcion devolvera un objeto
    let objetoFrase = generarFraseAleatoria();
    //Se obtiene la frase y el autor

    //Al ser un objeto, se pueden acceder a sus propiedades, o keys para acceder a los values
    frase.innerHTML = "'" + objetoFrase.frase + "' <br><br> -" + objetoFrase.autor + ".";
    bloqueFrases.appendChild(frase);
}

function generarAcertijo(){
    let acertijosConRespuesta = [{acertijo:"Entra duro y grande en la boca, pero sale blando y pequeño. ¿Qué es?"
    ,respuesta:"Un chicle"},
    {acertijo:"Húmedo por dentro, con pelos por fuera. Comienza por la C. ¿De qué se trata?",respuesta:"Un coco"},
    {acertijo:"Lo levanto cuando estoy contento, pero es más pequeño que el resto. ¿Qué es?",respuesta:"El pulgar"},
    {acertijo:"David y Fabián están jugando al ajedrez. Llevan 5 partidas, pero ambos han ganado 3. ¿Cómo es posible?"
    ,respuesta:"Porque juegan con más personas, no entre ellos."},
    {acertijo:"Me ves en verano y no en invierno y estoy metido en entre las manos, ya sea abierto o cerrado. ¿Qué soy?"
    ,respuesta:"Un abanico"},
    {acertijo:"Las mujeres no la tienen, pero los hombres sí. Los toros tienen dos, igual que un obispo. ¿Qué soy?"
    ,respuesta:"La letra O"},
    {acertijo:"Estoy rodeado de pelos y estoy en el medio. Tengo una abertura que puedes ver que se abre y se cierra. ¿Qué soy?"
    ,respuesta:"Un ojo"},
    {acertijo:"Aunque comience por la noche, termino prácticamente por la mañana. ¿Qué puedo ser?"
    ,respuesta:"La letra N"},
    {acertijo:"Hay algo que, aunque te pertenezca, la gente siempre lo utiliza más que tú. ¿Qué es?"
    ,respuesta:"Tu nombre"},
    {acertijo:"Soy alto siendo joven y corto cuando soy viejo. Resplandezco con la vida y el viento es mi mayor enemigo. ¿Qué soy?"
    ,respuesta:"Una vela"},]

    let acertijoAleatorio = generarAlgoAleatorio(acertijosConRespuesta);
    return acertijoAleatorio;
}

function mostrarAcertijo(){
    verificarBloques();
    let acertijo = document.createElement("p");
    acertijo.classList.add("parrafo");
    let objetoAcertijoYRespuesta = generarAcertijo();
    //Solamente se muestra la frase
    acertijo.innerHTML = objetoAcertijoYRespuesta.acertijo + "<br>";
    //Se guarda la respuesta en una variable global
    respuestaAcertijo = objetoAcertijoYRespuesta.respuesta;
    bloqueAcertijos.appendChild(acertijo);
}

function mostrarRespuestaAcertijo(){
    //Si hay mas de un elemento en el bloque, significa que se esta mostrando el acertijo
    
    if(bloqueAcertijos.childElementCount > 1){

        //Se verifica si no hay 3 elementos en el bloque
        if(bloqueAcertijos.childElementCount != 3){

            //Si es asi, entonces se agrega el nuevo elemento con la respuesta
           let elementoRespuesta = document.createElement("p");
           elementoRespuesta.classList.add("parrafo");
            elementoRespuesta.textContent = "-" + respuestaAcertijo;
            bloqueAcertijos.append(elementoRespuesta);
        }
        //De lo contrario, no se hara nada.
    }else{
        alert("No ha seleccionado un acertijo para poder mostrar la respuesta");
    }
}