import {SpotifyProps} from "@/props/components/spotify";

export default function Spotify(props: SpotifyProps) {
    function stringParse(initialString: string, charMax: number): string {
        if (initialString.length < charMax) {
            return initialString;
        } else {
            return initialString.slice(0, charMax) + "...";
        }
    }

    return (
        <div className="flex flex-row w-fit pl-5 pr-5 pt-2.5 pb-2.5 rounded-2xl bg-[var(--spotify-primary)] border-b-8 border-b-[var(--spotify-secondary)]">
            {/* Spotify icon/svg */}
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5 0C10.9686 0 0 10.9686 0 24.5C0 38.0314 10.9686 49 24.5 49C38.0314 49 49 38.0314 49 24.5C49 10.9702 38.0314 0.00167178 24.5 0ZM35.7361 35.3348C35.2964 36.057 34.3552 36.2827 33.6363 35.8431C27.8837 32.3273 20.6415 31.5332 12.1137 33.4808C11.2912 33.6697 10.4721 33.1548 10.2848 32.3323C10.0959 31.5098 10.6091 30.6906 11.4333 30.5034C20.7652 28.3719 28.7714 29.2897 35.2295 33.2351C35.9484 33.6781 36.1774 34.616 35.7361 35.3348ZM38.7336 28.6661C38.1802 29.5655 37.0033 29.8464 36.1055 29.2947C29.522 25.2473 19.4813 24.0754 11.6925 26.4393C10.6827 26.7452 9.6161 26.1751 9.3085 25.167C9.00423 24.1573 9.57431 23.0924 10.5824 22.7847C19.4796 20.0848 30.5418 21.3922 38.1033 26.0397C39.0027 26.5931 39.2869 27.7683 38.7336 28.6661ZM38.991 21.7182C31.0935 17.0288 18.067 16.5975 10.5272 18.8845C9.31685 19.2523 8.03627 18.5685 7.67015 17.3581C7.30403 16.1478 7.98611 14.8672 9.19816 14.4994C17.853 11.873 32.2387 12.3796 41.3299 17.7761C42.4182 18.4231 42.7759 19.829 42.1306 20.9157C41.487 22.0057 40.0777 22.3651 38.991 21.7182Z" fill="#FAFAFA"/>
            </svg>

            {/* Actual content / currently playing */}
            <div className="ml-5">
                <p className="font-medium">
                    Currently listening to...
                </p>

                {props.playing && props.current_song ? (
                    <p className="font-semibold text-lg">
                        {stringParse(props.current_song.title, 10)} - {stringParse(props.current_song.artist, 12)}
                    </p>
                ) : (
                    <p className="font-semibold text-lg">
                        Nothing Right Now..
                    </p>
                )}
            </div>

            {props.playing && props.current_song ? (
                <div className="mt-auto mb-auto ml-5 hover:opacity-80">
                    <a href={props.current_song.url} target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            ) : null}

        </div>
    );
}