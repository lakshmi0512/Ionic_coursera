import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Leader } from '../shared/leader'
import { HttpClient } from '@angular/common/http';

import { baseURL } from '../shared/baseurl'

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient ) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders');
  }

  getLeader(id:string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders/' + id);
  }

  getFeaturedLeader ():Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders?featured=true').pipe(map (leaders => leaders[0]));
  }

  getLeaderIds(): Observable<string[] |any> {
    return this.getLeaders().pipe(map(leaders => leaders.map(leader => leader.id)))
  }
}