# QUOTES APP

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![repo-size](https://img.shields.io/github/repo-size/brian-weloba/quotes)

## **Author**: ```Brian Weloba```

## Description

A simple  Angular app that lets users add their own quotes and vote for their favorite quotes. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

The site was published on [Netlify](https://app.netlify.com/).

## Page Preview

![alt screenshot](screenshot.png)

## Setup

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## BDD

Behavioral specifications:
>**Title**: Get Akan name

>**As** a user.  
>**I want to** I input my date of birth.  
>**so** that I can get my Akan name  

>**Scenario 1:** Male user  
>**Given** that I am male  
>**and** I was born on 14/2/1998  
>**when** I input my date of birth  
>**and** I select my gender as Male.  
>**then** I should get my akan name is Kwame  
>**and** I was born on a Saturday.  

>**Scenario 2:** Female user  
>**Given** that I am female  
>**and** I was born on 25/5/1989  
>**when** I input my date of birth  
>**and** I select my gender as Female.  
>**then** I should get my akan name is Yaa  
>**and** I was born on a Thursday.  

>**Scenario 3:** Fail to select genger.  
>**Given** that I am female  
>**and** I was born on 25/5/1989  
>**when** I input my date of birth  
>**and** I fail to select my gender as Female.  
>**then** I should get an error message.  

>**Scenario 4:** Dates before October 1582.  
>**Given** that I want to know the Akan name of someone born before 1582
>**when** I input my date of birth  
>**and** I fail to select my gender as Female.  
>**then** I should not get an error because the Gregorian system wasnt invented  

## Contact

E-mail: ```bweloba@gmail.com```

## Technologies Used
<img alt="TypeScript" src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>

<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>

<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

<img alt="Angular" src="https://img.shields.io/badge/angular%20-%23DD0031.svg?&style=for-the-badge&logo=angular&logoColor=white"/>

<img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>

<img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>


## Legal

 Copyright &copy; 2021 Brian N Weloba
