import { Component } from '@angular/core';
import { ActivatedRoute,RouterLink, RouterLinkActive} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  providers:[UserService],
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
