import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const loginComGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // O token de acesso do Google (pode ser usado para acessar APIs do Google).
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      // Os dados do usuário logado
      const user = result.user;
      console.log("Usuário logado com sucesso:", user);
    })
    .catch((error) => {
      // Trate os erros aqui
      console.error("Erro no login:", error.message);
    });
};
