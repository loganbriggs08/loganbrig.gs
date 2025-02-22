import Clouds from "@/app/components/clouds";
import Spotify from "@/app/components/spotify";

export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-full">
            <Spotify playing={false} />

            <Clouds type={"top_heavy"} />
        </footer>
    );
}