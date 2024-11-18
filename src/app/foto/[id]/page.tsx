export default async function FotoIdPage({params}: {params: {id:number}}){
    return (
        <main>
            <h1>FotoId: {params.id}</h1>
        </main>
    )
}