import { createAction, createReducer, on } from "@ngrx/store";

export const previewReducer = createReducer(
  {
    accessory: '../assets/images/accessories/headphone.png',
    ear: '../assets/images/ears/default.png',
    hair: '../assets/images/hair/default.png',
    nose: '../assets/images/nose.png',
    eye: '../assets/images/eyes/default.png',
    mouth: '../assets/images/mouth/default.png',
    neck: '../assets/images/neck/default.png',
    leg: '../assets/images/leg/default.png'
  },
  on(createAction('[Preview] Change Style]'), state => {
    return {
      ...state
    }
  })
)
