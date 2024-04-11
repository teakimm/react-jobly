import { useState } from "react";

/** Component for rendering search form
 *
 * State: userInput (string)
 * Props:
 *  handleSubmit -> function to call when user submits form
 *
 * JobsPage, CompaniesPage -> SearchForm
*/
function SearchForm({ initialInput = "", search }) {
    const [userInput, setUserInput] = useState(initialInput);

    function handleChange(evt) {
        setUserInput(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        setUserInput(userInput.trim());
        search(userInput.trim());
    }

    return (<div style={{ width: "100%" }}>
        <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control" onChange={handleChange} value={userInput} type="text" placeholder="Enter search term" />
            <button className="btn btn-light mx-2">Search</button>
        </form>
    </div>);
}

export default SearchForm;