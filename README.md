# Stock Only

Software de **Gestão de Estoque**.  

Este projeto visa viabilizar o controle dos recursos armazenados dentro de uma empresa.

## Tecnologias utilizadas

![NodeJS](https://img.shields.io/badge/Node.js-000000?style=flat&logo=node.js&logoColor=green) 
![Typescript](https://img.shields.io/badge/Typescript-000000?style=flat&logo=typescript&logoColor=green)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=green)
![Firebase](https://img.shields.io/badge/Firebase-000000?style=flat&logo=firebase&logoColor=green)

### 📄 Pré-requisitos

Certifique-se de ter **Node.js**, **GIT** e **Visual Studio Code** (ou outro editor de código-fonte) instalados em seu sistema.

Caso contrário, consulte a documentação:
+ [NodeJS](https://nodejs.org/pt-br/download)
+ [GIT](https://git-scm.com/download/win)
+ [Código do Visual Studio](https://code.visualstudio.com/)

### 🔧 Instalação

1. No GitHub.com, navegue até o repositório [**stock-only**](https://github.com/Biiars00/stock-only)

2. No canto superior direito da página, clique em **Fork** e depois em **Create Fork**.

3. Clique em **Code** e copie a URL do repositório (HTTPS, SSH ou Github CLI).

4. Abra o terminal e altere o diretório de trabalho atual para o local onde deseja clonar o repositório.
```
cd <seu-repositório>
```

5. Digite git clone e cole o URL já copiado.
```
git clone https://github.com/<seu-usuário>/<seu-repositório.git>
```

6. Para sincronizar seu fork com o repositório upstream, digite **git remote add upstream**, cole o URL copiado na Etapa 3 e pressione Enter.
```
git remoto adicionar upstream https://github.com/<ORIGINAL_OWNER>/<ORIGINAL_REPOSITORY>
```

7. Digite **git remote -v** e pressione Enter. Você verá a URL do fork como **origin** e a URL do repositório upstream como **upstream**.
```
$git remoto -v
> origem https://github.com/<seu-usuário>/<seu-repositório.git> (busca)
> origem https://github.com/<seu-usuário>/<seu-repositório.git> (push)
> upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (buscar)
> upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
```

### 🛠️ Configurações

1. Crie um arquivo chamado `.env` na raiz do seu projeto.

2. Dentro do arquivo `.env`, defina as variáveis ​​de ambiente necessárias. Por exemplo:
```
LOCAL_HOST ='xxxxxx'
```

### ⚙️ Executando o Projeto

Para instalar dependências do projeto, execute o seguinte comando:
```
npm install
```

Após instalar as dependências, podemos iniciar o servidor executando o seguinte comando:
```
npm run dev
```
> O servidor estará rodando em http://localhost:3000 por padrão, a menos que uma porta diferente tenha sido configurada.

### Funcionalidades da API
+ Listar
+ Cdastrar 
+ Editar e 
+ Remover produtos

#### Endpoints

MÉTODO       | URL     | DESCRIÇÃO    
--------- | --------- | ------------- 
GET | / | Listar produtos 
GET | /:id | Buscar produto por ID
POST | / | Cdastrar produto
PUT | /:id | Editar produto por ID
DELETE | /:id | Remover produto por ID

#### Banco de dados

+ Possui integração com Firebase

## 📑 Documentação do Swagger

A documentação completa da API pode ser acessada através do Swagger. Para visualizar a documentação, acesse a URL:

+ Local Host:
```
http://localhost:3000/docs-products
```

+ Produção:
```

```

> Certifique-se de que o servidor esteja funcionando.

## Autora

- [@Biiars00](https://www.github.com/Biiars00)
