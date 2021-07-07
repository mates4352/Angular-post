import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    { title: "lorem-1", text: "lorem-1 lorem-1 lorem-1 lorem-1", id: 1 },
    { title: "lorem-2", text: "lorem-2 lorem-2", id: 2 }
  ]

  addPost(post: Post) {
    this.posts.unshift(post)
  }

  removePost() {
    this.posts.shift()
  }

  delete(id:number) {
    this.posts = this.posts.filter(item => item.id !== id)
  }

}
