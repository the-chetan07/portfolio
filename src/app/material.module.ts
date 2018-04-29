import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
})
export class MaterialModule { }
