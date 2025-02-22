import {CardProps} from "@/props/components/card";

export default function Card(props: CardProps) {
    return (
        <div className="p-4 pt-6 rounded-xl bg-[var(--mid-blue)] border-b-8 border-b-[var(--dark-blue)]">
            <h2 className="text-xl font-semibold">
                {props.title}
            </h2>

            <p className="mt-2.5 text-md font-medium">
                {props.content}
            </p>
        </div>
    );
}