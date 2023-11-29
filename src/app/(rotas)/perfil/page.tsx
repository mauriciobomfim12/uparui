import "../../globals.css"
import style from "./perfil.module.css"
import Image from "next/image"

export default function Perfil(){
    return(
        <>


            <Image src="/Image/cadastrar.png" alt="cadstro" className={style.cadastroimg} width={80} height={35}/>
        </>
    )
}