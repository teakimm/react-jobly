import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

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
    const [firstRender, setFirstRender] = useState(true);

    const debouncedSearch = useCallback(debounce(search, 200), []);

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
        } else {
            debouncedSearch(userInput.trim());
        }
    }, [userInput]);

    function handleChange(evt) {
        setUserInput(evt.target.value);
    }

    return (<div style={{ width: "100%" }}>
        <form>
            <input className="form-control" onChange={handleChange} value={userInput} type="text" placeholder="Enter search term" />
        </form>
    </div>);
}

export default SearchForm;