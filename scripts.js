//constante = não muda valor durante o programa
///const msg = "Hello World!"
///alert(msg)
///alert("Hello World!")

//const celular = {
//cor: "preto",
//ligar: function () {
//const mensagem = "Ligando..."
//alert(mensagem)
//},
//}
///chamar propriedade
///celular.cor

///chamar uma função
//celular.ligar()

///----------

//muda a cor de fundo para branco
//document.body.style.backgroundColor = "white"

//realizar determinar ação apartir do clique do mouse
//document.querySelector("input").click()
///document = documento html

const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

//const data = {
//run: ["01-16", "01-17", "01-19", "01-21"],
//water: ["01-16", "01-19"],
//food: ["01-17", "01-21"],
//gyn: ["01-21"],
//takePills: ["01-17"],
//journal: ["01-20"],
//game: ["01-21"],
//bike: ["01-16", "01-21"],
//}

const button = document.querySelector("header button")
//ouve um evento
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  ///alert("ta funcionando")
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já esta incluso! ⛔")
    ///para o pragrama e não segue adiante
    return
  }
  alert("Dia Aadicionado com sucesso! ✅")
  nlwSetup.addDay(today)
}

function save() {
  ///console.log(nlwSetup.Data)
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
