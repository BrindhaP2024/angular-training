import { PostService } from './../post.service';
import { Component,OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Post } from '../post.model';

@Component({
  selector: 'app-tech-service',
  standalone:true,
  imports: [CommonModule],
  providers:[PostService],
  templateUrl: './tech-service.component.html',
  styleUrl: './tech-service.component.css'
})
export class TechServiceComponent {
  posts :Post[] =[];

  constructor(private PostService: PostService) {}

  ngOnInit(): void {
    this.PostService.getPosts().subscribe({
      next: (data) => {
        console.log('Posts:', data);
        this.posts = data;
      },
    });
  }
}

