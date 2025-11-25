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

  // Variables swipe
  private startX = 0;
  private sidebar!: HTMLElement | null;
  private overlay!: HTMLElement | null;
  private openBtn!: HTMLElement | null;
  private closeBtn!: HTMLElement | null;

  ngAfterViewInit(): void {
    // =====================
    // Scroll navbar
    // =====================
    this.scrollHandler = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (!navbar) return;

      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', this.scrollHandler);

    // =====================
    // Collapse móvil (Bootstrap)
    // =====================
    const nav = document.getElementById('navbarNav');
    if (nav) {
      this.navShowHandler = () => document.body.classList.add('offcanvas-open');
      this.navHideHandler = () => document.body.classList.remove('offcanvas-open');

      nav.addEventListener('show.bs.collapse', this.navShowHandler as EventListener);
      nav.addEventListener('hide.bs.collapse', this.navHideHandler as EventListener);
    }

    // =====================
    // Sidebar Swipe
    // =====================
    this.sidebar = document.getElementById('sidebar');
    this.overlay = document.getElementById('overlay');
    this.openBtn = document.querySelector('.open-sidebar-btn');
    this.closeBtn = document.getElementById('closeSidebar');

    if (this.openBtn) {
      this.openBtn.addEventListener('click', this.openSidebar);
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', this.closeSidebar);
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', this.closeSidebar);
    }

    // Swipe para cerrar
    this.sidebar?.addEventListener('touchstart', (e: TouchEvent) => {
      this.startX = e.touches[0].clientX;
    });

    this.sidebar?.addEventListener('touchmove', (e: TouchEvent) => {
      const moveX = e.touches[0].clientX;
      if (this.startX - moveX > 80) this.closeSidebar();
    });

    // Swipe desde la orilla para abrir
    document.addEventListener('touchstart', (e: TouchEvent) => {
      if (e.touches[0].clientX < 20) {
        this.startX = e.touches[0].clientX;
      }
    });

    document.addEventListener('touchmove', (e: TouchEvent) => {
      const moveX = e.touches[0].clientX;
      if (this.startX < 20 && moveX - this.startX > 120) this.openSidebar();
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);

    const nav = document.getElementById('navbarNav');
    if (nav) {
      nav.removeEventListener('show.bs.collapse', this.navShowHandler as EventListener);
      nav.removeEventListener('hide.bs.collapse', this.navHideHandler as EventListener);
    }

    if (this.openBtn) this.openBtn.removeEventListener('click', this.openSidebar);
    if (this.closeBtn) this.closeBtn.removeEventListener('click', this.closeSidebar);
    if (this.overlay) this.overlay.removeEventListener('click', this.closeSidebar);
  }

  // =====================
  // Métodos para abrir/cerrar sidebar
  // =====================
  private openSidebar = () => {
    this.sidebar?.classList.add('open');
    this.overlay?.classList.add('show');
  };

  private closeSidebar = () => {
    this.sidebar?.classList.remove('open');
    this.overlay?.classList.remove('show');
  };
}
