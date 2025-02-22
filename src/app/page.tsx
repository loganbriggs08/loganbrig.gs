import Footer from "@/app/components/footer";
import Card from "@/app/components/card";

export default function Home() {
	return (
		<main>
            <div className="mt-10 small_content md:large_content">
                <div className="">
                    <button className="btn btn-primary">
                        My Work
                    </button>

                    <button className="btn btn-secondary ml-3 mb-10">
                        Contact Me
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <Card
                        title={"Card Title"}
                        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    />

                    <Card
                        title={"Card Title"}
                        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    />
                </div>
            </div>

            <Footer />
		</main>
	);
}
