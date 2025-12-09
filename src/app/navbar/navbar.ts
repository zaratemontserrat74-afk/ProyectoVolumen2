import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements AfterViewInit, OnDestroy {

  private scrollHandler!: () => void;
  private navShowHandler!: () => void;
  private navHideHandler!: () => void;

  ngAfterViewInit(): void {
    this.scrollHandler = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (!navbar) return;
      if (window.scrollY > 100) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', this.scrollHandler);

    const offcanvas = document.getElementById('offcanvasNavbar');
    if (offcanvas) {
      this.navShowHandler = () => document.body.classList.add('offcanvas-open');
      this.navHideHandler = () => document.body.classList.remove('offcanvas-open');

      offcanvas.addEventListener('show.bs.offcanvas', this.navShowHandler as EventListener);
      offcanvas.addEventListener('hide.bs.offcanvas', this.navHideHandler as EventListener);
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);

    const offcanvas = document.getElementById('offcanvasNavbar');
    if (offcanvas) {
      offcanvas.removeEventListener('show.bs.offcanvas', this.navShowHandler as EventListener);
      offcanvas.removeEventListener('hide.bs.offcanvas', this.navHideHandler as EventListener);
    }
  }
}
