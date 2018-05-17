// Import Angular
import { Routes, RouterModule } from '@angular/router'

// Import Application
import { HomeComponent } from './views/loja/pages/home/home.component'
import { ArrependimentoComponent } from './views/loja/pages/arrependimento/arrependimento.component'
import { EntregasComponent } from './views/loja/pages/entregas/entregas.component'
import { PagamentosComponent } from './views/loja/pages/pagamentos/pagamentos.component'
import { CancelamentosComponent } from './views/loja/pages/cancelamentos/cancelamentos.component'
import { LogisticaReversaComponent } from './views/loja/pages/logistica.reversa/logistica.reversa.component'
import { NotaFiscalComponent } from './views/loja/pages/nota.fiscal/nota.fiscal.component'
import { GarantiaComponent } from './views/loja/pages/garantia/garantia.component'
import { LojaComponent } from './views/loja/pages/loja/loja.component'
import { CompraComponent } from './views/loja/pages/compra/compra.component'
import { SenhaComponent } from './views/loja/pages/senha/senha.component'
import { FreteComponent } from './views/loja/pages/frete/frete.component'
import { SobreComponent } from './views/loja/pages/sobre/sobre.component'
import { PoliticaComponent } from './views/loja/pages/politica/politica.component'
import { TrabalheComponent } from './views/loja/pages/trabalhe/trabalhe.component'
import { CategoriasComponent } from './views/loja/pages/categorias/categorias.component'
import { DecoracaoComponent } from './views/loja/pages/decoracao/decoracao.component'
import { IluminacaoComponent } from './views/loja/pages/iluminacao/iluminacao.component'
import { TextilComponent } from './views/loja/pages/textil/textil.component'
import { MarcasComponent } from './views/loja/pages/marcas/marcas.component'
import { CadastroComponent } from './views/conta/cadastro/cadastro.component'
import { LoginComponent } from './views/conta/login/login.component'
import { EntreComponent } from './views/conta/entre/entre.component'
import { RecuperacaoComponent } from './views/conta/recuperacao/recuperacao.component'
import { ProfileComponent } from './views/conta/profile/profile.component'
import { ProfilePerfilComponent } from './views/conta/profile-perfil/profile-perfil.component'
import { ProfileCartaoComponent } from './views/conta/profile-cartao/profile-cartao.component'
import { ProfilePedidosComponent } from './views/conta/profile-pedidos/profile-pedidos.component'
import { ProfileCartaoEditarComponent } from './views/conta/profile-cartao-editar/profile-cartao-editar.component'
import { ProfilePedidosDetalhesComponent } from './views/conta/profile-pedidos-detalhes/profile-pedidos-detalhes.component'
import { ProfileAvaliacoesComponent } from './views/conta/profile-avaliacoes/profile-avaliacoes.component'
import { ProfileFavoritosComponent } from './views/conta/profile-favoritos/profile-favoritos.component'
import { ProfileMensagemComponent } from './views/conta/profile-mensagem/profile-mensagem.component'
import { EscritorioComponent } from './views/loja/pages/escritorio/escritorio.component'
import { ListaProdutosComponent } from './views/loja/pages/lista-produtos/lista-produtos.component'
import { ProdutosComponent } from './views/loja/pages/produtos/produtos.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'arrependimento',
        component: ArrependimentoComponent
    },

    {
        path: 'entregas',
        component: EntregasComponent
    },

    {
        path: 'pagamentos',
        component: PagamentosComponent
    },

    {
        path: 'cancelamentos',
        component: CancelamentosComponent
    },

    {
        path: 'logistica.reversa',
        component: LogisticaReversaComponent
    },

    {
        path: 'nota.fiscal',
        component: NotaFiscalComponent
    },

    {
        path: 'garantia',
        component: GarantiaComponent
    },

    {
        path: 'loja',
        component: LojaComponent
    },

    {
        path: 'compra',
        component: CompraComponent
    },

    {
        path: 'senha',
        component: SenhaComponent
    },

    {
        path: 'frete',
        component: FreteComponent
    },

    {
        path: 'sobre',
        component: SobreComponent
    },

    {
        path: 'politica.privacidade',
        component: PoliticaComponent
    },

    {
        path: 'trabalhe.conosco',
        component: TrabalheComponent
    },

    {
        path: 'categorias.produtos',
        component: CategoriasComponent
    },

    {
        path: 'categorias.decoracao',
        component: DecoracaoComponent
    },

    {
        path: 'categorias.iluminacao',
        component: IluminacaoComponent
    },

    {
        path: 'categorias.textil',
        component: TextilComponent
    },

    {
        path: 'categorias.escritorio',
        component: EscritorioComponent
    },

    {
        path: 'cadastro',
        component: CadastroComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'entre.cadastro',
        component: EntreComponent
    },

    {
        path: 'recuperacao.senha',
        component: RecuperacaoComponent
    },

    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            {
                path:'',
                component: ProfilePerfilComponent,
                outlet: 'profile_router'
            },

            {
                path:'',
                component: ProfileCartaoComponent,
                outlet: 'profile_router'
            },

            {
                path:'',
                component: ProfilePedidosComponent,
                outlet: 'profile_router'
            },

            {
                path:'',
                component: ProfilePedidosDetalhesComponent,
                outlet: 'profile_router'
            },

            {
                path:'',
                component: ProfileAvaliacoesComponent,
                outlet: 'profile_router'
            },

            {
                path:'',
                component: ProfileFavoritosComponent,
                outlet: 'profile_router'
            },

            {
                path:'',
                component: ProfileMensagemComponent,
                outlet: 'profile_router'
            }
        ]
    },

    {
        path: 'lista-de-produtos',
        component: ListaProdutosComponent
    },

    {
        path: 'produtos',
        component: ProdutosComponent
    }

];
export const RoutingModule = RouterModule.forRoot(routes);
