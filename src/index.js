
 import React, {Fragment} from 'react'
 import ReactDOM from 'react-dom'
 import {ContatoDeInfo} from './componetes/informacaoDeContato'
 import {Form} from './componetes/formulario'




const App = () => {
    return (<Fragment>
        <ContatoDeInfo/>
        <Form informacaoDeCampo={[
            {
              nome : 'first_name' ,
              tipoDeInput : 'text',
              conteudoDosLabels : 'First Name'
            },
            {
                nome : 'last_name' ,
                tipoDeInput : 'text',
                conteudoDosLabels : 'Last Name'
              },
              {
                nome : 'email' ,
                tipoDeInput : 'email',
                conteudoDosLabels : 'Email Address'
              },
              {
                nome : 'mobile_number' ,
                tipoDeInput : 'number',
                conteudoDosLabels : 'Mobile Number'
              }
        ]}/>
    </Fragment>)
}

ReactDOM.render(<App/>,document.getElementById('root'))