import "./Title.css";

export const Title = (props) => {
  const { title, greeting, children } = props;

  console.log("Title props:", props);

  return (
    <div style={{ backgroundColor: title === "buna" ? "blue" : "purple" }}>
      <h1 className="title">
        Titlul este {title} and {greeting}
      </h1>
      {children}
    </div>
  );
};
