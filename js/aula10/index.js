/* Eventos
Eventos são ações disparadas pela interação dos usuários na página.

É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

! Existem muitos eventos. Veja os mais utilizados:

onclick → Disparado quando recebe um click;
ondbclick → Disparado quando recebe um duplo clique;
onmouseover → Disparado quando o mouse está sobre;
onmouseout → Disparado quando o mouse é movido para fora do elemento;
onmousemove → onmousedown → Disparado quando o clique do botão foi pressionado;
onmouseup → Disparado quando o botão é liberado;
onfocus → Disparado quando o elemento recebe o foco. Válido para input, 
onchange → Disparado quando existe uma mudança no conteúdo. "Ao mudar";
onblur → Disparado quando o elemento perde o foco;
onkeydown → Disparado quando uma tecla é pressionada;
onkeypress → Disparado quando uma tecla é pressionada e solta;
onkeyup → Disparado quando uma tecla é solta sobre um elemento;
onload → Disparado quando a página terminou de ser carregada. Body;
onresize → Disparado quando há um redimencionamento da janela
*/

function eventoClick(){
    // return alert(`Clicou`);
    document.body.style.backgroundColor = 'gray'
}

function eventoClickDuplo(){
    return alert('Clique duplo acionado.')
}