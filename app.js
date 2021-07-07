
//Pegar o input 
//Se for sim, mostra as categorias disponiveis, pegunta qual categoria ela escolhe
//Se não, mostra todos os livros em ordem crescente pela quantidade página

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

if(entradaInicial.toLocaleUpperCase()==='S'){
    console.log('Essas são as categorias disponiveis:')
    console.log('Produtividade','/Tecnologia','/Aventura',
    '/Estilo','/Literatura')

    const entradaCategoria = readline.question('Qual categoria voce escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}else{
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Esses são todos os livros disponiveis:')
    console.table(livrosOrdenados)
}

