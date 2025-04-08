import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonpExampleService } from '../jsonp-example.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interceptor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Angular HttpClient</h1>
    <div *ngIf="posts">
      <h2>Posts</h2>
      <ul>
        <li *ngFor="let post of posts">
          {{ post.id }}. {{ post.title }} by {{ post.author }}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./interceptor.component.css'],
})
export class InterceptorComponent implements OnInit {
  posts: any;

  constructor(private http: HttpClient, private jsonpService: JsonpExampleService) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/posts').subscribe({
      next: (data) => {
        console.log('Posts:', data);
        this.posts = data;
      },
      error: (err) => console.error('Error fetching posts:', err),
    });

    this.jsonpService.fetchData('http://localhost:3000/comments?callback=JSONP_CALLBACK');
  }
}
