import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ServiceUtils } from '../utils/service.utils';
import { GenericMethods } from '../utils/generic-methods.utils';


@Injectable()
export class CartService {

  private _token;

  private _url = ServiceUtils.DEFAULT_API_PATH;

  // PUBLIC ROUTES
  private _LOAD_SHOPPING_CART = `${this._url}/p/carrinho/list`;
  private _GET_SHOPPING_CART_HASH = `${this._url}/p/carrinho/ghash`;
  private _PUBLIC_ADD_TO_CART = `${this._url}/p/carrinho/adicionar`;
  private _PUBLIC_UPDATE_SHOPPING_CART = `${this._url}/carrinho/alterarmodelo`;
  private _PUBLIC_REMOVE_SHOPPING_CART = `${this._url}/carrinho/remove`;
  private _PUBLIC_CONVERT_LOGEDIN_USER = `${this._url}/carrinho/convert`;

  // PRIVATE ROUTES
  private _UPDATE_SHOPPING_CART = `${this._url}/carrinho/alterarmodelo`;
  private _REMOVE_SHOPPING_CART = `${this._url}/carrinho/remove`;
  private _CONVERT_LOGEDIN_USER = `${this._url}/carrinho/convert`;
  private _ADD_TO_CART = `${this._url}/p/carrinho/adicionar`;


  private getHash = () => this._GET(this._GET_SHOPPING_CART_HASH, this._token);

  private _GET = (path: string, _token: string) => this.http.get(path, ServiceUtils.OPTIONS(_token)).map(response => response.json());
  private _POST = (path: string, params: any, _token: string) => this.http.post(path, params, ServiceUtils.OPTIONS(_token)).map(response => response.json());

  constructor(private http: Http) { this._token = this.getToken(); }


  getAll = () => this._POST(this._LOAD_SHOPPING_CART, { hash: this.getToken() }, this._token);

  updateModel = (item_id, model_id) => this._POST(this._UPDATE_SHOPPING_CART, { id_carrinho: item_id, id_novomodelo: model_id }, this._token);

  updateQty = (item_id, new_qty) => this._POST(this._UPDATE_SHOPPING_CART, { produto_modelo_carrinho: item_id, quantidade: new_qty }, this._token);
  
  removeItem = (item_id) => this._POST(this._REMOVE_SHOPPING_CART, { id: item_id }, this._token);
  
  convert = () => this._POST(this._CONVERT_LOGEDIN_USER, { hash: this.getToken() }, this._token)
  
  additem(model_id, qty) {
    if (ServiceUtils.TOKEN('') !== '') {
      this._POST(this._ADD_TO_CART, { produto_modelo_carrinho: model_id, quantidade: qty }, this._token);
    } else {

    }
  }

  setToken = (token: string) => this._token = token;
  
  getToken() {
    if (GenericMethods.isNullOrEmpty(this._token)) {
      this.getHash().subscribe(
        ok => {
          localStorage.setItem('currentUser.shopping_cart_token', ok.data);
          this._token = ok.data;
        },
        error => GenericMethods.handleError(error.message)
      );
    } else return this._token;
  }
}
