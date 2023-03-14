// 10000 elemanı olan 10000 sayı arasından rastgele elemanlı dizi oluşturuldu
let rastgeleSayiliDizi = [];
for (let i = 0; i < 10000; i++) {
  rastgeleSayiliDizi.push(Math.floor(Math.random() * 10000));
}

//Merge sort fonksiyonuyla dizi sıralandı.
function merge(sol, sag) {
  let siralanmisDizi = [];
  while (sol.length && sag.length) {
    if (sol[0] < sag[0]) {
      siralanmisDizi.push(sol.shift());
    } else {
      siralanmisDizi.push(sag.shift());
    }
  }
  return [...siralanmisDizi, ...sol, ...sag];
}

function mergeSort(dizi) {
  const half = dizi.length / 2;

  if (dizi.length <= 1) {
    return dizi;
  }
  const sol = dizi.splice(0, half);
  const sag = dizi;
  return merge(mergeSort(sol), mergeSort(sag));
}

//Selection sort ile dizi sıralandı
function selectionSort(dizi) {
  for (let i = 0; i < dizi.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < dizi.length; j++) {
      if (dizi[j] < dizi[minIndex]) {
        minIndex = j;
      }
    }
    [dizi[i], dizi[minIndex]] = [dizi[minIndex], dizi[i]];
  }
  return dizi;
}

//Selection sort süresi hesaplandı ve döndürüldü
let baslangic1 = new Date().getMilliseconds();
selectionSort(rastgeleSayiliDizi);
let bitis1 = new Date().getMilliseconds();
let sonuc1 = bitis1 - baslangic1;

console.log("Brute Force-Selection fonksiyonuyla " + sonuc1.toFixed(4)+" milisaniye sürdü");

//Merge sort süresi hesaplandı ve döndürüldü
let baslangic2 = performance.now();
mergeSort(rastgeleSayiliDizi);
let bitis2 = performance.now();
let sonuc2 = bitis2 - baslangic2;
console.log("Merge fonksiyonuyla "+ sonuc2.toFixed(4)+" milisaniye sürdü");