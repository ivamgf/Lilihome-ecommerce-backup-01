import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  list = ['', '', '', '', '', '', '', '', ''];

  p = '/';
  path = [{ text: 'Home', link: '/' }];

  constructor(router: Router) {
    router.url.split('/')
      .forEach(url_fragment => {
        let formated_url_fragment = '';
        if (url_fragment !== '') {
          formated_url_fragment = url_fragment.toUpperCase().replace('_', ' ');
          this.p += url_fragment;
          this.path.push({ text: formated_url_fragment, link: this.p });
        } else {
          this.p += '/';
        }
      });
  }

  ngOnInit() {
  }

}

