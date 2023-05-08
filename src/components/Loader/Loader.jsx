import { Comment } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        margin: '40px auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#5736a3"
      />
      ;
    </div>
  );
};
