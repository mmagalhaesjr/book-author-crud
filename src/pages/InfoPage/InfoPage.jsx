
import Header from "../../components/Header/Header";
import { StyledContainer, StyledInfo, StyledItem, StyledRules } from "./styled";

export default function InfoPage() {

    return (

        <StyledContainer>

            <Header />



            <section>
                <h1>
                    Esta plataforma foi desenvolvida para ajudar você a organizar e visualizar informações sobre seus livros e autores de maneira simples e intuitiva.
                </h1>

                <h2>Funcionalidades</h2>
                <div>  <StyledInfo>


                    <StyledItem>
                        <p>Criar um livro: Adicione um novo livro à sua coleção fornecendo o nome do livro, o nome do autor e, opcionalmente, o número de páginas.
                        </p>
                    </StyledItem>

                    <StyledItem>
                        <p>Visualizar todos os livros: Todos os livros cadastrados e seus deatlhes serão exibidos em uma tabela.
                        </p>
                    </StyledItem>
                    <StyledItem><p>Visualizar um livro específico: Ao selecionar um livro, você poderá visualizar detalhes, facilitando a consulta de informações específicas.
                    </p></StyledItem>
                    <StyledItem><p>Excluir um livro: Caso precise remover um livro, você pode fazê-lo com um clique.

                    </p></StyledItem>

                </StyledInfo>

                    <StyledInfo>

                        <StyledItem>
                            <p>Criar um autor: Adicione novos autores à sua lista fornecendo um nome e, opcionalmente, um e-mail.                       </p>
                        </StyledItem>

                        <StyledItem>
                            <p>Visualizar todos os autores: Todos os autores cadastrados serão apresentados em uma tabela, permitindo uma visão clara e rápida das informações.</p>
                        </StyledItem>
                        <StyledItem><p>Visualizar um autor específico: Ao selecionar um autor, você poderá ver mais detalhes em um modal.</p></StyledItem>
                        <StyledItem><p>Excluir um autor: Você pode remover um autor a qualquer momento.
                        </p></StyledItem>

                    </StyledInfo></div>

                <StyledRules><p>Todas as ações de exclusão são irreversíveis. Uma vez que um livro ou autor é excluído, não há como recuperá-lo. Por isso, tenha certeza ao realizar essas ações.
                     </p></StyledRules>
                <StyledRules><p>
Cada livro deve estar associado a um autor. Quando um autor é excluído, todos os livros relacionados a ele serão automaticamente removidos do sistema.
                </p></StyledRules>
            </section>





        </StyledContainer >

    )

}