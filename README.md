# Gerenciador de Tarefas

Este é um sistema de gerenciamento de tarefas desenvolvido como um **teste técnico**.  
A aplicação permite que os usuários se cadastrem, façam login e gerenciem suas próprias tarefas através de uma **interface web interativa**.

---

## Visão Geral

O projeto consiste em uma **aplicação de página única (SPA)** com um backend robusto em **Laravel** e um frontend dinâmico em **React**.  
Ele foi totalmente **containerizado com Docker**, garantindo um ambiente de desenvolvimento consistente e fácil de configurar.

---

## Funcionalidades

### Autenticação de Usuários
- Cadastro, login e logout seguros.

### Gerenciamento de Tarefas (CRUD)
- Criação de novas tarefas com título e descrição.  
- Listagem paginada de todas as tarefas do usuário.  
- Edição de tarefas existentes (título, descrição e status).  
- Exclusão de tarefas.  

### Dashboard Interativo
- Visualização de estatísticas sobre o status das tarefas (**pendente**, **em andamento**, **concluída**).  
- Filtros para exibir tarefas por status.  
- Listagem das **últimas 5 tarefas criadas**.  

---

## Tecnologias Utilizadas

| Categoria | Tecnologia |
|------------|-------------|
| **Backend** | PHP 8.3, Laravel 12, Inertia.js, PostgreSQL |
| **Frontend** | React 19, TypeScript, Vite, Tailwind CSS |
| **DevOps** | Docker, Docker Compose, Nginx, GitHub Actions (CI) |

---

## Como Executar o Projeto

Para executar este projeto localmente, você precisará ter o **Docker** e o **Docker Compose** instalados em sua máquina.

### Passo a Passo

#### 1. Clone o repositório
```bash
git clone https://github.com/Hicaroos/Test_TaskManagement
cd test_taskmanagement
```

#### 2. Copie o arquivo de ambiente
> Este passo é obrigatório e deve ser feito **antes** de construir os containers.
```bash
cp .env.example .env
```

#### 3. Construa as imagens e inicie os containers
> Este comando irá construir a imagem Docker, instalar todas as dependências do **composer** e **npm** automaticamente e iniciar os serviços.
```bash
docker compose up -d --build
```

#### 4. Acesse a aplicação
> Pronto! A aplicação estará disponível no seu navegador no seguinte endereço:
```
http://localhost:8080
```

#### 5. Cadastre um novo usuário
Ao acessar o sistema pela primeira vez, clique em **"Register"** e crie uma nova conta para começar a gerenciar suas tarefas.

---

> Projeto desenvolvido com 💙 e dedicação para o processo seletivo **Sítio Barreiras**.
