    import React, { Component } from "react";
   import "../../assets/App.css" 
    class ListaDeCategorias extends Component{
        state = {};
        render() {
            return ( 
            <section className ='lista-categorias-all'>
           <ul className = 'lista-categorias'>
                <li>Esporte</li>
                <li>Tarefas</li>
                
              </ul>
              <input className='input'type="text"/>
              
            </section>
            
            );
        }
    }
    export default ListaDeCategorias;