import { TestBed } from "@angular/core/testing";
import { ViewFilterComponent } from "./view-filter.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import SpyObj = jasmine.SpyObj;

describe('The view filter componennt', () => {
    let vfc: ViewFilterComponent,
        fb: SpyObj<FormBuilder> = jasmine.createSpyObj<FormBuilder>('FormBuilder', ['group']);
        const ans = new FormGroup({});
        fb.group.and.returnValue(ans);
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ViewFilterComponent,
                {
                    provide: FormBuilder,
                    useValue: fb
                }
            ]
        });
        vfc = TestBed.get(ViewFilterComponent);
        fb = TestBed.get(FormBuilder);
    });
    it('should set up it\'s form correctly', () => {
        expect(vfc.filterForm).toBe(ans);
        expect(fb.group).toHaveBeenCalled();
    });
})