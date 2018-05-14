import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user-console';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  @Input() users: User[];
  @Output() deleteUser = new EventEmitter<number>();

  deleteHandler(id: number) {
    this.deleteUser.emit(id);
  }
}
