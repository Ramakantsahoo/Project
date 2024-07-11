import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const [staff, setStaff] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 6; 

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/staff');
                setStaff(response.data);
            } catch (error) {
                console.error('Error fetching staff data:', error);
            }
        };

        fetchStaff();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const filteredStaff = staff.filter(
        (staffMember) =>
            staffMember.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            staffMember.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredStaff.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const startIndex = indexOfFirstItem + 1;
    const endIndex = indexOfLastItem > filteredStaff.length ? filteredStaff.length : indexOfLastItem;
    const totalItems = filteredStaff.length;

    return (
        <div className={styles['report-container']}>
            <div className={styles['report-header']}>
                <h1 className={styles['recent-Articles']}>Records</h1>
                <div className={styles.dash}>
                    <div className={styles['search-container']}>
                        <input
                            type="text"
                            placeholder="Search by name or department..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className={styles['search-input']}
                        />
                    </div>
                </div>
            </div>

            <div className={styles['report-body']}>
                <div className={styles['report-topic-heading']}>
                    <h3 className={styles['t-op']}>Name</h3>
                    <h3 className={styles['t-op']}>Department</h3>
                    <h3 className={styles['t-op']}>Internal Number</h3>
                </div>

                <div className={styles.items}>
                    {currentItems.map((staffMember) => (
                        <div key={staffMember._id} className={styles.item1}>
                            <h3 className={styles['t-op-nextlvl']}>{staffMember.name}</h3>
                            <h3 className={styles['t-op-nextlvl']}>{staffMember.department}</h3>
                            <h3 className={styles['t-op-nextlvl']}>{staffMember.internalNumber}</h3>
                        </div>
                    ))}
                </div>

                <div className={styles.pagination}>
                    <button
                        onClick={prevPage}
                        className={`${styles.paginationButton} ${styles.leftButton} ${currentPage === 1 ? styles.transparent : ''}`}
                        disabled={currentPage === 1}
                    >
                        Back
                    </button>
                    <span className={styles.paginationInfo}>
                        {startIndex} - {endIndex} of {totalItems} results
                    </span>
                    <button
                        onClick={nextPage}
                        className={`${styles.paginationButton} ${styles.rightButton} ${currentItems.length < itemsPerPage ? styles.transparent : ''}`}
                        disabled={currentItems.length < itemsPerPage}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
