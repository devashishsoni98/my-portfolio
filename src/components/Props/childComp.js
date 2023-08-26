import "./childComp.css";
function ChildComp(props) {
  console.log(props);
  return (
    <>
      <div class="card">
        <img src={props.imageSrc} alt="Avatar" />
        <div class="container">
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>{props.message}</p>
        </div>
      </div>
    </>
  );
}
export default ChildComp;
