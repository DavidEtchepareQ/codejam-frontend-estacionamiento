import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    navCollapsed: boolean;
    navCollapsedMob: boolean;

    // public method
    navMobClick() {
        if (this.navCollapsedMob && !document.querySelector('app-navigation.pc-sidebar')?.classList.contains('mob-open')) {
            this.navCollapsedMob = !this.navCollapsedMob;
            setTimeout(() => {
                this.navCollapsedMob = !this.navCollapsedMob;
            }, 100);
        } else {
            this.navCollapsedMob = !this.navCollapsedMob;
        }
        if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('navbar-collapsed')) {
            document.querySelector('app-navigation.pc-sidebar')?.classList.remove('navbar-collapsed');
        }
    }

    handleKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Escape') {
            this.closeMenu();
        }
    }

    closeMenu() {
        if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('mob-open')) {
            document.querySelector('app-navigation.pc-sidebar')?.classList.remove('mob-open');
        }
    }
}
