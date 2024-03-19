import React, { useState, useEffect } from 'react';
import './News.css';
import axios from 'axios';
import TextComponent from "../../components/texts_components/Text-component";
import CarouselComponent from "../../components/carousel/Carousel";
// img fixen
function News() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        setError(false);
        try {
            const response = await axios.get('src/components/constants/data.json');
            console.log(response.data);
            setPosts(response.data);
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    return (
        <div className="outer_news_Container">
            <h1>Bier Nieuws ({posts.length} items)</h1>
            <div className="text-component">
                <div className=" background">
                    <ul className="post-list">
                        {posts.map((post) => (
                            <li key={post.id}>
                                <TextComponent
                                    Text_Title={post.title}
                                    Text_Header={post.subtitle}
                                    Text_Message1={post.date}
                                    Text_Message2={post.content}
                                />
                                <div>
                                    {/*img fixen*/}
                                    <CarouselComponent
                                        src1={post.image1}
                                        alt1={post.title}
                                        src2={post.image2}
                                        alt2={post.title}
                                    />

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default News;
