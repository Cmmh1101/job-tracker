import notFound from "../assets/images/notFound.svg";

const NotFound = () => {
  return (
    <div>
      <img src={notFound} alt="Not found" className="img not-Found" />
    </div>
  );
};

export default NotFound;
