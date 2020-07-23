        const tahunKabisat = (awal,akhir) =>{
        while(awal <= akhir){
        let cekKabisat = new Date(awal, 1, 29).getDate() === 29;
        if(cekKabisat == true) {
            console.log(`${awal} tahun kabisat`);
            } else { console.log(`${awal} bukan tahun kabisat`);
            }   
        awal++  

        }


        }

        tahunKabisat(2000,2020);