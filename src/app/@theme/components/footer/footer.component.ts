import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://github.com/leekhai18/Where2Go" 
    target="_blank">Where2Go</a></b> 2018</span>
    <div class="socials">
      <a href="https://github.com/leekhai18/Where2Go" target="_blank" class="ion ion-social-github"></a>
      <a href="https://github.com/leekhai18/Where2Go" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://github.com/leekhai18/Where2Go" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://github.com/leekhai18/Where2Go" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
