import React from 'react'
import RecentPostData from '../../jsonData/RecentPostData.json'
import SingleRecentPost from './SingleRecentPost';

const RecentPostWidget = () => {
    return (
        <>
            <div className="sidebar-item recent-post">
                <h4 className="title">Recent Post</h4>
                <ul>
                    {RecentPostData.map(post =>
                        <SingleRecentPost post={post} key={post.id} />
                    )}
                </ul>
            </div>
        </>
    );
};

export default RecentPostWidget;