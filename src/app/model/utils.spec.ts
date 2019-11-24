import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { Utils } from './utils'

describe('Utils', () => {
	let component: Utils;
	let fixture: ComponentFixture<Utils>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Utils]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Utils);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
