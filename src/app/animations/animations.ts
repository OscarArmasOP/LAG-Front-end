import {trigger, state, animate, transition, style, query, keyframes, stagger, group} from '@angular/animations'


export const Animations=[
    trigger('mover-fotografias', [
        
        transition('*=>right' ,[
            style({transform:'translateX(100%)'}),
            animate('1000ms 500ms cubic-bezier(0.23, 1, 0.32, 1)', style('*'))
        ]),
        transition('*=>left' ,[
            style({transform:'translateX(-100%)'}),
            animate('1000ms 500ms cubic-bezier(0.23, 1, 0.32, 1)', style('*'))
        ]),
        transition('*=>void', [
            style({'z-index': 0}),
            animate('1500ms',keyframes([
                style({opacity:0.5, offset: 0.3}),
                style({opacity:0, offset: 1}),
            ]))
        ])
    ])
]