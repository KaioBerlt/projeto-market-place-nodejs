# projeto-market-place-nodejs

Atividade do modulo de Back-End do curso de FullStack iTalents.

## Instalação

1. Baixe todo o codigo;
2. Abra o terminal do VS Code;
3. Execute: npm i
4. rode usando: npm run dev

## Endpoints

### Usuario

* #### /usuario/findById
* #### /usuario/findAll
* #### /usuario/addAddress/:id
* #### /usuario/addFavProduct/:id
* #### /usuario/update/:id
* #### /usuario/remove/:id
* #### /usuario/removeAddress/
* #### /usuario/removeFavProduct/:id


| Código | Resposta                                    |
| --------- | --------------------------------------------- |
| 200     | Retorna usuario valido                      |
| 400     | Retorna uma mensagem informando o erro      |
| 401     | Retorna erro de autenticação              |
| 404     | Retorna mensagem que não encontrou usuario |
| 500     | Erro interno do Servidor                    |

#### /usuario/create


| Código | Resposta                 |
| --------- | -------------------------- |
| 201     | Retorna Objeto criado    |
| 500     | Erro interno do Servidor |

### Produto

* #### /produto/find/:id
* #### /produto/findAll
* #### /produto/addCategoria/:id
* #### /produto/update/:id
* #### /produto/delete/:id
* #### /produto/removeCategoria


| Código | Resposta                                    |
| --------- | --------------------------------------------- |
| 200     | Retorna produto valido                      |
| 400     | Retorna uma mensagem informando o erro      |
| 401     | Retorna erro de autenticação              |
| 404     | Retorna mensagem que não encontrou produto |
| 500     | Erro interno do Servidor                    |

#### /produto/create


| Código | Resposta                 |
| --------- | -------------------------- |
| 201     | Retorna Objeto criado    |
| 500     | Erro interno do Servidor |

### Pedido

* #### /pedido/find/:id
* #### /pedido/findAll
* #### /pedido/updateStatus/:id
* #### /pedido/delete/:id

| Código | Resposta                                    |
| --------- | --------------------------------------------- |
| 200     | Retorna pedido valido                      |
| 400     | Retorna uma mensagem informando o erro      |
| 401     | Retorna erro de autenticação              |
| 404     | Retorna mensagem que não encontrou pedido |
| 500     | Erro interno do Servidor                    |


#### /pedido/create


| Código | Resposta                 |
| --------- | -------------------------- |
| 201     | Retorna Objeto criado    |
| 500     | Erro interno do Servidor |


### Categoria

* #### /categoria/find/:id
* #### /categoria/findAll
* #### /categoria/updateStatus/:id
* #### /categoria/delete/:id

| Código | Resposta                                    |
| --------- | --------------------------------------------- |
| 200     | Retorna categoria valida                      |
| 400     | Retorna uma mensagem informando o erro      |
| 401     | Retorna erro de autenticação              |
| 404     | Retorna mensagem que não encontrou categoria |
| 500     | Erro interno do Servidor                    |


#### /categoria/create


| Código | Resposta                 |
| --------- | -------------------------- |
| 201     | Retorna Objeto criado    |
| 500     | Erro interno do Servidor |

### Carrinho

* #### /carrinho/find/:id
* #### /carrinho/findAll
* #### /carrinho/updateStatus/:id
* #### /carrinho/delete/:id

| Código | Resposta                                    |
| --------- | --------------------------------------------- |
| 200     | Retorna carrinho valido                      |
| 400     | Retorna uma mensagem informando o erro      |
| 401     | Retorna erro de autenticação              |
| 404     | Retorna mensagem que não encontrou carrinho |
| 500     | Erro interno do Servidor                    |


#### /carrinho/create


| Código | Resposta                 |
| --------- | -------------------------- |
| 201     | Retorna Objeto criado    |
| 500     | Erro interno do Servidor |

