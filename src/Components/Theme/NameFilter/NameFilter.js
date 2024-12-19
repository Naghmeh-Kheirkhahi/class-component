
import React, {useState} from "react";


function NameFilter() {

    const [name, setName] = useState('');
    // const [filteredName, setFilteredName] = useState([]);

    const nameArray = ['Ali', 'Maryam', 'Sara', 'Mina', 'Neda', 'Leila' , 'Nima', 'Nasim' , 'Tina' , 'Sina'];
    
    // const handleSearch = () => {
        
        // const filterResult = nameArray.filter((item) => item.toLowerCase().includes(name.toLowerCase()));

        // setFilteredName(filterResult);
    // }

    const filterResult = nameArray.filter((item) => item.toLowerCase().includes(name.toLowerCase()));




    return (
        <>
            <input type="text" placeholder="Search Name" onChange={(e) => setName(e.target.value)} />
            {/* <button onClick={handleSearch}>Search</button> */}

            {/* {
                filteredName.map((item) => {
                    return <p>{item}</p>
                })
            } */}

            {
                filterResult.map((item) => {
                    return <p>{item}</p>
                    // After typing any name the filtered array will be shown and before typing, the whole array will be shown.
                })
            }

            <p>The Name I am typing: {name}</p> {/* when we type any name in the input, it will be shown */}
            <p>The Array I have: {nameArray}</p> {/* it will show the whole array */}
            <p>The Array after filtering: {filterResult}</p> {/* it will show the filtered array */}

        </>
    );
}

export default NameFilter;