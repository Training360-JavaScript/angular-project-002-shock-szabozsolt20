import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  dataList: User[] = this.userService.list;
  currentUser: User = new User();
  constructor(private userService: UserService) { }

  setSelectedUser(selectedUser: User): void {
    this.currentUser = selectedUser;
  }

  updateUser(selectedUser: User): void {
    this.userService.updateUser(selectedUser);
  }

  removeUser(selectedUser: User): void {
    this.userService.removeUser(selectedUser);
  }

  phrase: string ='';
  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
/*     let input = (document.querySelector('input[placeholder=Search]') as HTMLInputElement);
    if (input) {
    this.phrase = input.value;
    }
 */   }


}
