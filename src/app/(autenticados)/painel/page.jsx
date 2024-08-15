import CardChamada from "@/components/CardChamada";

const turma = [
    {
        id: 1,
        numero: '001',
        nome: '1° SERIE'
    },
    {
        id: 2,
        numero: '002',
        nome: '2° SERIE'
    },
    {
        id: 3,
        numero: '003',
        nome: '3° SERIE'
    },
]


export default function Painel() {
   

        return (

            <section className="container mx-auto flex items-center gap-5 flex-wrap justify-center">
                {
                    turma.map((item) => {
                        return (
                            <CardChamada turma={item.numero} nome={item.nome} id={item.id} key={item.id} />
                        )
                    })
                }

                
            </section>

        )
    }
