import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IUserProfile } from './user-profile.reducer';
import { EchoesState } from '../reducers';

export function getUser$(state$: Store<EchoesState>): Observable<IUserProfile> {
  return state$.select(state => state.user);
}

export function getUserPhoto$(state$: Store<EchoesState>): Observable<string> {
  return state$.select(state => state.user.profile.photoURL);
}

export function getAccessToken$(state$: Store<EchoesState>) {
  // return state$.select(state => state.user.profile.);
}
export function getUserPlaylists$(
  state$: Store<EchoesState>
): Observable<GoogleApiYouTubePlaylistResource[]> {
  return state$.select(state => state.user.playlists);
}

export function getUserViewPlaylist$(state$: Store<EchoesState>) {
  return state$.select(state => state.user.viewedPlaylist);
}
export function getIsUserSignedIn$(state$: Store<EchoesState>) {
  return state$.select(state => {
    return Object.keys(state.user.profile).length > 0;
  });
}
