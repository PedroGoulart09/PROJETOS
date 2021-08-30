class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._ListaNegociacoes = new ListaNegociacoes();

    this._NegociacoesView = new NegociacoesView($('#negociacoesview'));
    this._NegociacoesView.update(this._ListaNegociacoes);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#mensagemview'));
    this._mensagemView.update(this._mensagem)
  }
  adiciona(event) {
   
    event.preventDefault();
    this._ListaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociação adicionada com sucesso'
    this._NegociacoesView.update(this._ListaNegociacoes);
    
    
    this._mensagemView.update(this._mensagem)
    
    this._limpaFormulario();
    
  }

   _criaNegociacao(){
     return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value );
   } 


  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }
}
