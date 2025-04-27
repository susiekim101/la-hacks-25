import "../css/button.css";

function MatchButton() {
  const handleSendEmail = () => {
    window.location.href =
      "mailto:exampleemail@gmail.com?subject=Invitation&body=Join me!";
  };

  return (
    <button onClick={handleSendEmail} className="button">
      <span className="button-text">match</span>
    </button>
  );
}

export default MatchButton;
