const btn = document.querySelector("#my-button")

btn.addEventListener("click", function(){
    console.log("Clicou!")
})


const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");
thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
    btn.removeEventListener("click", function(){
        console.log("Clicou!")
    })
})

const title = document.querySelector("#my-title");

title.addEventListener("click", (event) =>{
    // console.log(event)
    console.log(e.offsetX);
})

const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    console.log("Evento 2");
    e.stopPropagation();
});

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não alterou a página");
})

document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})
document.addEventListener("keydown", (e) => {
    console.log(`Pressionou a tecla ${e.key}`);
});

const mouseEvents = document.querySelector("#mouse");
mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
});
mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
});
mouseEvents.addEventListener("mouseup", () => {
    console.log("Clique duplo");
});
window.addEventListener("scroll", (e) => {
    if (window.scrollY > 200){
        console.log("Passamos 200px!");
    }
})