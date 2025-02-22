import {SpotifyProps} from "@/props/components/spotify";

export default function Spotify(props: SpotifyProps) {
    return (
        <div className="flex flex-row w-fit pl-5 pr-5 pt-2.5 pb-2.5 rounded-2xl bg-[var(--spotify-primary)] border-b-8 border-b-[var(--spotify-secondary)]">

            {/* Spotify icon/svg */}
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5 0C10.9686 0 0 10.9686 0 24.5C0 38.0314 10.9686 49 24.5 49C38.0314 49 49 38.0314 49 24.5C49 10.9702 38.0314 0.00167178 24.5 0ZM35.7361 35.3348C35.2964 36.057 34.3552 36.2827 33.6363 35.8431C27.8837 32.3273 20.6415 31.5332 12.1137 33.4808C11.2912 33.6697 10.4721 33.1548 10.2848 32.3323C10.0959 31.5098 10.6091 30.6906 11.4333 30.5034C20.7652 28.3719 28.7714 29.2897 35.2295 33.2351C35.9484 33.6781 36.1774 34.616 35.7361 35.3348ZM38.7336 28.6661C38.1802 29.5655 37.0033 29.8464 36.1055 29.2947C29.522 25.2473 19.4813 24.0754 11.6925 26.4393C10.6827 26.7452 9.6161 26.1751 9.3085 25.167C9.00423 24.1573 9.57431 23.0924 10.5824 22.7847C19.4796 20.0848 30.5418 21.3922 38.1033 26.0397C39.0027 26.5931 39.2869 27.7683 38.7336 28.6661ZM38.991 21.7182C31.0935 17.0288 18.067 16.5975 10.5272 18.8845C9.31685 19.2523 8.03627 18.5685 7.67015 17.3581C7.30403 16.1478 7.98611 14.8672 9.19816 14.4994C17.853 11.873 32.2387 12.3796 41.3299 17.7761C42.4182 18.4231 42.7759 19.829 42.1306 20.9157C41.487 22.0057 40.0777 22.3651 38.991 21.7182Z" fill="#FAFAFA"/>
            </svg>

            {/* Actual content / currently playing */}
            <div className={"ml-5"}>
                <p>Currently Playing...</p>

                {props.playing && props.current_song ? (
                    <div>
                        <p>{props.current_song.title} - {props.current_song.artist}</p>
                    </div>
                ) : (
                    <p>Nothing right now..</p>
                )}
            </div>
        </div>
    );
}