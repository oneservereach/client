import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListfriendsComponent } from './post-listfriends.component';

describe('PostListfriendsComponent', () => {
  let component: PostListfriendsComponent;
  let fixture: ComponentFixture<PostListfriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListfriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
