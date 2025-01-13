import PropTypes from "prop-types";
import TextFormatter from "./Formatters";
import RandomQuote from "./RandomQuotes";

function CompleteItem({ item }) {
    return (
        <div className="card">
            <TextFormatter title={item.job} desc={item.desc}/>
            <RandomQuote/>
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