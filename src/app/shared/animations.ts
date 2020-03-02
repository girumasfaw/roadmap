import { trigger, style, transition, animate, state, keyframes, query, stagger } from '@angular/animations';
export let fade = trigger('fade', [
    state('void', style({opacity:0})),
    transition(':enter, :leave',[animate(200)])
])


export let cardAnimation = trigger('cardAnimation', [
    state('void', style({opacity:0, transform: 'translateX(-300px)'})),
    transition(':enter',[
        animate(200,style(
            {opacity: 1, transform: 'none'}
        ))
    ])
])

export let taskAnimation = trigger('taskAnimation',[
    state('void', style({opacity:0, transform: 'translateX(-300px)'})),
    transition(':enter',[
        animate(200,style(
            {opacity: 1, transform: 'none'}
        ))
    ])

])
