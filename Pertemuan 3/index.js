// Looping For, while

// for (let i = 0; i < 5; i++) {
//     // do
//     console.log(i);
// }

// let nama = "naufal";
// let i = 0
// while (true) {
//     console.log(nama[i]);
//     i++;
//     if (nama[i] == 'f') continue;
// }

const data = [
    {
        "id": 1,
        "name": "Lenee Lardeur",
        "email": "llardeur0@cnbc.com",
        "isMahasiswa": "TRUE"
    },
    {
        "id": 2,
        "name": "Vivien Woodier",
        "email": "vwoodier1@taobao.com",
        "isMahasiswa": "TRUE"
    },
    {
        "id": 3,
        "name": "Nicolle Risdall",
        "email": "nrisdall2@salon.com",
        "isMahasiswa": "TRUE"
    },
    {
        "id": 4,
        "name": "Marlowe Keener",
        "email": "mkeener3@nhs.uk",
        "isMahasiswa": "TRUE"
    },
    {
        "id": 5,
        "name": "Terrance McDoual",
        "email": "tmcdoual4@examiner.com",
        "isMahasiswa": "TRUE"
    },
    {
        "id": 6,
        "name": "Gordie Chill",
        "email": "gchill5@purevolume.com",
        "isMahasiswa": "TRUE"
    },
    {
        "id": 7,
        "name": "Pascal Clymo",
        "email": "pclymo6@indiatimes.com",
        "isMahasiswa": "TRUE"
    },
    {
        "id": 8,
        "name": "Janith Strute",
        "email": "jstrute7@icq.com",
        "isMahasiswa": "FALSE"
    },
    {
        "id": 9,
        "name": "Isabella Pendreigh",
        "email": "ipendreigh8@apple.com",
        "isMahasiswa": "TRUE"
    },
    {
        "id": 10,
        "name": "Kizzee Gareisr",
        "email": "kgareisr9@youtu.be",
        "isMahasiswa": "FALSE"
    }
];

// for of, 
// for (const mhs of data) {
//     console.log(mhs);
// } 

// for in
const mahasiswa = {
    "id": 10,
    "name": "Kizzee Gareisr",
    "email": "kgareisr9@youtu.be",
    "isMahasiswa": "FALSE"
};

// for (const mhs in mahasiswa) {
//     if (mhs == 'name') continue;
//     console.log(mahasiswa[mhs]);
// }

// console.log(Array.from(data));

// for (const [i, v] of data.entries()) {
//     console.log(i, v);
// }