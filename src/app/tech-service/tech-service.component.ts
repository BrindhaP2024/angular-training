import { Component,OnInit } from '@angular/core';
import { TechService } from '../services/tech.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tech-service',
  standalone:true,
  imports: [NgFor],
  providers:[TechService],
  templateUrl: './tech-service.component.html',
  styleUrl: './tech-service.component.css'
})
export class TechServiceComponent {
  service :string[] =[];

 constructor(private techService:TechService){}
  ngOnInit():void{
   this.service = this.techService.getTech();
  }

 }

