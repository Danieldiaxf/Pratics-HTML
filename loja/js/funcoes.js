function alterar( produto, acao ){
    const qtd = document.getElementById( "qtd_" + produto )
    const valor = document.getElementById( "valor_" + produto )
    const total = document.getElementById( "total_" + produto )

    if( acao == '-' && qtd.innerHTML == 0 ){
        alert("Ação não pode ser concluída")
    } else{
        acao == "+" ? qtd.innerHTML++ : qtd.innerHTML-- 
        const valorTotal = qtd.innerHTML * num( valor.innerHTML ) 
        total.innerHTML = form( valorTotal )
        soma()
    }
    
    
}

function soma(){
    let soma = 0

    for( let i = 1;i < 4; i++ ){
        let numero = num( document.getElementById( "total_" + i  ).innerHTML )
        soma += Number( numero ) 

    }
    document.getElementById("subt").innerHTML = form( soma )
}

function num( n ){
    return n.replace( /\D/g, '' )
}

function form( n ){
    return 'R$ ' + n.toLocaleString('pt-BR')
}