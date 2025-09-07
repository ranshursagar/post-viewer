import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../../app/api/apiSlice';

export const PostDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: post, isLoading, isError, error } = useGetPostQuery(Number(id));

    if (isLoading) return <p>Loading post...</p>;
    if (isError) return <p>Error: {JSON.stringify(error)}</p>;

    return (
        <div>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    );
};