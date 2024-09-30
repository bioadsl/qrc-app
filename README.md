# QrcApp

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.2.6.

## Servidor de desenvolvimento

Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Estrutura de código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate Directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Executando testes de unidade

Execute `ng test` para executar os testes de unidade via [Karma](https://karma-runner.github.io).

## Executando testes de ponta a ponta

Execute `ng e2e` para executar os testes de ponta a ponta por meio de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos de teste de ponta a ponta.

## Mais ajuda

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a página [Visão geral e referência de comando do Angular CLI](https://angular.dev/tools/cli).



# Requisitos Funcionais
## 1- Entrada de Dados:
Formulário para entrada de:
Título de Eleitor
CPF
Nome
Filiação
Data de Nascimento
UF

## 2- Geração de QR Code:
Gerar um QR Code que contenha os dados informados no formulário.

## 3- Exibição dos Dados:
Exibir os dados em uma tabela HTML.

## 4- Persistência dos Dados:
Salvar os dados em um arquivo CSV ou JSON.
Utilizar o arquivo CSV ou JSON para popular a tabela HTML.

# Requisitos Não Funcionais

## 1- Tecnologia:
Utilizar Angular.js para o desenvolvimento da aplicação.
Utilizar uma biblioteca para geração de QR Code, como angularx-qrcode1.

## 2- Usabilidade:
Interface amigável e intuitiva para entrada de dados e visualização da tabela.

## 3- Performance:
A aplicação deve ser rápida e responsiva, mesmo com um grande número de entradas.

# Passos para Implementação

## 1- Configuração do Projeto Angular:
Instalar Angular CLI e criar um novo projeto Angular.
npm install -g @angular/cli
ng new qr-code-app
cd qr-code-app

## 2- Instalação da Biblioteca de QR Code:
Instalar a biblioteca angularx-qrcode.
npm install angularx-qrcode

## 3- Criação do Formulário de Entrada de Dados:
Criar um componente para o formulário de entrada de dados.

## 4- Geração e Exibição do QR Code:
Utilizar a biblioteca angularx-qrcode para gerar o QR Code com os dados do formulário.
Exibir o QR Code na interface.

## 5- Persistência dos Dados:
Implementar a lógica para salvar os dados em um arquivo CSV ou JSON.
Utilizar esses dados para popular a tabela HTML.

## 6- Exibição da Tabela HTML:
Criar um componente para exibir os dados em uma tabela HTML. 😊


