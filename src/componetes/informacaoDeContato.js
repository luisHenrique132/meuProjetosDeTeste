import React,{Suspense} from 'react'

const Butoes = React.lazy(() => import('./botoesDeRedeSociais'))

export const ContatoDeInfo = () => {
    return (
        <article>
            <h2>Contact info</h2>
            <div>
                <img src='../img/localizacao.png'/>
                <address>
                    <address>2912 meadawbrack Road</address>
                    <address>Los Angels,CA</address>
                    <address>90017</address>
                </address>
            </div>
            <div>
            <img src='../img/email.png'/>
                <address>lorem@ipsun.com</address>
            </div>
            <div>
            <img src='../img/telefone.png'/>
                <address>310-388-1823</address>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                    <Butoes link={['#','#','#','#','#']} src={['../img/fecebook.png','../img/instagram.png','../img/linkledin.png','../img/twite.png','../img/pin.png']}/>
            </Suspense>
        </article>
    )
}