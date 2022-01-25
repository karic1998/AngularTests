import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('Unit testovi', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('App treba biti kreirana/pokrenuta', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Naslov mora biti 'Kalkulator za naseg malog Senada'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Kalkulator za naseg malog Senada');
  });

  describe('Test sabiranja', () => {
    it('Proslijedjeni parametri su 1 i 4. Rezultat treba biti 5.', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const instance = fixture.debugElement.componentInstance;
      const result = instance.plus(1, 4);
      expect(result).toEqual(5);
    });
  });

  describe('Test oduzimanja', () => {
    it('Proslijedjeni parametri su 4 i 1. Rezultat treba biti 3.', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const instance = fixture.debugElement.componentInstance;
      const result = instance.minus(4, 1);
      expect(result).toEqual(3);
    });
  });

  describe('Test djeljenja', () => {
    it('Proslijedjeni parametri su 4 i 2. Rezultat treba biti 2.', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const instance = fixture.debugElement.componentInstance;
      const result = instance.divide(4, 2);
      expect(result).toEqual(2);
    });
  });

  describe('Test mnozenja', () => {
    it('Proslijedjeni parametri su 4 i 2. Rezultat treba biti 8.', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const instance = fixture.debugElement.componentInstance;
      const result = instance.times(4, 2);
      expect(result).toEqual(8);
    });
  });
});
