import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  const posts = [
    { author: 'Sam', timeAgo: 'Today at 4:45PM', avatar: faker.image.avatar(), content: faker.lorem.lines(2) },
    { author: 'Ana', timeAgo: 'Today at 2:00AM', avatar: faker.image.avatar(), content: faker.lorem.lines(2) },
    { author: 'Maria', timeAgo: 'Yesterday at 11:00AM', avatar: faker.image.avatar(), content: faker.lorem.lines(2) }
  ];
  return (
    <div className="ui container comments">
      {posts.map(post => {
        return (
          <ApprovalCard>
            <CommentDetail author={post.author} timeAgo={post.timeAgo} avatar={post.avatar} content={post.content} />
          </ApprovalCard>
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));