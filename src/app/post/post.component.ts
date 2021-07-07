import {EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post | any
  @Output() onDeletPost = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  removePost() {
    this.onDeletPost.emit(this.post.id)
  }

}
