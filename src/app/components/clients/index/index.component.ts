import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [MessageService]
})
export class IndexComponent implements OnInit{

  listItemInCart: any[] = [];
  totalPrice = 0;
  heart = faHeart;
  bag = faShoppingBag;
  phone = faPhone;
  userIcon = faUser;
  logoutIcon = faRightFromBracket;
  bars = faBars;

  showDepartment = false;

  loginForm : any = {
    username : null,
    password : null
  }

  registerForm : any = {
    username: null,
    email: null,
    password: null
  }

  isSuccessful = false;
  isSignUpFailed = false;
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  errorMessage = '';
  authModal : boolean = false;
  listCategoryEnabled : any;


  keyword: any;
  // facebook: faFacebook;
  constructor(
    private messageService: MessageService,
    private library: FaIconLibrary) {
    // @ts-ignore
    library.addIcons(faGithub, faFacebook, faInstagram);
  }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  showDepartmentClick(){
    this.showDepartment = !this.showDepartment;
  }


  showSuccess(text: string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: text});
  }
  showError(text: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: text});
  }

  showWarn(text: string) {
    this.messageService.add({severity:'warn', summary: 'Warn', detail: text});
  }
}
