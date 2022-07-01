import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { previewReducer } from "./state/preview.reducer";
@NgModule({
  imports: [
    StoreModule.forFeature('preview', previewReducer)
  ],
})
export class PreviewModule { }
