import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const components = [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
];

@NgModule({
    imports: [
        ...components,
    ],
    exports: [
        ...components,
    ]
})
export class MaterialModule { }