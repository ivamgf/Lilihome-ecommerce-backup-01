import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { GenericMethods } from '../../../utils/generic-methods.utils';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  shopping_cart: any;

  constructor(
  ) { }

  ngOnInit() {
    this.shopping_cart = [
      {
        "produto_modelo_carrinho": 2,
        "quantidade": 9,
        "id": 6,
        "produto_nome": "Cadeira Canadense",
        "modelo_nome": "Azul Marinho",
        "modelos": [
          {
            "modelo_id": 1,
            "nome": "Azul Marinho",
            "disponivel": true
          },
          {
            "modelo_id": 3,
            "url_miniatura": "upload/produto/1/3/cadeira_canadense_vermelho_sangue__fundo_branco.jpeg",
            "nome": "Vermelho Sangue",
            "disponivel": true
          },
          {
            "modelo_id": 4,
            "url_miniatura": "upload/produto/1/4/cadeira_canadense_branco__fundo_branco.jpeg",
            "nome": "Branco",
            "disponivel": true
          }
        ],
        "preco_unitario": 3250.35,
        "disponivel": true,
        "max_estoque": 15,
        "dias_entrega": 0,
        "dias_producao": 0
      },
      {
        "produto_modelo_carrinho": 3,
        "quantidade": 8,
        "id": 4,
        "produto_nome": "Cadeira Canadense",
        "modelo_nome": "Vermelho Sangue",
        "url_imagem": "upload/produto/1/3/cadeira_canadense_vermelho_sangue__fundo_branco.jpeg",
        "modelos": [
          {
            "modelo_id": 1,
            "nome": "Azul Marinho",
            "disponivel": true
          },
          {
            "modelo_id": 2,
            "nome": "Azul Marinho",
            "disponivel": true
          },
          {
            "modelo_id": 4,
            "url_miniatura": "upload/produto/1/4/cadeira_canadense_branco__fundo_branco.jpeg",
            "nome": "Branco",
            "disponivel": true
          }
        ],
        "preco_unitario": 3250.35,
        "disponivel": true,
        "max_estoque": 12,
        "dias_entrega": 0,
        "dias_producao": 0
      },
      {
        "produto_modelo_carrinho": 1,
        "quantidade": 2,
        "id": 7,
        "produto_nome": "Cadeira Canadense",
        "modelo_nome": "Azul Marinho",
        "modelos": [
          {
            "modelo_id": 2,
            "nome": "Azul Marinho",
            "disponivel": true
          },
          {
            "modelo_id": 3,
            "url_miniatura": "upload/produto/1/3/cadeira_canadense_vermelho_sangue__fundo_branco.jpeg",
            "nome": "Vermelho Sangue",
            "disponivel": true
          },
          {
            "modelo_id": 4,
            "url_miniatura": "upload/produto/1/4/cadeira_canadense_branco__fundo_branco.jpeg",
            "nome": "Branco",
            "disponivel": true
          }
        ],
        "preco_unitario": 3250.35,
        "disponivel": true,
        "max_estoque": 15,
        "dias_entrega": 0,
        "dias_producao": 0
      },
      {
        "produto_modelo_carrinho": 3,
        "quantidade": 8,
        "id": 3,
        "produto_nome": "Cadeira Canadense",
        "modelo_nome": "Vermelho Sangue",
        "url_imagem": "upload/produto/1/3/cadeira_canadense_vermelho_sangue__fundo_branco.jpeg",
        "modelos": [
          {
            "modelo_id": 1,
            "nome": "Azul Marinho",
            "disponivel": true
          },
          {
            "modelo_id": 2,
            "nome": "Azul Marinho",
            "disponivel": true
          },
          {
            "modelo_id": 4,
            "url_miniatura": "upload/produto/1/4/cadeira_canadense_branco__fundo_branco.jpeg",
            "nome": "Branco",
            "disponivel": true
          }
        ],
        "preco_unitario": 3250.35,
        "disponivel": true,
        "max_estoque": 12,
        "dias_entrega": 0,
        "dias_producao": 0
      }
    ];
  }
}
