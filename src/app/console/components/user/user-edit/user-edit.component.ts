import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup;
  isNewUser: boolean;
  userId: number | string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.isNewUser = this.userId === 'new';
    this.buildForm();
    if (!this.isNewUser) {
      this.getUser();
    }
  }

  private getUser() {
    const user = this.userService.getUser(+this.userId);
    this.userForm.patchValue(user);
  }

  private buildForm(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [''],
      phone: ['']
    });
  }

  saveUser() {
    if (this.isNewUser) {
      this.userService.addUser(this.userForm.value);
    } else {
      const userToUpdate = { ...this.userForm.value, id: +this.userId };
      this.userService.updateUser(userToUpdate);
    }
    this.router.navigate(['/user/list']);
  }

}
