import style from "./rodape.module.css"
import Image from "next/image"

export function Rodape(){
    return(
        <div>
            <div className={style.rodape_maisinfo}>
                <div className={style.alinhar_maisinfo}>
                    <p className={style.rodape_maisinfo_person}>Sobre nós</p>
                    <p className={style.rodape_barra}></p>
                    <p className={style.rodape_maisinfo_person}>Baixe o app</p>
                    <p className={style.rodape_barra}></p>
                    <p className={style.rodape_maisinfo_person}>Troca ou devolução</p>
                </div>
            </div>

            <div className={style.rodape}>
                <div className={style.alinhar_rodape}>
                    <div className={style.rodape_pagamentos}>
                        <p className={style.nome_rodape_pagamento}>Aceitamos as seguintes formas 
                        de pagamento</p>
                        <div className={style.organizar_pagamento}>
                            <Image style={{marginLeft:"20px"}} alt="" height={30} width={30} src="/Image/boleto.svg"/>
                            <p className={style.pagamento_boleto}>Boleto</p>
                            <Image style={{marginLeft:"20px"}} alt="" height={30} width={30} src="/Image/pix.svg"/>
                            <p className={style.pagamento_pix}>Pix</p>
                            <Image style={{marginLeft:"20px"}} alt="" height={30} width={30} src="/Image/cartao.svg"/>
                            <p className={style.pagamento_cartao}>Cartão de crédito e débito</p>
                        </div>
                    </div>
                    <div className={style.rodape_logo}>
                        <Image style={{marginTop:"-5px"}} alt="" height={80} width={170} src="/Image/logoR.png"/>
                        <p className={style.rodape_objetivo}>Nosso objetivo é tornar a sua vida
                        muito mais customizável</p>
                        <p className={style.nome_plataformas}>Estamos em todas as plataformas</p>
                        <div style={{display: "flex"}}>
                            <Image style={{marginLeft:"10px"}} alt="" height={40} width={40} src="/Image/facebook.svg"/>
                            <Image style={{marginLeft:"10px"}} alt="" height={40} width={34} src="/Image/instagram.svg"/>
                            <Image style={{marginLeft:"10px"}} alt="" height={40} width={34} src="/Image/tiktok.svg"/>
                            <Image style={{marginLeft:"10px"}} alt="" height={40} width={34} src="/Image/twitter.svg"/>
                        </div>
                    </div>
                    <div className={style.rodape_contato}>
                        <p className={style.nome_rodape_contato}>Entre em contato conosco através do 
                        nosso suporte ao cliente acessando</p>
                        <p className={style.contatos}>nosso site www.customxperience/suporte-ao-cliente</p>
                        <p className={style.contatos}>email customXeperience@gmail.com</p>
                        <p className={style.contatos}>telefone para contato (71) 98706-6509</p>
                    </div>
                    <div className={style.rodape_termos}>
                        <p>Política de privacidade</p>
                        <p>|</p>
                        <p>Politica de troca</p>
                        <p>|</p>
                        <p>Termos de uso</p>
                        <p>|</p>
                        <p>Regras para vendas conosco</p>
                    </div>
                </div>
            </div>
        </div>
    )
}