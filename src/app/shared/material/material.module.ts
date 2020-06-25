import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule} from '@angular/material/list'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatAutocompleteModule} from '@angular/material/autocomplete'
import { MatIconModule} from '@angular/material/icon'
import { MatInputModule} from '@angular/material/input'
@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatListModule, MatFormFieldModule, MatAutocompleteModule, MatIconModule, MatInputModule ],
  exports: [MatButtonModule, MatListModule, MatFormFieldModule, MatAutocompleteModule, MatIconModule, MatInputModule ]

})
export class MaterialModule { }
