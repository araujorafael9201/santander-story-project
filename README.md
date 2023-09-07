# Santander Story Project
### Esse é um projeto desenvolvido para o desafio de projeto "Explorando IA Generativa em um Pipeline de ETL com Python" do Santander Bootcamp 2023
---
## Como funciona
1. Os títulos das histórias são extraídos do arquivo data.csv
2. Uma breve descrição da história é extraída da API em [stories.rafaelaraujo.tech](stories.rafaelaraujo.tech)
3. É utilizada a API do ChatGPT para criar uma versão completa da história
4. A versão completa é salva em um banco de dados por meio do endpoint [stories.rafaelaraujo.tech/story](stories.rafaelaraujo.tech/story)
---
## Api [stories.rafaelaraujo.tech](https://stories.rafaelaraujo.tech)
```
GET /story/[title] -> Retorna as informações de cada história e mostra todas as suas versões geradas até o momento
POST /story -> Adiciona uma nova versão à uma história existente
``` 

## Lista de Histórias
| title      | description                                                                                                                                         |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| memories   | In a world where memories can be bought and sold, a forgotten love story resurfaces, changing the fate of two strangers forever.                    |
| hidden_civ | On a remote island, a group of researchers stumbles upon a hidden civilization with a technology far beyond their wildest dreams, but at what cost? |
| bookshop   | A peculiar bookshop in a quaint town offers books that predict the future, leading readers down a surreal and perilous journey.                     |
| pirates    | A forgotten lighthouse in a coastal town signals the return of a long-lost pirate ship, bringing with it a treasure and a curse.                    |
| ocean      | An ocean planets marine biologist deciphers underwater echoes, embarking on a quest to unravel its enigmatic history.                               |
