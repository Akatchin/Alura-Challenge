(() => {
let enviarForm = document.querySelector("#form-submit")

enviarForm.addEventListener("click", (e) => {
    e.preventDefault()
    const formName = document.querySelector("#formulario-name")
    const formEmail = document.querySelector("#formulario-email")
    const formAss = document.querySelector("#formulario-assunto")
    const formMensage = document.querySelector("#formulario-mensagem")

    let dados = JSON.parse(localStorage.getItem("datesUser"))

if(dados == null) {
    localStorage.setItem("datesUser", "[]")
    dados = []
}   alert("Sua mensagem foi enviada!")
    let registro = {
        nome: formName.value,
        email: formEmail.value, 
        assunto: formAss.value,
        mensagem: formMensage.value
    }
    
    dados.push(registro)
    localStorage.setItem("datesUser", JSON.stringify(dados))

}
)
})
()
