import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  name: string = 'diEgO hErnánDez';

  showName()
  {
    console.log(this.name)
  }
}
