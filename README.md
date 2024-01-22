![alt text](https://github.com/jaderdev/tokio.marine-front/blob/master/Screenshot%20from%202024-01-22%2000-45-13.png)

Projeto front-end criado para Tokio Marine

- Escolhi angular pois já trabalho com ele tem 8 anos e gosto muito da estrutura e coerência que tem.
- Gosto de pré-processadores de css e tenho costume de usar SASS mas não quis usar nesse projeto.
- Escolhi utilizar Ng-bootstrap como biblioteca de componentes para agilizar o projeto
- Tentei implementar os toasts da biblioteca só que acabei tendo dificuldade então fiz algo genérico pra poder ter as notificações
- Acabei deixando alguns detalhes para trás, mas acredito que este projeto já prova o conhecimento que tenho
- Utilizei RxJs para realizar algumas alterações em outros componentes usando eventos

No front-end não consegui ir muito adiante com questões de responsividade, minha tela é de 1920x1080 e caso a tela que você utiliza seja menor,
basta diminuir o zoom

As instruções estão abaixo para rodar o projeto

Primeiro basta rodar `npm install` para poder ter todas as dependências necessárias.
Depois `npm start --open` e o projeto já deve funcionar ele roda na porta 4200 e será aberto na url

`http://localhost:4200`


# TokioMarineFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
