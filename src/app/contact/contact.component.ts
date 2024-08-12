import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: '/src/app/contact/contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  onSubmit() {
    alert('Message envoyé !');
  }
}
