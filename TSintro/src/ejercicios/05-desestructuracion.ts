/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volume: number;
    second: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const mp3: Reproductor={
    volume: 78,
    second: 21,
    song: "Ilomilo",
    details: {
        author: "Billie Eilish",
        year: 2019
    }
}

const {volume, second:sec, song, details: { author:artista } } = mp3;

// console.log("El volúmen actual es de: " + volume);
// console.log("El segundo actual es: " + sec);
// console.log("La canción actual es: " + song);
// console.log("La artista es: "+ artista);

let snk:string[] = ['Mikasa', 'Eren', 'Armin']

const [ , , c3 ] = snk;

// console.log("Personaje 1: " + snk[0]);
// console.log("Personaje 2: " + snk[1]);
console.log("Personaje 3: " + c3);