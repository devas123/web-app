import {Observable, of} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpProgressEvent} from '@angular/common/http';
import * as env from '../../environments/environment';
import {QueryServiceRequest} from "@frontend-nx/protobuf";
import {AbstractHttpService} from "./abstract.http.service";

const {
  competitionQueryEndpoint,
} = env.environment;

@Injectable()
export class PictureUploadService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http)
  }

  endpoint = (competitionId: string) =>  `${competitionQueryEndpoint}/${competitionId}/image`;


  saveCompetitionInfoImage(competitionId: string, competitionInfoImage: ArrayBuffer): Observable<number> {
    return of(competitionInfoImage)
      .pipe(
        filter(body => body instanceof ArrayBuffer),
        map(fileBytes => (
          QueryServiceRequest.encode(<QueryServiceRequest>{
              addCompetitionImageRequest: {
                image: new Uint8Array(fileBytes as ArrayBuffer)
              }
            }
          ).finish().buffer
        )),
        switchMap(bytes => this.sendByteArrayToEndpointWithProgress(this.endpoint(competitionId), bytes, AbstractHttpService.defaultTimeout)),
        filter(event => event.type === HttpEventType.UploadProgress),
        map((event: HttpProgressEvent) => Math.round(100 * (event.loaded / event.total)))
      )
  }

  deleteCompetitionInfoImage(competitionId: string): Observable<number> {
    return this.sendDeleteRequestToEndpointWithProgress(this.endpoint(competitionId), AbstractHttpService.defaultTimeout)
      .pipe(
        filter(event => event.type === HttpEventType.UploadProgress),
        map((event: HttpProgressEvent) => Math.round(100 * (event.loaded / event.total)))
      )
  }
}
