/*# DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |
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
//Creazione dell'array di oggetti
const ourTeam = [
    {
        name: 'Wayne Barret',
        info: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        info: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        info: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        info: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        info: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        info: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
];




// Stampa in console, operazione ripetuta quindi ciclo for
//Stampa in bracket notation
for (let i = 0; i < ourTeam.length; i++) {
    const teamMember = ourTeam[i];
    console.log(`Name: ${teamMember['name']}`);
    console.log(`Info: ${teamMember['info']}`);
    console.log(`Photo: ${teamMember['photo']}`);
    console.log('-------------------------'); // linea di separazione
}










