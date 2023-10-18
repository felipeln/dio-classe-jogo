class heroi {
  constructor(nome,idade,tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar(){
    let ataque
    switch(this.tipo) {
      case `guerreiro`:
        ataque = 'usou espada'
        break;
      case `mago`:
        ataque = 'usou magia'
        break;
      case `monge`:
        ataque = 'usou artes marciais'
        break;
      case `ninja`:
        ataque = 'usou shuriken'
        break;
    }
    console.log(`o ${this.tipo} atacou usando ${ataque}`)
    
  }
}

const mago = new heroi(`felipe`,`21`,`monge`)

mago.atacar()