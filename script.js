

function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i)
        });
    }
    
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}
escrevendoLetra()

function menuMobol(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu =document.querySelector('header .navegacao-primaria')

    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    });
}
menuMobol();

function sobremin(){

    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');

    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');

    divExperiencia[0].classList.add('ativo');
    divEducation[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    liEducation[0].classList.add('ativo');

    function slideShow(index){
        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo');
        })
        liExperiencia.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShow2(index){
        divEducation.forEach((div)=>{
            div.classList.remove('ativo');
        })
        liEducation.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }

    liExperiencia.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });

    liEducation.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index)
        });
    });

}
sobremin();





const listaALL = document.querySelectorAll('div.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');
const buttonAll = document.querySelectorAll('.projects_models .all');

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index)
    })
})


function listar(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    })
    if(buttom == 'pythom'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
    }

    if(buttom == 'nodejs'){
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
    }

    if(buttom == 'mysql_1'){
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }

    if(buttom == 'all'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
        lista[8].classList.add('ativo');
        lista[9].classList.add('ativo');
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            listar(listaALL);
        }

        if(currentButton.classList.contains('pythom')){
            listar(listaALL, "pythom");
        }

        if(currentButton.classList.contains('nodejs')){
            listar(listaALL, "nodejs");
        }

        if(currentButton.classList.contains('mysql_1')){
            listar(listaALL, "mysql_1");
        }

        if(currentButton.classList.contains('all')){
            listar(listaALL, "all");
        }

    })
})


