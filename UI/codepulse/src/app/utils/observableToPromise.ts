import { Observable, firstValueFrom } from 'rxjs';

export default async function toPromise<T>(observable: Observable<T>) {
  return firstValueFrom(observable);
}
