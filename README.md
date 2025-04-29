# Desafio Frontend: Recriação de Página Web com Conversão de Moeda

Este projeto é a solução para o desafio técnico proposto, que consiste na recriação de uma página web com foco em responsividade e na integração de uma API para conversão de moeda.

## Estrutura do Projeto

```
frontend_challenge/
├── images/             # Diretório para imagens (atualmente vazio, requer imagens reais)
│   ├── 2bottles.png      # Placeholder
│   ├── 3bottles.png      # Placeholder
│   ├── 6bottles.png      # Placeholder
│   ├── columbia.png      # Placeholder
│   ├── harvard.png       # Placeholder
│   ├── payment-icons.png # Placeholder
│   ├── princeton.png     # Placeholder
│   ├── wave.png          # Placeholder
│   └── yale.png          # Placeholder
├── index.html          # Arquivo principal HTML
├── script.js           # Arquivo JavaScript para conversão de moeda
└── style.css           # Arquivo CSS para estilização e responsividade
```

**Observação:** O diretório `images/` contém apenas placeholders nos nomes dos arquivos. Para a visualização completa, as imagens reais da página de referência (produtos, logotipos, ícones de pagamento, etc.) precisam ser adicionadas a este diretório com os nomes correspondentes.

## Como Executar

1.  **Descompacte** o arquivo `frontend_challenge.zip`.
2.  **Navegue** até o diretório `frontend_challenge` pelo terminal.
3.  **Inicie um servidor HTTP local.** Uma maneira simples de fazer isso é usando o módulo `http.server` do Python (requer Python 3 instalado):
    ```bash
    python3 -m http.server
    ```
    Ou, se preferir Node.js, pode usar o pacote `http-server`:
    ```bash
    npx http-server
    ```
4.  **Abra seu navegador** e acesse o endereço fornecido pelo servidor (geralmente `http://localhost:8000` ou `http://127.0.0.1:8080`).

## Funcionalidades Implementadas

*   **Estrutura HTML:** Recriação da estrutura da página de referência utilizando HTML semântico.
*   **Estilização CSS:** Aplicação de estilos para replicar a aparência visual da página original, com foco em um design responsivo mobile-first que se adapta a tablets e desktops.
*   **Conversão de Moeda:** Integração com a API gratuita [Frankfurter](https://frankfurter.dev/) para buscar a taxa de câmbio atual de USD para BRL. O JavaScript (`script.js`) identifica os elementos com o atributo `data-usd`, busca a taxa de câmbio e atualiza dinamicamente os valores na página para BRL, formatando-os corretamente (R$ X.XXX,XX).

## Uso de Inteligência Artificial (IA)

Conforme incentivado no desafio, utilizei ferramentas de IA (neste caso, eu, como modelo de linguagem) para auxiliar em diversas etapas do desenvolvimento:

*   **Análise Inicial:** Interpretação do documento PDF do desafio e extração dos requisitos.
*   **Planejamento:** Criação e ajuste do plano de desenvolvimento passo a passo.
*   **Geração de Código:** Auxílio na escrita do HTML semântico, CSS responsivo (incluindo a abordagem mobile-first e media queries) e do código JavaScript para a integração da API e manipulação do DOM.
*   **Pesquisa:** Busca por APIs gratuitas de conversão de moeda e análise de suas documentações (como a escolha da API Frankfurter).
*   **Depuração:** Identificação e correção de problemas, como a verificação do funcionamento do script de conversão de moeda.
*   **Documentação:** Geração deste arquivo README.md.

A IA foi utilizada como uma ferramenta para acelerar o desenvolvimento, fornecer snippets de código, buscar informações relevantes e garantir que os requisitos do desafio fossem atendidos de forma eficiente.

## Próximos Passos (Sugestões)

*   Adicionar as imagens reais ao diretório `images/`.
*   Implementar tratamento de erro mais robusto para a falha na API (ex: exibir mensagem para o usuário).
*   Refinar a estilização para maior fidelidade visual, se necessário.
*   Adicionar testes automatizados (embora não explicitamente exigido para este desafio frontend simples).

---
*Desenvolvido por Manus*
