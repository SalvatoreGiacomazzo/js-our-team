/*# DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |  barbara-ramos-graphic-designer.jpg
/* Utilizzando i dati forniti, crea un array di oggetti per presentare il Team
Ogni membro possiede: Nome, Informazioni e foto.

MILESTONE 0 DONE
Crea l'array di oggetti con le informazioni fornite.

MILESTONE 1 DONE
Stampa su console il nome, le informazioni e la stringa della foto

MILESTONE 2
Stampa le stesse informazioni sul DOM sottoforma di stringhe

BONUS 1
Trasforma la stringa in una foto effettiva

BONUS 2
Creare delle card che contengono i nomi, informazioni,e la foto.
*/
//recupero gli elementi dal DOM
const container = document.getElementById('container')


//Creazione dell'array di oggetti
const ourTeam = [
    {
        name: 'Wayne Barnett',
        info: 'Founder & CEO',
        photo: './img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        info: 'Chief Editor',
        photo: './img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        info: 'Office Manager',
        photo: './img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        info: 'Social Media Manager',
        photo: './img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        info: 'Developer',
        photo: './img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        info: 'Graphic Designer',
        photo: './img/barbara-ramos-graphic-designer.jpg'
    },

];


// Stampa in console, operazione ripetuta quindi ciclo for
//Stampa in bracket notation
for (const teamMember of ourTeam) {
    console.log(`Name: ${teamMember['name']}`);
    console.log(`Info: ${teamMember['info']}`);
    console.log(`Photo: ${teamMember['photo']}`);
    console.log('-------------------------'); // linea di separazione
}

// Stampa in pagina delle informazioni di ogni membro del team
for (const teamMember of ourTeam) {
    const memberDiv = document.createElement('div'); // Crea un div per contenere le informazioni di ogni membro


    const photoImg = document.createElement('img'); // creo un elemento img per la foto
    photoImg.src = teamMember.photo; // Imposta l'URL dell'immagine

    const nameHeading = document.createElement('h3');   // creo un h3 per il nome
    nameHeading.textContent = teamMember.name;


    const infoParagraph = document.createElement('p'); // creo un elemento p per il ruolo/info
    infoParagraph.textContent = teamMember.info;

    //Stampa in pagina delle informazioni, della foto e del nome attraverso il div creato prima
    memberDiv.appendChild(photoImg);
    memberDiv.appendChild(nameHeading);
    memberDiv.appendChild(infoParagraph);

    // collego il div del singolo membro al container principale
    container.appendChild(memberDiv);
}








