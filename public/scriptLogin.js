import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

//confere se esta no campo de cadastro ou de login
const formCadastro = document.getElementById("formCadastro");
const formLogin = document.getElementById("formLogin");
const erro = document.getElementById('alerta');



if (formCadastro){

//campo de cadastro
const emailInput = document.getElementById("emailCad");
const senhaInput = document.getElementById("senhaCad");
const confirma = document.getElementById("confirma");
const botaoCadInput = document.getElementById("cad");

//confirmando preenchimento dos campos
function checarPreenchido(){

    const ePreenchido = emailInput.value.trim() !== "" && senhaInput.value.trim() !== "" && confirma.value.trim() !== "";

    botaoCadInput.disabled = !ePreenchido;
}

checarPreenchido();

emailInput.addEventListener("input", checarPreenchido);
senhaInput.addEventListener("input", checarPreenchido);
confirma.addEventListener("input", checarPreenchido);

//adiciona o event listener pra que crie os emails no bd do firebase
formCadastro.addEventListener("submit", async(e) => {
    
    e.preventDefault()

if (senhaInput.value !== confirma.value){
    erro.textContent = "As senhas não coincidem, por favor verifique!";
    erro.classList.add('visivel');
    return;
}

try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailInput.value, senhaInput.value);
      alert("Cadastro realizado com sucesso!");
      window.location.href = "index.html";
    } catch (error) {
      tratarErrorsFirebase(error.code);
    }
});
}

if (formLogin) {

        //campo entrar
        const email = document.getElementById("email");
        const senha = document.getElementById("senha")
        const botaoEntInput = document.getElementById("entrar");


        //checa preenchimento
        function checarPreenchido(){

        const ePreenchido = email.value !== "" && senha.value !== "";

        botaoEntInput.disabled = !ePreenchido;
    }

    checarPreenchido()

    email.addEventListener("input", checarPreenchido)
    senha.addEventListener("input", checarPreenchido)

    //significa que ao clicar o botao de submit, recebe os valores
    formLogin.addEventListener("submit", async(e) => {
            e.preventDefault()
            
            try {
                await signInWithEmailAndPassword(auth, email.value, senha.value);
                alert("Login realizado com sucesso")
                window.location.href = "tela_Inicial.html"
            } catch(error){
                tratarErrorsFirebase(error.code);
            }
        }
    );
}

//codigos de erro
function tratarErrorsFirebase(code) {
         switch (code) {
            case "auth/email-already-in-use":
            erro.textContent = "Este e-mail já está cadastrado.";
            erro.classList.add('visivel');
            break;
            case "auth/invalid-email":
            erro.textContent = "Formato de e-mail invalido"
            erro.classList.add('visivel')
            break;
            case "auth/weak-password":
            erro.textContent.add = "A senha precisa ter no mínimo 6 caracteres.";
            erro.classList.add('visivel')
            break;
            case "auth/invalid-credential":
            case "auth/user-not-found":
            case "auth/wrong-password":
            erro.textContent = "E-mail ou senha incorretos.";
            erro.classList.add('visivel')
            break;
            default:
            erro.textContent =  "Erro na autenticação: " + code;
            erro.classList.add('visivel')
        }
    }