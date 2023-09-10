import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./Search.css";
import notification from "../../../Utils/Notification";

function Search(): JSX.Element {

    const[textToSearch, setTextToSearch]= useState<string>("");

    function handleChange(args: ChangeEvent<HTMLInputElement>): void{
        const value = args.target.value;
        setTextToSearch(value);
    }

    function searchItem(): void {
        notification.success(textToSearch);
        setTextToSearch("");
    }
    return (
        <div className="Search">
			<label>Search something:</label>
            <input type="search" onChange={handleChange} value={textToSearch}/>
            <button onClick={searchItem}>🔎</button>
            <span>{textToSearch}</span>
        </div>
    );
}

export default Search;
