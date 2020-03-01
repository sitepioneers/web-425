import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { NavComponent } from './components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatCheckboxModule,
	MatSelectModule,
	MatListModule,
	MatDividerModule,
	MatToolbarModule,
	MatMenuModule,
	MatSidenavModule,
	MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
		imports: [
			RouterTestingModule,
			FormsModule,
			ReactiveFormsModule,
			HttpClientModule,
			BrowserAnimationsModule,
			FlexLayoutModule,
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
		declarations: [
			AppComponent,
			NavComponent
		],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have the title 'Bob's Computer Repair Shop'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('Bob\'s Computer Repair Shop');
	});

	it('should render title in a h1 tag', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Bob\'s Computer Repair Shop');
	}));

	it(`should render grandTotal in a h3 tag and contain the word 'Total'`, async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h3').textContent).toContain('Total');
	}));

	it(`should have the checkboxOptions 'defined'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.checkboxOptions).toBeDefined();
	});

	it('should have the calculateTotal function return a numeric value', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.calculateTotal()).toBeGreaterThanOrEqual(0);
	});
});
