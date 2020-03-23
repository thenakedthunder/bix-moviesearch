import React, { KeyboardEvent, ChangeEvent, MouseEvent } from "react";
import { TextField, SvgIcon, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


type SearchBoxProps = {
    onSearchButtonCallback: (searchedText: String) => void
}

export default function SearchBox(props: SearchBoxProps) {
    const [value, setValue] = React.useState("")


    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        props.onSearchButtonCallback(value)
    }

    return (
        <div>
            <form autoComplete="off">
                <TextField
                    id="search-input"
                    label="Type in the title of the movie"
                    variant="outlined"
                    value={value}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SearchIcon>search</SearchIcon>}
                    onClick={handleClick}
                >
                    Search
                </Button>
            </form>
        </div>
    )
}