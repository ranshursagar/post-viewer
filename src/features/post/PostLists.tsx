import { useGetPostsQuery } from '../../app/api/apiSlice';
import { Link } from 'react-router-dom';

export const PostsList = () => {
    const { data: posts, isLoading, isError, error } = useGetPostsQuery();

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p>Error: {JSON.stringify(error)}</p>;

    return (
        <ul>
            {posts?.map((post) => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body.substring(0, 100)}...</p>
                    <Link to={`/post/${post.id}`}>View Details</Link>
                </li>
            ))}
        </ul>
    );
};