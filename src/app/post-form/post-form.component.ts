import {EventEmitter, Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  @Output() onRemov = new EventEmitter<Post>()
  @Output() send = new EventEmitter<string>()
  @Output() TitleText = new EventEmitter<string>()
  @ViewChild('Title') titleFocus: ElementRef | any

  title = ''
  text = ''
  Search = ''
  SearchTitleText="Search title"

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {

      if (this.title.length < 20 && this.text.length < 80) {

        const post: Post = {
          title: this.title,
          text: this.text,
        }

        this.title = this.text = ''

        this.onAdd.emit(post)
        console.log(post);

      } else {
        alert("Заголовок больше 20 символом, текст больше 80 символов, нельзя!")
      }

    } else {
      alert('Пустая строка, введите строку')
    }

  }

  removePost() {
    this.onRemov.emit()
  }

  focusInputTitle() {
    this.titleFocus.nativeElement.focus()
  }

  SearchTitle(){
    this.send.emit(this.Search)
    this.TitleText.emit(this.SearchTitleText)
  }

  SearchText(){
    this.send.emit(this.Search)
    this.TitleText.emit(this.SearchTitleText)
  }

}
