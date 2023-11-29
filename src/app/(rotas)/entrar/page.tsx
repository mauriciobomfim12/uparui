import "../../globals.css"
import BarraMenuEntrar from "./cabecaEntrar"
import style from "./entrar.module.css"
import Image from "next/image"

export default function Entrar(){
    return(
        <>
            <BarraMenuEntrar/>
            <div className={style.centralizar}>
                <div className={style.cadastro}>
                    <div style={{display:"flex"}}>
                        <Image quality={100} className={style.centrarlizarImagem} src="/Image/carrinhoLogin.svg" alt="" height={40} width={40}/>
                        <Image quality={100} className={style.centrarlizarImagem} src="/Image/XLogin.svg" alt="" height={40} width={40}/>
                    </div>
                    <p className={style.centralizarLogin}>Login</p>
                    <input className={style.centralizarEmail}/>
                    <input className={style.centralizarSenha}/>
                    <p className={style.centralizarNome}>Você também pode entrar com</p>
                    <Image className={style.centralizarGmail} src="/Image/logoLogin.svg" alt="" height={30} width={30}/>
                    <Image className={style.centralizarFacebook} src="/Image/logoLogin.svg" alt="" height={30} width={30}/>
                    <p className={style.centralizarCriarConta}>Não tem uma conta? Crie agora <bdo>clicando aqui</bdo></p>
                </div>
            </div>
        </>
    )
}