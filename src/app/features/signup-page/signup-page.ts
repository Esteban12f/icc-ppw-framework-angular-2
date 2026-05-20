import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from './validators/password-match.validator';
import { emailUniqueValidator } from './validators/email-unique.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPage {

  // emailControl = new FormControl(
  //   '', // Valor inicial
  //   [Validators.required, Validators.email], // Validadores síncronos
  //   []); // Validadores asíncronos

  // get email(){
  //   return this.emailControl;
  // }

  private router = inject(Router);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email], [emailUniqueValidator()]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  }, { validators: passwordMatchValidator });

  get email(){ return this.form.get('email')!; }

  get password(){ return this.form.get('password')!; }

  get confirmPassword(){ return this.form.get('confirmPassword')!; }

  onSubmit() {
    if (this.form.invalid) {
      // Marcar todos los campos como touched para mostrar errores
      this.form.markAllAsTouched();

      return;
    }

    console.log('Datos del formulario:', this.form.value);
  
    // Por ahora, navegar a home
    this.router.navigate(['/']);
  }

}
