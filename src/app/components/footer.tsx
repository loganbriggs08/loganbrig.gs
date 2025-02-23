import Clouds from "@/app/components/clouds";
import Spotify from "@/app/components/spotify";

export default function Footer() {
    return (
        <footer className="w-full relative">
            {/* Clouds stay in the background */}
            <div className="relative z-0 overflow-hidden">
                <Clouds type="top_heavy" />
            </div>

            {/* Content container positioned absolutely over the clouds */}
            <div className="absolute bottom-0 w-full">
                <div className="content ml-auto mr-auto">
                    {/* Flex container ensures proper spacing */}
                    <div className="flex flex-row justify-between items-center py-10">
                        <div className="flex flex-row">
                            <input
                                type="text"
                                placeholder="Email Address"
                            />
                            <button className="btn btn-primary ml-3">
                                Join Newsletter
                            </button>
                        </div>

                        {/* Spotify stays aligned to the right within the container */}
                        <div>
                            <Spotify
                                playing={true}
                                current_song={{
                                    title: "Godspeed",
                                    artist: "Frank Ocean",
                                    url: "https://open.spotify.com/track/34xTFwjPQ1dC6uJmleno7x?si=dc63d97bef204df8",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>



    );
}
