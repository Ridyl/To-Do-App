import PropTypes from "prop-types";
import TextFormatter from "./Formatters";

function CompleteItem({ item, index }) {
    return (
      <div key={index} id='todo-cards' className={item.pri}>
        <TextFormatter title={item.job} desc={item.desc}/>
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