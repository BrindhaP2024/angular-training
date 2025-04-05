import { Component } from '@angular/core';
import { ActivatedRoute,RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userID:any;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.userID = params.get('userID');

    }) ;

  }


}
