import React,{Fragment} from 'react'


function animacaoDeCampo(label) {
    label.style.transform = 'translateY(-32px) scale(1.1,1)'
    label.style.color = "rgb(217, 255, 0)"
    label.style.marginLeft = '5px'

    return
}

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.animacaoDeClck = this.animacaoDeClck.bind(this)
        this.validacao = this.validacao.bind(this)
        this.enviarDados = this.enviarDados.bind(this)
        this.state = {
            first_name : '',
            last_name : '',
            mobile_number : '',
            email : '',
            message : ''
        }
    }
    enviarDados() {
        console.log(this.state)
    }
    validacao(val,e) {

        if(val == 'first_name') {
            this.setState({first_name : e.target.value})

        } else if(val == 'last_name') {
            this.setState({last_name : e.target.value})

        } else if (val == 'email') {
            this.setState({email : e.target.value})

        } else if(val == 'mobile_number') {
            this.setState({mobile_number : e.target.value})
        } else if(val == 'textarea') {
            this.setState({message : e.target.value})
        }
    }
    animacaoDeClck(val) {
        let labels = document.getElementsByTagName('label')
        
        if(val == 'first_name') {
            animacaoDeCampo(labels[0])

        } else if(val == 'last_name') {
            animacaoDeCampo(labels[1])

        } else if (val == 'email') {
            animacaoDeCampo(labels[2])

        } else if(val == 'mobile_number') {
            animacaoDeCampo(labels[3])
         }
    }
    render() {
        return (
            <form>
                <h2>Send a message</h2>
                {
                    this.props.informacaoDeCampo.map((obj) => {
                        let val
                        if(obj.nome === 'first_name') val = this.state.first_name
                        else if(obj.nome === 'last_name') val = this.state.last_name
                        else if(obj.nome === 'mobile_number') val = this.state.mobile_number
                        else if(obj.nome === 'email') val = this.state.email

                        return (
                            <div onClick={this.animacaoDeClck.bind(this,obj.nome)} key={obj.nome}>
                            <label htmlFor={obj.nome}>{obj.conteudoDosLabels}
                            </label>
                            <input type={obj.tipoDeInput} onChange={this.validacao.bind(this,obj.nome)} value={val}  name={obj.nome}  aria-required='true'/>
                        </div>
                        )
                    })
                }
                
                <textarea onClick={this.animacaoDeClck.bind(this,'textarea')} onChange={this.validacao.bind(this,'textarea')} value={this.state.message} placeholder='Write your mssage here...'></textarea>
                <button type='button' onClick={this.enviarDados}>Send</button>
            </form>
        )
    }
}

export {Form}

