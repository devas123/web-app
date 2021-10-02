import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const flyOut = trigger('flyInOut', [
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
    animate(600, keyframes([
      style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
      style({opacity: 1, transform: 'translateX(15px)', offset: 0.5}),
      style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
    ]))
  ]),
  transition('* => void', [
    animate(600, keyframes([
      style({opacity: 1, transform: 'translateX(0)', offset: 0}),
      style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
      style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
    ]))
  ])
]);
