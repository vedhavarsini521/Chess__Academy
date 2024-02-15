import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Adminlearnpage.css';
import Asidebar from '../components/Asidebar';

function Adminlearn() {
    const [searchTerm, setSearchTerm] = useState('');
    const [academies, setAcademies] = useState([]);

    useEffect(() => {
        const fetchAcademies = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/academies');
                if (response.ok) {
                    const data = await response.json();
                    setAcademies(data);
                } else {
                    console.error('Failed to fetch academies');
                }
            } catch (error) {
                console.error('Error fetching academies:', error);
            }
        };

        fetchAcademies();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredAcademies = academies.filter((academy) =>
        academy.academyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='lcourses'>
            <Asidebar />
            <div className='lcour5'>
                <div className='lsearch-bar'>
                    <div className='lsearchbar1'>
                        <input
                            type='text'
                            placeholder='Search...'
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className='lsearchbar2'>
                        <FontAwesomeIcon className='lsearfont' icon={faSearch} />
                    </div>
                </div>
                <div className="lcourses-container">
                    {filteredAcademies.reduce((rows, academy, index) => {
                        const chunkIndex = Math.floor(index / 3);

                        if (!rows[chunkIndex]) {
                            rows[chunkIndex] = [];
                        }

                        rows[chunkIndex].push(academy);
                        return rows;
                    }, []).map((row, rowIndex) => (
                        <div key={rowIndex} className="academy-row">
                            {row.map((academy) => (
                                <div key={academy.academyId} className='lcour2'>
                                    <div className='lcour3'>
                                        <div className='lcour4'>
                                            <div className='lcou1'>
                                                <div className='lcou2'>
                                                    <img src={academy.imageUrl} alt='academy' />
                                                </div>
                                                <div className='lcou3'>
                                                    <h2>{academy.academyName}</h2><br></br>
                                                </div>
                                            </div>
                                            <a href={`/admcour/${academy.academyId}`}><button>More Info</button></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Adminlearn;


























// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import '../assets/css/Adminlearnpage.css';
// import Asidebar from '../components/Asidebar';

// function Adminlearn() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [academies, setAcademies] = useState([]);

//     useEffect(() => {
//       const fetchAcademies = async () => {
//         try {
//           const response = await fetch('http://localhost:8081/api/academies');
//           if (response.ok) {
//             const data = await response.json();
//             setAcademies(data);
//           } else {
//             console.error('Failed to fetch academies');
//           }
//         } catch (error) {
//           console.error('Error fetching academies:', error);
//         }
//       };
  
//       fetchAcademies();
//     }, []);

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const filteredAcademies = academies.filter((academy) =>
//         academy.academyName.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className='lcourses'>
//             <Asidebar />
//             <div className='lcour5'>
//                 <div className='lsearch-bar'>
//                     <div className='lsearchbar1'>
//                         <input
//                             type='text'
//                             placeholder='Search...'
//                             value={searchTerm}
//                             onChange={handleSearchChange}
//                         />
//                     </div>
//                     <div className='lsearchbar2'>
//                         <FontAwesomeIcon className='lsearfont' icon={faSearch} />
//                     </div>
//                 </div>
//                 <div className="lcourses-container">
//                     {filteredAcademies.map((academy) => (
//                         <div key={academy.academyId} className='lcour2'>
//                             <div className='lcour3'>
//                                 <div className='lcour4'>
//                                     <div className='lcou1'>
//                                         <div className='lcou2'>
//                                             <img src={academy.imageUrl} alt='academy'></img>
//                                         </div>
//                                         <div className='lcou3'>
//                                             <h2>{academy.academyName}</h2><br></br>
//                                         </div>
//                                     </div>
//                                     <a href={`/admcour/${academy.academyId}`}><button>More Info</button></a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Adminlearn;




















