import Clouds from "@/app/components/clouds";
import Spotify from "@/app/components/spotify";

export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-full">
            <div className="small_content w-full md:large_content">
                <div className="absolute z-10 bottom-10">
                    <Spotify
                        playing={true}
                        current_song={
                            {
                                title: "Godspeed",
                                artist: "Frank Ocean",
                                url: "https://open.spotify.com/track/34xTFwjPQ1dC6uJmleno7x?si=dc63d97bef204df8",
                            }
                        }
                    />
                </div>
            </div>

            <div className="relative z-0 overflow-hidden">
                <Clouds
                    type={"top_heavy"}
                />
            </div>
        </footer>
    );
}