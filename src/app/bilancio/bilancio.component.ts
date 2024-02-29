import { Component } from '@angular/core';

@Component({
  selector: 'app-bilancio',
  templateUrl: './bilancio.component.html',
  styleUrls: ['./bilancio.component.css']
})
export class BilancioComponent {
  bilancio : number[] = [999, -999, 50];

  numero : number = 0;

  aggiungiEntrata() {
    if(this.numero > 0) {
      this.bilancio.push(this.numero);
      this.numero = 0;
    } else {
      alert("Inserisci un numero CORRETTO");
    }
  }

  aggiungiUscita() {
    if(this.numero > 0) {
      this.bilancio.push(-this.numero);
      this.numero = 0;
    } else {
      alert("Inserisci un numero CORRETTO");
    }
  }

  rimuoviMovimento(i : number) {
    this.bilancio.splice(i, 1);
  }

  sommaEntrate(){
    let ris = 0;

    for(const n of this.bilancio)
      if(n > 0)
        ris += n;
    
    return ris;
  }

  sommaUscite(){
    let ris = 0;

    for(const n of this.bilancio)
      if(n < 0)
        ris += n;
    
    return ris;
  }

  sommaMovimenti(){
    return this.sommaEntrate() + this.sommaUscite();
  }
}
