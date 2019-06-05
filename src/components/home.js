import React, { useState, useEffect } from 'react';
import Post from './post'

function Home (props) {
    const [searchInput, setSearchInput] = useState("");
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const posts = await (await fetch('http://localhost:3000/posts')).json();
            setFetchedPosts(posts);
        }
        fetchPosts();
    }, [])

    const filteredItems = fetchedPosts.filter(post => {
        return post.userName.toLowerCase().includes(searchInput.toLowerCase());
    })

    return (
        <div className="home">
            <div>
                <input
                    type="text"
                    placeholder="Pretražite frizere"
                    name="search"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                />
            </div>
            {
                filteredItems.map((post, index) => (
                        <Post post={{...post}} userProps={{...props}} key={index} />
                ))
            }
        </div>
    );
}

export default Home;