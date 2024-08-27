import Image from "next/image";
import TopNav from "@/componts/TopNav";
import PostList from "@/componts/PostList";

export default function Home() {
    return (
        <main>
            <TopNav></TopNav>
            <PostList></PostList>
        </main>
    );
}
