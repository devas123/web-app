import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Academy} from '../../../commons/model/competition.model';
import {Competitor} from "../../../commons/model/competition.model";

@Injectable()
export class RegistrationService {
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) {
  }

  getAmount(promo: string, competitionId: string) {
    let params: HttpParams = new HttpParams();
    params.set('promo', promo);
    params.set('competitionId', competitionId);
    return this.http.get('register/amount/', {params: params})
  }

  registerCompetitor(comp: Competitor, competitionId: string) {
    const body = JSON.stringify(comp);
    let params: HttpParams = new HttpParams();
    params.set('competitionId', competitionId);
    return this.http.post('register/competitor/', body, {headers: this.headers, params: params});
  }

  removeCompetitor(email: string, competitionId: string) {
    const body = JSON.stringify({email});
    let params: HttpParams = new HttpParams();
    params.set('competitionId', competitionId);
    return this.http.post('register/remove/', body, {headers: this.headers, params: params});
  }

  updateCompetitor(competitor: Competitor, competitionId: string) {
    const body = JSON.stringify(competitor);
    let params: HttpParams = new HttpParams();
    params.set('competitionId', competitionId);
    return this.http.post('register/update/', body, {headers: this.headers, params: params});
  }

  weights(gender: string, ageDivision: string, competitionId: string) {
    let params: HttpParams = new HttpParams();
    params.set('gender', gender);
    params.set('ageDivision', ageDivision);
    params.set('competitionId', competitionId);
    return this.http.get('register/weights/', {params: params})
  }

  ageDivisions(birthDate: string, gender: string, competitionId: string) {
    let params: HttpParams = new HttpParams();
    params.set('birthDate', birthDate);
    params.set('gender', gender.toUpperCase());
    params.set('competitionId', competitionId);
    return this.http.get('register/ageDivisions/', {params: params})
  }



  validateEmail(email: string, competitionId: string) {
    let params: HttpParams = new HttpParams();
    params.set('email', email);
    params.set('competitionId', competitionId);
    return this.http.get('register/validateEmail/', {params: params})
  }

  validatePromo(promo: string, competitionId: string) {
    let params: HttpParams = new HttpParams();
    params.set('promo', promo);
    params.set('competitionId', competitionId);
    return this.http.get('register/validatePromo/', {params: params})
  }

  getAcademies() {
    return this.http.get('register/getAcademies/');
  }

  addAcademy(academy: Academy) {
    return this.http.post('register/addAcademy/', JSON.stringify(academy), {headers: this.headers});
  }

  checkAcademyExist(academy: Academy) {
    return this.http.post('register/checkAcademyExist/', JSON.stringify(academy), {headers: this.headers});
  }
}
