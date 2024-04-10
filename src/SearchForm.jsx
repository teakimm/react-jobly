import { useState } from "react";

/** Component for rendering search form
 *
 * State: userInput
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
        search(userInput);
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={userInput} type="text" />
            <button>Search</button>
        </form>
    </div>);
}

export default SearchForm;