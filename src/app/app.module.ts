// Import Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

// Import Application
import { AppComponent } from './app.component';
import { HomeComponent } from './views/loja/pages/home/home.component';
import { RoutingModule } from './app.router';
import { NavComponent } from './views/components/nav/nav.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { ArrependimentoComponent } from './views/loja/pages/arrependimento/arrependimento.component';
import { EntregasComponent } from './views/loja/pages/entregas/entregas.component';
import { ChangeQtyWidget } from './views/components/widgets/change-qty/change-qty.component';
import { ShoppingCartComponent } from './views/components/shopping-cart/shopping-cart.component';
import { PagamentosComponent } from './views/loja/pages/pagamentos/pagamentos.component';
import { CancelamentosComponent } from './views/loja/pages/cancelamentos/cancelamentos.component';
import { LogisticaReversaComponent } from './views/loja/pages/logistica.reversa/logistica.reversa.component';
import { NotaFiscalComponent } from './views/loja/pages/nota.fiscal/nota.fiscal.component';
import { GarantiaComponent } from './views/loja/pages/garantia/garantia.component';
import { LojaComponent } from './views/loja/pages/loja/loja.component';
import { CompraComponent } from './views/loja/pages/compra/compra.component';
import { SenhaComponent } from './views/loja/pages/senha/senha.component';
import { FreteComponent } from './views/loja/pages/frete/frete.component';
import { SobreComponent } from './views/loja/pages/sobre/sobre.component';
import { PoliticaComponent } from './views/loja/pages/politica/politica.component';
import { TrabalheComponent } from './views/loja/pages/trabalhe/trabalhe.component';
import { CategoriasComponent } from './views/loja/pages/categorias/categorias.component';
import { Page404Component } from './views/components/page404/page404.component';
import { DecoracaoComponent } from './views/loja/pages/decoracao/decoracao.component';
import { IluminacaoComponent } from './views/loja/pages/iluminacao/iluminacao.component';
import { TextilComponent } from './views/loja/pages/textil/textil.component';
import { MarcasComponent } from './views/loja/pages/marcas/marcas.component';
import { CadastroComponent } from './views/conta/cadastro/cadastro.component';
import { LoginComponent } from './views/conta/login/login.component';
import { EntreComponent } from './views/conta/entre/entre.component';
import { RecuperacaoComponent } from './views/conta/recuperacao/recuperacao.component';
import { ProfileComponent } from './views/conta/profile/profile.component';
import { ProfileMenuComponent } from './views/conta/profile-menu/profile-menu.component';
import { ProfilePerfilComponent } from './views/conta/profile-perfil/profile-perfil.component';
import { ProfileCartaoComponent } from './views/conta/profile-cartao/profile-cartao.component';
import { ProfilePedidosComponent } from './views/conta/profile-pedidos/profile-pedidos.component';
import { ProfileCartaoEditarComponent } from './views/conta/profile-cartao-editar/profile-cartao-editar.component';
import { ProfilePedidosDetalhesComponent } from './views/conta/profile-pedidos-detalhes/profile-pedidos-detalhes.component';
import { ProfileAvaliacoesComponent } from './views/conta/profile-avaliacoes/profile-avaliacoes.component';
import { ProfileFavoritosComponent } from './views/conta/profile-favoritos/profile-favoritos.component';
import { ProfileMensagemComponent } from './views/conta/profile-mensagem/profile-mensagem.component';
import { EscritorioComponent } from './views/loja/pages/escritorio/escritorio.component';
import { ListaProdutosComponent } from './views/loja/pages/lista-produtos/lista-produtos.component';
import { ProdutosComponent } from './views/loja/pages/produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ArrependimentoComponent,
    EntregasComponent,
    PagamentosComponent,
    CancelamentosComponent,
    LogisticaReversaComponent,
    ChangeQtyWidget,
    ShoppingCartComponent,
    NotaFiscalComponent,
    GarantiaComponent,
    LojaComponent,
    CompraComponent,
    SenhaComponent,
    FreteComponent,
    SobreComponent,
    PoliticaComponent,
    TrabalheComponent,
    CategoriasComponent,
    EntregasComponent,
    PagamentosComponent,
    CancelamentosComponent,
    LogisticaReversaComponent,
    NotaFiscalComponent,
    GarantiaComponent,
    LojaComponent,
    CompraComponent,
    SenhaComponent,
    FreteComponent,
    SobreComponent,
    PoliticaComponent,
    TrabalheComponent,
    CategoriasComponent,
    Page404Component,
    DecoracaoComponent,
    IluminacaoComponent,
    TextilComponent,
    MarcasComponent,
    CadastroComponent,
    LoginComponent,
    EntreComponent,
    RecuperacaoComponent,
    ProfileComponent,
    ProfileMenuComponent,
    ProfilePerfilComponent,
    ProfileCartaoComponent,
    ProfilePedidosComponent,
    ProfileCartaoEditarComponent,
    ProfilePedidosDetalhesComponent,
    ProfileAvaliacoesComponent,
    ProfileFavoritosComponent,
    ProfileMensagemComponent,
    EscritorioComponent,
    ListaProdutosComponent,
    ProdutosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    Ng2PageScrollModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
export class MyOwnCustomMaterialModule { }
