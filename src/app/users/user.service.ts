import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';

@Injectable()
export class UserService {

    private apiKey: string = '_y0SMMUiBsvI-hxQ3o1ebWmSjWtpjIOr';
    private db: string = 'foo';
    private collection: string = 'users';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

    constructor(
        private http: HttpClient
    ) { }

    getUserList(): Observable<Array<User>> {
        return this.http.get<Array<User>>(`https://api.mlab.com/api/1/databases/${this.db}/collections/${this.collection}?apiKey=${this.apiKey}`)
    }

    addNewUser(user): Observable<User> {

        let data = JSON.stringify(user);
        return this.http.post<User>(`https://api.mlab.com/api/1/databases/${this.db}/collections/${this.collection}?apiKey=${this.apiKey}`, data, this.httpOptions);
    }

    updateUser(user, id): Observable<User> {
        let data = JSON.stringify(user);
        let _id = `{$oid:${id}}`;
        return this.http.put<User>(`https://api.mlab.com/api/1/databases/${this.db}/collections/${this.collection}?apiKey=${this.apiKey}&q=${_id}`, data, this.httpOptions);

    }

    deleteUser(id): Observable<User> {
        return this.http.delete<User>(`https://api.mlab.com/api/1/databases/${this.db}/collections/${this.collection}/${id}/?apiKey=${this.apiKey}`);
    }

}
