"use client"
import Link from "next/link";


export default function CardChamada(props) {

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <div className="flex items-center justify-center h-60 bg-white">
                TURMA {props.turma}
            </div>
            <div className="card-body">
                <h2 className="card-title">TURMA {props.turma}</h2>
                <p>BEM VINDO A SUA TURMA {props.nome}</p>
                <div className="card-actions justify-end">
                    <Link href={`/painel/chamada/${props.id}`}> 
                    <button className="btn btn-primary" >
                        FAZER CHAMADA
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

