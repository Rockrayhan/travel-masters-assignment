import React from 'react';

const RecentPosts = () => {
  const posts = [
    { id: 1, title: 'Post Title 1', excerpt: 'This is a short excerpt of the post...' },
    { id: 2, title: 'Post Title 2', excerpt: 'This is a short excerpt of the post...' },
    { id: 3, title: 'Post Title 3', excerpt: 'This is a short excerpt of the post...' },
  ];

  return (
    <div className="p-6 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
