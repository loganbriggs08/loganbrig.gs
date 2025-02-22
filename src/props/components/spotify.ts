import {SpotifyPlaying} from "@/interfaces/spotify";

export interface SpotifyProps {
    playing: boolean; // Is something currently playing?
    current_song?: SpotifyPlaying; // Optional, maybe something isn't playing.
}