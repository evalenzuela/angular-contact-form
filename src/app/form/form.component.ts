import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    subjects = [
        { value:'', display:'None'},
        { value:'comment', display:'Just writing a comment'},
        { value:'question', display:'I have a question'},
        { value:'support', display:'I have a support request'}
    ];

    constructor() { }

    ngOnInit() {
    }

    onSubmit(form) {
        console.log("Enviado!");
        console.log(form);
    }

}
