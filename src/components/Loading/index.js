import Loader from 'react-loader-spinner';
const LoadingComponent = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '55%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Loader type="ThreeDots" color="#CCC" height={30} />{' '}
    </div>
  );
};
export default LoadingComponent;
