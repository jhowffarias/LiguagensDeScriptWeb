    for(i = 0; i < 10; i++){
        document.write(i);
        console.log(i)
    }


    j = 0;
    while(j < 10){
        console.log('numero da linha while ' + j);
        j++;
    }

    m = 0; 
    do{
        console.log('numero da linha DO ' + m);
        m++;
    } while(m < 10);

    a = 5;
    b = 10;
    if(a > b){
        console.log('A é maior que o B')
    } else {
        console.log('B é maior que o A')
    }

    switch(aquecimento){
        case 1:
            "Você selecionou numero 1"
            break;
        case 2: 
            "Você selecionou numero 2"
            break;
        case 3:
            "Você selecionou numero 3"
            break;
        default:
            "Não existe"
            break;
        
    }