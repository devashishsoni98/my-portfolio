import ChildComp from "./childComp";

function Parentcomp() {
  const myCardsData = [
    {
      name: "abc",
      title: "dev",
      message: "this is a message",
      imageSrc:
        "data:image/jpeg;base64,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",
    },
    {
      name: "abc",
      title: "dev",
      message: "this is a message",
      imageSrc:
        "data:image/jpeg;base64,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",
    },
    { name: "abc", title: "dev", message: "this is a message", imageSrc: "" },
    { name: "abc", title: "dev", message: "this is a message" },
    { name: "abc", title: "dev", message: "this is a message" },
  ];

  return (
    <>
      {myCardsData.map((oneObj) => {
        return (
          <ChildComp
            name={oneObj.name}
            message={oneObj.message}
            title={oneObj.title}
            imageSrc={oneObj.imageSrc}
          />
        );
      })}
    </>
  );
}
export default Parentcomp;
