import style from './catalogo.module.css'
import "../../globals.css"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/GlobalRedux/store';
import { decrement } from '@/app/GlobalRedux/reducers/reducers';

export default function Catalogo(props: {display: React.ReactNode}){

    let dispatch = useDispatch();
    let count = useSelector((state: RootState) => state.counter.values)
    

    function saiu(){
        dispatch(decrement())
    }

    return(
        <div style={{display: props.display?"block":"none"}} className={style.pagina}>
            <div onMouseLeave={saiu} className={style.container}>
                <div className={style.barrinha}></div>
                <div>
                    <p>Roupas</p>
                    <bdo></bdo>
                    <div>
                        <p>camisas</p>
                        <p>sapatos</p>
                        <p>chapeus</p>
                        <p>outros</p>
                    </div>
                </div>
                <div>
                    <p>Acessórios</p>
                    <bdo></bdo>
                    <div>
                        <p>Relógio</p>
                        <p>Corrente</p>
                        <p>Óculos</p>
                        <p>Anel</p>
                        <p>Outros</p>
                    </div>
                </div>
                <div>
                    <p>Eletrônicos</p>
                    <bdo></bdo>
                    <div>
                        <p>Celular</p>
                        <p>Computador</p>
                        <p>Notebook</p>
                        <p>Geladeira</p>
                        <p>Microondas</p>
                        <p>Outros</p>
                    </div>
                </div>
                <div>
                    <p>Decoração</p>
                    <bdo></bdo>
                    <div>
                        <p>Celular</p>
                        <p>Computador</p>
                        <p>Notebook</p>
                        <p>Geladeira</p>
                        <p>Microondas</p>
                        <p>Outros</p>
                    </div>
                </div>
                <div>
                    <p>Beleza</p>
                    <bdo></bdo>
                    <div>
                        <p>Celular</p>
                        <p>Computador</p>
                        <p>Notebook</p>
                        <p>Geladeira</p>
                        <p>Microondas</p>
                        <p>Outros</p>
                    </div>
                </div>
                <div>
                    <p>Para seu bebê</p>
                    <bdo></bdo>
                    <div>
                        <p>Celular</p>
                        <p>Computador</p>
                        <p>Notebook</p>
                        <p>Geladeira</p>
                        <p>Microondas</p>
                        <p>Outros</p>
                    </div>
                </div>
            </div>
        </div>
    )
}