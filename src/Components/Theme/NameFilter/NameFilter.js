
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
                })
            }
        </>
    );
}

export default NameFilter;