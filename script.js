let radar = prompt('Siz neche km/saat ile hereket edirdiniz?');
let netice;

if (radar >= 60 && radar < 80) {
    netice = 'Radar :   Siz ' + radar + ' km/saat ile hereket etdiyiniz ucun qaydalari pozaraq 20 azn cerime olundunuz.';
} else if (radar >= 80 && radar < 100) {
    netice = 'Radar :   Siz ' + radar + ' km/saat ile hereket etdiyiniz ucun qaydalari pozaraq 40 azn cerime olundunuz.';
} else if (radar >= 100 && radar < 120) {
    netice = 'Radar :   Siz ' + radar + ' km/saat ile hereket etdiyiniz ucun qaydalari pozaraq 100 azn cerime olundunuz.';
} else if (radar >= 120) {
    netice = 'Radar :   Siz ' + radar + ' km/saat ile hereket etdiyiniz ucun qaydalari pozaraq 300 azn cerime, ve avtomobiliniz cerime meydancasina aparilir.';
} else {
    netice = 'Yol qaydalarina riayet etdiyiniz ucun tesekkurler. Yaxsi yol';
}


document.getElementById('radar').innerHTML = netice;