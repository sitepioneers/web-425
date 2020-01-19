import { Injectable } from "@angular/core";
import { Router, CanDeactivate } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Injectable()

export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {
	canDeactivate(component: ProductDetailComponent) {
		if (component.name.dirty) {
			return window.confirm("You haven't saved your changes. Are you sure you want to leave?");
		} else {
			return true;
		}
	}
}