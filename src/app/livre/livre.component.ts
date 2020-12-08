import { Component, OnInit,Input } from '@angular/core';
import {Livre} from "../livre" ;
@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input() livre : Livre  ;
  @Input() nb : number  ;
  constructor() { }

  ngOnInit(): void {
  }

}
