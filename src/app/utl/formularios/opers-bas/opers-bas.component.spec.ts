import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpersBasComponent } from './opers-bas.component';

describe('OpersBasComponent', () => {
  let component: OpersBasComponent;
  let fixture: ComponentFixture<OpersBasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpersBasComponent]
    });
    fixture = TestBed.createComponent(OpersBasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
