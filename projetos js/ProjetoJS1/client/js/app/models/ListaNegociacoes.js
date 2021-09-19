class ListaNegociacoes{
    constructor(){
        this.negociacoes = [];

    }
    adiciona(negociacao){
        this.negociacoes.push(negociacao);
    }
    get negociacaoes(){
        return this.negociacoes;
    }
}