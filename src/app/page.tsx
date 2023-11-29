"use client"
import "./globals.css"
import style from "./Home.module.css"
import Image from "next/image"
import Link from "next/link"
import ProdTeste from "./(rotas)/produtos/produtoTeste"
import BarraMenu from "./cabeca"
import { Rodape } from "./rodape"
import { RefObject, Suspense, useEffect, useRef, useState } from "react"

import { produtos, produtos2, value, catalogo2Receber, catalogoReceber, imagemBannerReceber, imagemBannerDuploReceber } from "../interfaces"

import BannerSkelleton from "../skelletons/bannerSkelleton"
import React from "react"
import { useDispatch } from "react-redux"
import { esconderBotaoPesquisa, setProdutosPesquisaRecomendados } from "./GlobalRedux/reducers/reducers"

export interface dadosRecomendados {
    id: number 
    produto: string
    quantidade: number
    tempo: number
}

export default function Home() {
    
    let [dado, setDado] = useState<value[]>([]);
    let [indicadoresBanner, setIndicadoresBanner] = useState<number[]>([1])
    let [indicadoresBanner2, setIndicadoresBanner2] = useState<Omit<imagemBannerReceber, "id">[]>([])
    let [indicadoresBannerDuplo, setIndicadoresBannerDuplo] = useState<Omit<imagemBannerDuploReceber, "id">[]>([])
    let [produtos, setProdutos] = useState<Omit<produtos, "tipo">[]>([])

    let [produtos2, setProdutos2] = useState<Omit<produtos2, "tipo">[]>([])
    let [indicadoresCatalogo, setIndicadoresCatalogo] = useState<Omit<catalogoReceber, "id">[]>([])
    let [indicadoresCatalogo2, setIndicadoresCatalogo2] = useState<Omit<catalogo2Receber, "id">[]>([])

    let dispatch = useDispatch()

    let [tamanhoContainerSlides, setTamanhoContainerSlides] = useState<number>()
    let [tamanhoSlide, setTamanhoSlide] = useState<number>()
    const slideRef: RefObject<HTMLDivElement> = useRef(null);

    const indicadoresRefs = indicadoresBanner.map(() => React.createRef<HTMLDivElement>());

    let val = 0;
    let tempo = 3000
  
    function add() {
        val = (val + tamanhoSlide!!) % ((dado.length) * tamanhoSlide!!);
    }

    function mostrar(event: React.MouseEvent<HTMLDivElement>){
        let valorNumerico;
        
        if(slideRef.current){
            const valor = slideRef.current.style.marginLeft;
            valorNumerico = parseFloat(valor.replace(/[-%]/g, ''));
        }
        
        var lugar = 0

        indicadoresRefs.find((ele, ind)=>{
            if(ele.current === event.target){
                lugar = ind
            }
        })

        var posi = tamanhoSlide

        val = posi!! * lugar

        if (slideRef.current) {
            slideRef.current.style.marginLeft = `-${val}%` ;
        }
        
        for(var i = 0; i < (dado.length); i++){
                if(indicadoresRefs[lugar].current){
                    indicadoresRefs.map((item, indice)=>{
                        if(indice == lugar){
                            item.current!!.style.background = "black"
                            item.current!!.style.transition = "0.5s"
                        }else{
                            item.current!!.style.background = "rgb(167, 167, 167)"
                            item.current!!.style.transition = "0.5s"
                        }
                    })
                    break;
                }
        }

    }

    setInterval(mover, tempo)


    function frente() {
        let valorNumerico;
        if (slideRef.current) {
            if(val<(((100/dado.length)*dado.length)-100/dado.length)){
                val += (100 / (dado.length))
            }else{
                val = 0
            }
            slideRef.current.style.marginLeft = `-${val}%` ;
        }
        if(slideRef.current){
            const valor = slideRef.current.style.marginLeft;
            valorNumerico = parseFloat(valor.replace(/[-%]/g, ''));
        }
        var ind = 0
        var index = 0
        
        for(var i = 0; i < (dado.length); i++){
            if(index.toFixed(2) === valorNumerico?.toFixed(2)){
                if(indicadoresRefs[ind].current){
                    indicadoresRefs.map((item, indice)=>{
                        if(indice == ind){
                            item.current!!.style.background = "black"
                            item.current!!.style.transition = "0.5s"
                        }else{
                            item.current!!.style.background = "rgb(167, 167, 167)"
                            item.current!!.style.transition = "0.5s"
                        }
                    })
                    break;
                }
            }else{
                index += (tamanhoSlide!!)
                ind += 1
            }
        }
    }

    function voltar() {
        let valorNumerico;
        if (slideRef.current) {
            if(val>0){
                val -= (100 / (dado.length))
            }else{
                val = ((100 / (dado.length)) * (dado.length - 1))
            }
            slideRef.current.style.marginLeft = `-${val}%` ;
        }
        if(slideRef.current){
            const valor = slideRef.current.style.marginLeft;
            valorNumerico = parseFloat(valor.replace(/[-%]/g, ''));
        }
        var ind = 0
        var index = 0
        
        for(var i = 0; i < (dado.length); i++){
            if(index.toFixed(2) === valorNumerico?.toFixed(2)){
                if(indicadoresRefs[ind].current){
                    indicadoresRefs.map((item, indice)=>{
                        if(indice == ind){
                            item.current!!.style.background = "black"
                            item.current!!.style.transition = "0.5s"
                        }else{
                            item.current!!.style.background = "rgb(167, 167, 167)"
                            item.current!!.style.transition = "0.5s"
                        }
                    })
                    break;
                }
            }else{
                index += (tamanhoSlide!!)
                ind += 1
            }
        }
    }


    function mover() {
        let valorNumerico;
        if (slideRef.current) {
            add()
            slideRef.current.style.marginLeft = `-${val}%` ;
        }
        if(slideRef.current){
            const valor = slideRef.current.style.marginLeft;
            valorNumerico = parseFloat(valor.replace(/[-%]/g, ''));
        }
        var ind = 0
        var index = 0
        
        for(var i = 0; i < (dado.length); i++){
            if(index.toFixed(2) === valorNumerico?.toFixed(2)){
                if(indicadoresRefs[ind].current){
                    indicadoresRefs.map((item, indice)=>{
                        if(indice == ind){
                            item.current!!.style.background = "black"
                            item.current!!.style.transition = "0.5s"
                        }else{
                            item.current!!.style.background = "rgb(167, 167, 167)"
                            item.current!!.style.transition = "0.5s"
                        }
                    })
                    break;
                }
            }else{
                index += (tamanhoSlide!!)
                ind += 1
            }
        }
    }


    async function retorno() {
        try {
            const dados = await fetch("http://localhost:3001");
            const dadosRecomendados = await fetch("http://localhost:3001/pesquisa/recomendados")
            const users = await dados.json();
            const dadosRec = await dadosRecomendados.json()
            setDado(users.banner);
            var imagesBanner: value[] = users.banner
            var imagesBanner2: imagemBannerReceber[] = users.banner2
            var imagesBannerDuplo: imagemBannerDuploReceber[] = users.bannerDuplo
            var imageCatalogo: catalogoReceber[] = users.catalogo
            var imageCatalogo2: catalogo2Receber[] = users.catalogo2
            var produtos: produtos[] = users.produto
            var produtos2: produtos2[] = users.produto2
            var recomendados: dadosRecomendados[] = dadosRec

            const novosIndicadores: number[] = []; 
            const novasImagensBanner2: Omit<imagemBannerReceber, "id">[] = []; 
            const novasImagensBannerDuplo: Omit<imagemBannerDuploReceber, "id">[] = []; 
            const novosIndicadoresCatalogo: Omit<catalogoReceber, "id">[] = []; 
            const novosIndicadoresCatalogo2: Omit<catalogo2Receber, "id">[] = []; 
            const novosProdutos: Omit<produtos, "tipo">[] = []; 
            const novosProdutos2: Omit<produtos2, "tipo">[] = []; 

            imagesBanner.forEach((item) => {
                const numero = Number(item.id);
                if (!novosIndicadores.includes(numero)) {
                    novosIndicadores.push(numero);
                }
            });


            imagesBanner2.forEach((item) => {
                const numero = item.imagem;
                if (!novasImagensBanner2.includes({imagem: numero})) {
                    novasImagensBanner2.push({imagem: numero});
                }
            });

            imagesBannerDuplo.forEach((item) => {
                const imagem1 = item.imagem1;
                const imagem2 = item.imagem2;
                if (!novasImagensBannerDuplo.includes({imagem1: imagem1, imagem2: imagem2})) {
                    novasImagensBannerDuplo.push({imagem1: imagem1, imagem2: imagem2});
                }
            });

            imageCatalogo.forEach((item) => {
                const numeroCatalogo = item.imagem
                const nomeCatalogo = item.nome
                novosIndicadoresCatalogo.push({imagem: numeroCatalogo, nome: nomeCatalogo});
            });

            imageCatalogo2.forEach((item) => {
                const numeroCatalogo2 = item.imagem
                const nomeCatalogo2 = item.nome
                novosIndicadoresCatalogo2.push({imagem: numeroCatalogo2, nome: nomeCatalogo2});
            });

            produtos.forEach((item) => {
                const idProd = item.id
                const descontoProd = item.desconto
                const nomeProd = item.nome;
                const avaliacoesProd = item.avaliacoes
                const estrelasQuantProd = Number(item.estrelasQuantidade)
                const precoProd = Number(item.preco)
                const urlProd = item.url
                const formaDePagamentoProd = item.formaDePagamento 
                const sobreProd = item.sobre
                novosProdutos.push({id: idProd, url: urlProd, desconto: descontoProd, nome: nomeProd, avaliacoes: avaliacoesProd, estrelasQuantidade: estrelasQuantProd, preco: precoProd, formaDePagamento: formaDePagamentoProd, sobre: sobreProd});
            });

            produtos2.forEach((item) => {
                const idProd2 = item.id
                const descontoProd2 = item.desconto
                const nomeProd2 = item.nome;
                const avaliacoesProd2 = item.avaliacoes
                const estrelasQuantProd2 = Number(item.estrelasQuantidade)
                const precoProd2 = Number(item.preco)
                const urlProd2 = item.url
                const formaDePagamentoProd2 = item.formaDePagamento
                const sobreProd2 = item.sobre 
                novosProdutos2.push({id: idProd2, url: urlProd2, desconto: descontoProd2, nome: nomeProd2, avaliacoes: avaliacoesProd2, estrelasQuantidade: estrelasQuantProd2, preco: precoProd2, formaDePagamento: formaDePagamentoProd2, sobre: sobreProd2});
            });

            setIndicadoresCatalogo(novosIndicadoresCatalogo)
            setIndicadoresCatalogo2(novosIndicadoresCatalogo2)
            setIndicadoresBanner(novosIndicadores);
            setIndicadoresBanner2(novasImagensBanner2);
            setIndicadoresBannerDuplo(novasImagensBannerDuplo);
            setProdutos(novosProdutos)
            setProdutos2(novosProdutos2)
            console.log(recomendados)
            dispatch(setProdutosPesquisaRecomendados(recomendados))

        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    }

    function setarDisplay(){
        dispatch(esconderBotaoPesquisa())
    }
    
    useEffect(() => {
        if(indicadoresRefs[0].current != null){
            indicadoresRefs[0].current.style.background = "black"
        }
    },[indicadoresRefs])

    useEffect(() => {
        retorno();
    }, []);

    useEffect(() => {
        if(dado.length > 0){
            setTamanhoContainerSlides((dado.length) * 100)
            setTamanhoSlide(tamanhoSlide = 100/(dado.length))
        }
    }, [dado]);


  return (
    <div onClick={setarDisplay} className={style.pagina}>
        <BarraMenu/>


        <Suspense fallback={<><BannerSkelleton/></>}>
            <div className={style.container}>

                <div className={style.ir} onClick={frente}></div>
                <div className={style.voltar} onClick={voltar}></div>

                <div style={{height: "100%", width: `${tamanhoContainerSlides}%`, display: "flex"}}>
                    
                    {dado.map((item, index)=>{
                        if(index === 0){
                            return(
                                <div style={{width: `${tamanhoSlide}%`, height: "100%", transition: "1s", marginLeft: "0%"}} ref={slideRef} id="slide1">
                                    <Image className={style.imagem} src={`${item.image}`} alt="" height={200} width={500}/>
                                </div>            
                            )
                        }else{
                            return(
                                <div style={{width: `${tamanhoSlide}%`, height: "100%", transition: "1s"}} key={index}>
                                    <Image className={style.imagem} src={`${item.image}`} alt="" height={200} width={1200}/>
                                </div>
                            )
                        }
                    })}
                </div>

                <div className={style.indicadores}>
                    {indicadoresBanner.map((item, index) => {
                        const id = `bola${item}`;
                        return (
                            <div key={id}>
                                <div ref={indicadoresRefs[index]} onClick={(event)=>mostrar(event)} id={id} className={style.bola}>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Suspense>
        
        <div className={style.centroCatalogo}>
            {indicadoresCatalogo.map((item, index) => {
                return (
                    <>
                        <div className={style.organizar}>
                            <Image className={style.catalogo} style={{top:"25%", left:"25%", borderRadius:"50%"}} alt="" width={50} height={50} src={`${item.imagem}`}/>
                            <p>{item.nome}</p>
                        </div>
                    </>
                )
            })
        }
        </div>

        <div className={style.barraCatalogo}>
            <p className={style.alinhamento}>Roupas</p>
            <p className={style.alinhamento}>Acessórios</p>
            <p className={style.alinhamento}>Eletônicos</p>
            <p className={style.alinhamento}>Decoração</p>
            <p className={style.alinhamento}>Beleza</p>
            <p className={style.alinhamento}>Brinquedos</p>
            <div className={style.alinhamentoMais}>
                <p className={style.arrumar_mais}>Mais</p>
                <Image src="/Image/paraFrente.png" width={15} height={22} alt="" className={style.seta}/>
            </div>
        </div>
        <div className={style.alinhar_resto}>
            <div className={style.centroProdCustom}>
                {produtos.map((item, index)=>{
                    return(
                            <Link className={style.produtosAuto} href={`/produtos/${item.id}`}>
                                <ProdTeste sobre={item.sobre} id={item.id} url={item.url} desconto={item.desconto} nome={item.nome} avaliacoes={item.avaliacoes} estrelasQuantidade={item.estrelasQuantidade} preco={item.preco} formaDePagamento={item.formaDePagamento}/>
                            </Link>
                    )})
                }
            </div>

            <div className={style.frete}>
                <p className={style.nomeFrete}>
                    <Image src="/Image/bandeira-do-brasil.png" width={27} height={17} className={style.bandeira} alt=""/>Frete Grátis para todo o Brasil
                    <Image src="/Image/bandeira-do-brasil.png" width={27} height={17} className={style.bandeira} alt=""/>
                </p>
            </div>

            <div className={style.juntar}>
                {indicadoresCatalogo2.map((item, index)=>{
                    return(
                        <div className={style.organizar}>
                            <Image src={`${item.imagem}`} width={150} height={120} className={style.produtos2} alt=""/>
                            <p className={style.nomeCatalogo2}>{item.nome}</p>
                        </div>
                    )})
                }

            </div>

            <div className={style.centralizarBanner}>
                {indicadoresBanner2.map((item, index)=>{
                    return(
                        <div >
                            <Image className={style.banner3} src={`${item.imagem}`} width={150} height={120} alt=""/>
                        </div>
                    )})
                }
            </div>

            <div>
                {indicadoresBannerDuplo.map((item, index)=>{
                    return(
                        <div className={style.juncaoBanners}>
                            <Image className={style.baner4} src={`${item.imagem1}`} width={150} height={120} alt=""/>
                            <Image className={style.baner5} src={`${item.imagem2}`} width={150} height={120} alt=""/>
                        </div>
                    )})
                }
            </div>

            <div className={style.centroProdCustom}>
                {produtos2.map((item, index)=>{
                    return(
                            <Link className={style.produtosAuto} href={"/produtos"}>
                                <ProdTeste sobre={item.sobre} id={item.id} url={item.url} desconto={item.desconto} nome={item.nome} avaliacoes={item.avaliacoes} estrelasQuantidade={item.estrelasQuantidade} preco={item.preco} formaDePagamento={item.formaDePagamento}/>
                            </Link>
                    )})
                }
            </div>

        </div>

        <Rodape/>
    </div>
  )
}
