import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../auth-config';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router, private oauthService: OAuthService) {
    this.configure();
   }

  ngOnInit() {
  }

  login() {
       this.oauthService.initLoginFlow();
  }
  register() {
    window.location.href = environment.id_server + "/register.html"
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
