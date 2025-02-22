import Footer from "@/app/components/footer";
import Card from "@/app/components/card";
import Accordion from "@/app/components/accordion";
// import Clouds from "@/app/components/clouds";

export default function Home() {
	return (
		<main>
            <div className="bg-[var(--space-blue)]">
                <div className="pt-56 small_content md:large_content">
                    <div>
                        <h1 className="text-5xl font-semibold">
                            Hi, I&#39;m <a className="underline text-[var(--dark-blue)]">Logan Briggs</a>!
                        </h1>

                        <h1 className="text-5xl font-semibold mt-5">
                            a <span className="text-[var(--dark-blue)]">&#39;Developer&#39;</span> from the UK
                        </h1>
                    </div>


                    <div className="mt-12 pb-20 flex flex-row">
                        <button className="btn btn-primary">
                            Learn more

                            <svg className="w-5 h-5 ml-2 mt-auto mb-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 7L17 17M17 17V7M17 17H7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>

                        <button className="btn btn-secondary ml-3">
                            View my work
                        </button>
                    </div>

                </div>
            </div>
            
            <div className="pt-20 mb-20 small_content md:large_content">
                <Accordion
                    accordions={
                        [
                            {
                                title: "abc",
                                description: "cba",
                            },
                            {
                                title: "abc",
                                description: "cba",
                            }
                        ]
                    }
                />
            </div>

            <div className="pt-20 mb-20 small_content md:large_content">
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
