"use client"

import "./globals.css"
import style from "./head.module.css"
import Image from "next/image"
import Link from "next/link"
import { MouseEventHandler, RefObject, useRef, useState } from "react"
import Teste from "./(rotas)/teste/page"
import Catalogo from "./(rotas)/catalogo/page"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./GlobalRedux/store"
import { esconderBotaoPesquisa, increment, mostrarBotaoPesquisa, valorCampoInput } from "./GlobalRedux/reducers/reducers"
import { useRouter } from 'next/navigation';

export default function BarraMenu(){

    let containerInfos: RefObject<HTMLDivElement> = useRef(null);
    let pos: number;
    let num: number;
    let dispatch = useDispatch()
    let count = useSelector((state: RootState) => state.counter.values)
    let escondeMostraValor = useSelector((state: RootState) => state.counter.valorBotaoPesquisa)
    let valorCampoInpu = useSelector((state: RootState) => state.counter.valorCampoInput)
    let PegarValorCampoPesquisa: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

    const router = useRouter();

    let filtro = ["banana", "maçã", "tomate", "uva", "melão", "melancia"]
    let [novoFiltro, setNovoFiltro] = useState<string[]>([])
    
    function mostrarValorCampo(){
        let valoresInput = PegarValorCampoPesquisa.current?.value
        let valores = filtro.filter(string => string.includes(valoresInput!!))
        setNovoFiltro(valores)
        dispatch(valorCampoInput(valoresInput!!))
    }

    function inicia() {
        pos = 0;
        anima();
    }

    function mostrarCatalogo():MouseEventHandler<HTMLDivElement> | any{
        dispatch(increment())
    }

    function anima() {
        if (pos >= 1300) {
            num = -1;
        }
        else if (pos <= 0) {
            num = 1;
        }
        pos += num * 0.5;

        if (containerInfos.current) {
            containerInfos.current.style.left = pos + "px";
        }

        if (pos >= 0 && pos <= 1300) {
            requestAnimationFrame(anima);
        }
    }

    function mostrarPesquisa(){
        dispatch(mostrarBotaoPesquisa())
    }

    function bloquearClick(e: React.MouseEvent<HTMLDivElement>){
        e.stopPropagation();
    }  
    
    function pesquisar(){
        let valorEnviar = valorCampoInpu.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        router.push(`/pesquisa/${valorEnviar}`);
        dispatch(valorCampoInput(""))
        dispatch(esconderBotaoPesquisa())
    }

    function mandarParaPerfilUsuario(){
        router.push("/perfil")
    }

    function mandarParaCadastrar(){
        router.push("/cadastre-se")
    }

    function mandarParaEntrar(){
        router.push("/entrar")
    }

    inicia();

    return(
        <div>
            <div className={style.centro}>
                <div className={style.barramenu}>
                    <div className={style.juncao} >
                        <Image onMouseEnter={mostrarCatalogo} width={36} height={50} src="/Image/barra.png" alt="logo" className={style.barraimg}/>
                        <p className={style.nomeBarraCatalogo}>Catálogo de Produtos</p>
                    </div>
                    <div onClick={bloquearClick} className={style.englob}>
                        <input value={valorCampoInpu} spellCheck="false" onChange={mostrarValorCampo} ref={PegarValorCampoPesquisa} onFocus={mostrarPesquisa} type="text" className={style.fundoBarraPesquisa} placeholder="Pesquise algum produto"/>
                        <div style={{display: escondeMostraValor?"block":"none"}}>
                            <input onClick={pesquisar} type="button" className={style.botaoPesquisa}/>
                            <Image onClick={pesquisar} src="/Image/lupa.svg" alt="logo" width={20} height={20} className={style.imagemPesquisar}/>
                        </div>
                    </div>
                        <Image src="/Image/logo.png" alt="logo" width={108} height={49} className={style.logoimg}/>
                    <div className={style.juntar2}>
                        <Image onClick={mandarParaPerfilUsuario} src="/Image/perfil.png" alt="pefil" width={35} height={35} className={style.perfilimg}/>
                        <div className={style.organizar}>
                            <div onClick={mandarParaCadastrar} className={style.cadastrese}>cadastre-se</div>
                            <div onClick={mandarParaEntrar} className={style.entrar}>Entrar</div>
                        </div>
                    </div>
                </div>

                <Teste display={escondeMostraValor} valores={novoFiltro}/>
                
                <Catalogo display={count}/>
            
                <div className={style.barraconteudo}>
                    <Link style={{textDecoration:"none"}} href={"/cupons"}>
                        <p style={{marginLeft:"15px", marginRight:"15px" }} className={style.conteudos}>
                            <Image src="/Image/cupom.png" alt="" width={27} height={17} className={style.tamanhoCupo}/>Cupons
                        </p>
                    </Link>
                    <Link style={{textDecoration:"none"}} href={"/suporte"}>
                        <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                            <Image src="/Image/suporte.png" alt="" className={style.tamanhoSupo} width={32} height={25}/>Suporte ao cliente
                        </p>
                    </Link>
                    <Link style={{textDecoration:"none"}} href={"/meusPedidos"}>
                        <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                            <Image src="/Image/pedidos.png" alt="" width={27} height={22} className={style.tamanhoPedi}/>Meus Pedidos
                        </p>
                    </Link>
                    <Link style={{textDecoration:"none"}} href={"/customizar"}>
                        <div className={style.organizarBorda}>
                            <p style={{marginLeft:"15px", marginRight:"15px", marginBottom:"-2px", marginTop:"-4px"}} className={style.conteudos}>
                                <Image style={{marginLeft:"-12px", marginTop:"4px", marginBottom:"4px"}} src="/Image/pincelNome.svg" alt="" width={24} height={24}/>
                                    <bdo className={style.tamanhoCada}>Produtos</bdo> 
                                    <bdo className={style.tamanhoCustom} style={{color:"rgb(255,0,0)"}}>C</bdo>
                                    <bdo className={style.tamanhoCustom} style={{color:"rgb(255,0,220)"}}>u</bdo>
                                    <bdo className={style.tamanhoCustom} style={{color:"rgb(198,0,255)"}}>s</bdo>
                                    <bdo className={style.tamanhoCustom} style={{color:"rgb(103,3,255)"}}>t</bdo>
                                    <bdo className={style.tamanhoCustom} style={{color:"rgb(32,0,255)"}}>o</bdo>
                                    <bdo className={style.tamanhoCustom} style={{color:"rgb(0,85,255)"}}>m</bdo>
                                    <bdo className={style.tamanhoCustom} style={{color:"rgb(0,185,255)"}}>i</bdo>
                                    <bdo className={style.tamanhoCustom} style={{color:"rgb(0,255,160)"}}>z</bdo>
                                    <bdo className={style.tamanhoCustom} style={{color:"rgb(32,255,46)"}}>a</bdo>
                                    <bdo className={style.tamanhoCustom} style={{color:"rgb(205,255,0)"}}>v</bdo>
                                    <bdo className={style.tamanhoCustom} style={{color:"rgb(255,164,7)"}}>e</bdo>
                                    <bdo className={style.tamanhoCustom} style={{color:"rgb(255,119,0)"}}>i</bdo>
                                    <bdo className={style.tamanhoCustom} style={{marginRight:"-10px",color:"rgb(255,3,3)"}}>s</bdo>
                            </p>
                        </div>
                    </Link>
                    <Link style={{textDecoration:"none"}} href={"/sugestoes"}>
                        <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                            <Image src="/Image/sugestao.png" alt="" width={24} height={22} className={style.tamanhoSuge}/>Sugestões
                        </p>
                    </Link>
                    <Link style={{textDecoration:"none"}} href={"/conversa"}>
                        <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                            <Image src="/Image/conversa.png" alt="" className={style.tamanhoConv} width={24} height={22}/>Conversa
                        </p>
                    </Link>
                    <Link style={{textDecoration:"none"}} href={"/favoritos"}>
                        <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                            <Image src="/Image/favorito.png" alt="" width={32} height={29} className={style.tamanhoFavo}/>Favoritos
                        </p>
                    </Link>
                    <Link style={{textDecoration:"none"}} href={"/cesta"}>
                        <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                            <Image src="/Image/cesta.png" alt="" width={25} height={20} className={style.tamanhoCest}/>Cesta
                        </p>
                    </Link>
                    <Link style={{textDecoration:"none"}} href={"/#"}>
                        <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                            <Image src="/Image/notificacoes.png" width={27} height={22} alt="" className={style.tamanhoNoti}/>Notificações
                        </p>
                    </Link>
                </div>

                <div className={style.barra_informacoes}>
                    <div className={style.containerDoContainer}>
                        <div ref={containerInfos} className={style.containerInfos}>
                            <p className={style.info1}>Frete <bdo style={{color:"rgb(8,255,0)", fontFamily: "bahRegular"}}>grátis</bdo> para todo o país</p>
                            <p className={style.info2}>Baixe já o nosso aplicativo a ganhe <bdo style={{color:"rgb(255,102,0)", fontFamily: "bahRegular"}}>5% de desconto</bdo> na primera compra</p>
                            <p className={style.info3}>Produtos <bdo style={{color:"rgb(8,255,0)", fontFamily: "bahRegular"}}>personalizaveis</bdo> de qualidade e preço baixo é só aqui!!</p>
                            <p className={style.info4}>Novas ofertas todos os dias</p>
                            <p className={style.info1}>Frete <bdo style={{color:"rgb(8,255,0)", fontFamily: "bahRegular"}}>grátis</bdo> para todo o país</p>
                            <p className={style.info2}>Baixe já o nosso aplicativo a ganhe <bdo style={{color:"rgb(255,102,0)", fontFamily: "bahRegular"}}>5% de desconto</bdo> na primera compra</p>
                            <p className={style.info3}>Produtos <bdo style={{color:"rgb(8,255,0)", fontFamily: "bahRegular"}}>personalizaveis</bdo> de qualidade e preço baixo é só aqui!!</p>
                            <p className={style.info4}>Novas ofertas todos os dias</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}