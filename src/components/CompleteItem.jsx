import PropTypes from "prop-types";
import TextFormatter from "./Formatters";
import RandomQuote from "./RandomQuotes";
import { useMemo } from "react";

function CompleteItem({ item }) {
  // Stores the quote as a variable so it isn't constantly updated on user input
  const quote = useMemo(() => <RandomQuote/>, []);
  
    return (
        <div className="card">
            <TextFormatter title={item.job} desc={item.desc}/>
            {quote}
        </div>
    );
  }

  CompleteItem.propTypes = {
    // Prop validation for an array of objects array(object({key:type}))
    item: PropTypes.shape({
      job: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      pri: PropTypes.string.isRequired,
      edit: PropTypes.bool,
    }).isRequired,
    index: PropTypes.number.isRequired,
  };
  
  export default CompleteItem;