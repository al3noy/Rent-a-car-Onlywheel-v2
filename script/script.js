function forma(event,style){
    // event.preventDefault();
    let ime=document.getElementById("ime").value;
    let imePolje=document.getElementById("ime");
    let email=document.getElementById("email").value;
    let emailPolje=document.getElementById("email");
    let poruka=document.getElementById("poruka").value;
    let porukaPolje=document.getElementById("poruka");

    let ispisi=[];
    ispisi.push("Niste uneli ime!",
    "Niste uneli email!",
    "Niste uneli poruku!",
    "Niste popunili sva polja");

    let inputVr=[];
    inputVr.unshift(ime, email, poruka);


    if(ime!=="" && email!=="" && poruka!==""){
        alert(`Vasa poruka je zabelezena!
        \nIme i prezime: ${ime}
        \nEmail: ${email}
        \nPoruka: ${poruka}`);

        for(let i=0;i<inputVr.length;i++){
            console.log(inputVr[i].toUpperCase(), inputVr[i].length);
        }
    }
    else if(ime==="" && email==="" && poruka===""){        
        alert(ispisi[3]);
        imePolje.style.borderColor=style;
        emailPolje.style.borderColor=style;
        porukaPolje.style.borderColor=style;
    }
    else if(ime===""){
        alert(ispisi[0]);
        imePolje.style.borderColor=style;  
        if(email===""){
            alert(ispisi[1])
            emailPolje.style.borderColor=style;
        }
        else if(poruka===""){
            alert(ispisi[2]);
            porukaPolje.style.borderColor=style;
        }
    }
    else if(email===""){
        alert(ispisi[1]);        
        emailPolje.style.borderColor=style;
        if(poruka===""){
            alert(ispisi[2]);
            porukaPolje.style.borderColor=style;            
        }
        else if(ime===""){
            alert(ispisi[0]);
            imePolje.style.borderColor=style;
        }
    }
    else if(poruka===""){
        alert(ispisi[2]);
        porukaPolje.style.borderColor=style;
        if(ime===""){
            alert(ispisi[0]);
            imePolje.style.borderColor=style;
        }
        else if(email===""){
            alert(ispisi[2]);
            emailPolje.style.borderColor=style;
        }
    }
}

function prikaziAute(tip){

    if(tip==='auto'){
        let red1=document.getElementById("red1");
        let red2=document.getElementById("red2");
        let red3=document.getElementById("red3");
        let tekst=document.getElementById("dugme");

        let tekstDugme=["Prikaži automobile","Sakrij automobile"];

        if(red1.style.display=='flex' && red2.style.display=='flex' && red3.style.display=='flex'){        
            red1.style.display='none';
            red2.style.display='none';
            red3.style.display='none';  
            tekst.value=tekstDugme[0];      
        }
        else{
            red1.style.display='flex';
            red2.style.display='flex';
            red3.style.display='flex';       
            tekst.value=tekstDugme[1];
        }
        return console.log(`Funkcija izabrana za: ${tip.toUpperCase()}`);
    }
    else if(tip==='usluga'){
        let red1=document.getElementById("usluge1");
        let red2=document.getElementById("usluge2");
        let tekst=document.getElementById("dugme");

        let tekstDugme=["Prikaži usluge","Sakrij usluge"];

        if(red1.style.display=='flex' && red2.style.display=='flex'){        
            red1.style.display='none';
            red2.style.display='none';          
            tekst.value=tekstDugme[0];      
        }
        else{
            red1.style.display='flex';
            red2.style.display='flex';                  
            tekst.value=tekstDugme[1];
        }
        return console.log(`Funkcija izabrana za: ${tip.toUpperCase()}`);
    }
}

function unosRecenzije(){    
    let tabele=document.getElementById("rec");

    let ime=prompt("Unesi ime:");
    let opis=prompt("Unesi opis:");
    let ocena=prompt("Unesi ocenu:");

    let podaci=[ime,opis,ocena];

    let g1=`<table border='1px' id='${podaci[0]}'>
           <tr><th>Ime</th><th>Opis</th><th>Ocena</th></tr>
            <tr>`;
    let d=`</tr></table>`;

    for(let i=0;i<podaci.length;i++){
        g2=g1+`
        <td>${podaci[i-2]}</td><td>${podaci[i-1]}</td><td>${podaci[i]}</td>`;        
    }
    
    let t= g2+d;
    tabele.innerHTML+=t;
    
    document.getElementById(ime).style.margin='40px auto';
    document.getElementById(ime).style.border='2px solid black';
    document.getElementById(ime).style.backgroundColor='#80bfff';
    document.getElementById(ime).style.fontFamily='Verdana';
    document.getElementById(ime).style.textAlign='center';
    document.getElementById(ime).style.color='white';
    document.getElementById(ime).style.borderRadius='10px';
    document.getElementById(ime).style.boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';

    alert("Uspesno ste uneli recenziju! Hvala!");

    return console.log(`Uneta je tabela recenzije za: ${ime.toUpperCase()} ${opis.toUpperCase()} ${ocena}`);
}   