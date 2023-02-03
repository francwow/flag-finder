const DarkMode = () => {
  const darkModeHandle = () => {
    const btnContainer = document.querySelector(".btn-container");
    const body = document.body;

    const superToggle = (element, class0, class1) => {
      element.classList.toggle(class0);
      element.classList.toggle(class1);
    };

    superToggle(btnContainer, "flex-end");
    superToggle(body, "lightMode", "darkMode");
  };

  return (
    <div className="btn-container">
      <button onClick={darkModeHandle} className="darkMode-btn"></button>
    </div>
  );
};

export default DarkMode;
