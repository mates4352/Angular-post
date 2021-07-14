import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts:Post[], find:string, SearchTitleText:string): Post[] {
    if(!find.trim()){
      return posts
    }

    return posts.filter((post: any)=>{
      return post[SearchTitleText].toUpperCase().includes(find.toUpperCase())
    })
  }

}
