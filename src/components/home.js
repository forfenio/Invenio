import React, { useState, useEffect } from 'react';
import Post from './post'

function Home () {
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const posts = await (await fetch('http://localhost:3000/posts')).json();
            setFetchedPosts(posts);
        }
        fetchPosts();
    }, [])
    return (
        <div className="home">
            {
                fetchedPosts.map((post, index) => (
                        <Post {...post} key={index} />
                ))
            }
        </div>
    );
}

export default Home;