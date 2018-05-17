import { RequestOptions } from "@angular/http";
import { Headers } from "@angular/http";
import { environment } from '../../environments/environment';

export class ServiceUtils {

    static TOKEN = (_token) => localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).senha : _token;
    static SHOPPING_CART_TOKEN = (_shopping_cart_token) => localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).shopping_cart_token : _shopping_cart_token;
    static HEADERS = (_token) => new Headers({ 'Content-Type': 'application/json', 'Authorization': ServiceUtils.TOKEN(_token) });
    static OPTIONS = (_token) => new RequestOptions({ headers: ServiceUtils.HEADERS(_token) });

    static API_VERSION = 'v1';
    static DEFAULT_API_PORT = '8443';
    static DEFAULT_API_HOST = `${environment.api_host}:${ServiceUtils.DEFAULT_API_PORT}`;
    static DEFAULT_API_PATH = `${ServiceUtils.DEFAULT_API_HOST}/lilihome/api/${ServiceUtils.API_VERSION}`;

}