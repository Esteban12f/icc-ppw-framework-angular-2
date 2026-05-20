import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FormUtils } from '../../../../shared/utils/form-utils/form-utils';

@Component({
  selector: 'app-profile-page',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0, [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });

  get nombre() {
    return this.myForm.controls.nombre;
  }

  get edad() {
    return this.myForm.controls.edad;
  }

  get correo() {
    return this.myForm.controls.correo;
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }


}
