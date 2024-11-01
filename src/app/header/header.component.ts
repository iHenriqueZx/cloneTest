import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('loginModal', { static: true }) loginModal!: ElementRef;
  @ViewChild('registerModal', { static: true }) registerModal!: ElementRef;
  @ViewChild('closeButton', { static: true }) closeButton!: ElementRef;

  // Abrir
  openModal(): void {
    this.loginModal.nativeElement.style.display = 'block';
  }
  openRegister(): void{
    this.registerModal.nativeElement.style.display = 'block';
  }
  // Fechar
  closeModal(): void {
    this.loginModal.nativeElement.style.display = 'none';
    this.registerModal.nativeElement.style.display = 'none';
  }
  closeRegister(): void{
    this.registerModal.nativeElement.style.display = 'none';
    this.loginModal.nativeElement.style.display = 'none';
  }
  // Voltar
  back(): void{
    this.registerModal.nativeElement.style.display = 'none';
  }
  // Fechar 2
  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent): void {
    if (event.target === this.loginModal.nativeElement) {
      this.closeModal();
      this.closeRegister;
    }
  }
  @HostListener('window:click', ['$event'])
  onNewWindowClick(event: MouseEvent): void{
    if(event.target === this.registerModal.nativeElement){
      this.closeRegister;
      this.closeModal;
    }
  }
}

