import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="child">
		<h2>Child</h2>
		<div>Greeting {{ greeting }}</div>
		<div>User name: {{ user.name }}</div>
	</div>
  `,
  styles: [`
	.child {
		background: lightgray;
	}
  `]
})

export class ChildComponent implements OnInit {
	@Input() greeting: string;
	@Input() user: { name: string };

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log(JSON.stringify(changes, null, 2));
	}
}
