import "./Info.css";
import ReactPlayer from "react-player";
export const Info = () => {
  return (
    <div className="info">
      <h3 className="question1">
        What is <bold>Gratefulness</bold> ?
      </h3>
      <p className="question1para">
        Gratefulness is the key to a happy life that we hold in our hands,
        because if we are not grateful, then no matter how much we have we will
        not be happy — because we will always want to have something else or
        something more
      </p>
      <cite className="question1cite"> &mdash;Br. David Steindl-Rast</cite>
      <h3 className="question2">How Do We Practice Gratefulness?</h3>
      <p className="question2para">
        We cannot be grateful for all that a given moment brings us; yet, in any
        given moment, we can be grateful for something. The gift within the gift
        of any given moment is opportunity.
      </p>
      <cite className="question1cite"> &mdash;Br. David Steindl-Rast</cite>
      <ReactPlayer url="https://www.youtube.com/watch?v=SsUklExYGhw&ab_channel=SoundsTrue" />
      <h3 className="question3">Why should you write Gratitude Journal?</h3>
      <ul>
        <li className="listitem">Increases Positivity</li>
        <li className="listitem">Improves Self-Esteem</li>
        <li className="listitem">Improves Sleep</li>
        <li className="listitem">Makes you happier</li>
        <li className="listitem">Reduces Stress</li>
      </ul>
      <cite className="question1cite"> &mdash;Yoni Cohen (Happify.com)</cite>
    </div>
  );
};
