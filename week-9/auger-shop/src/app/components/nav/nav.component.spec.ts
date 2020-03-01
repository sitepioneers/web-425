import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import {
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatCheckboxModule,
	MatSelectModule,
	MatIconModule,
	MatListModule,
	MatDividerModule,
	MatToolbarModule,
	MatMenuModule,
	MatSidenavModule,
	MatCardModule
} from '@angular/material';

describe('NavComponent', () => {
	let component: NavComponent;
	let fixture: ComponentFixture<NavComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MatFormFieldModule,
				MatInputModule,
				MatButtonModule,
				MatCheckboxModule,
				MatSelectModule,
				MatListModule,
				MatIconModule,
				MatDividerModule,
				MatToolbarModule,
				MatMenuModule,
				MatSidenavModule,
				MatCardModule
			],
			declarations: [ NavComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the navigation', () => {
		expect(component).toBeTruthy();
	});

	it('should have a links array with values', () => {
		expect(component.links).toBeDefined();
	});
});
