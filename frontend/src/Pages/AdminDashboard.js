import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
    const [staff, setStaff] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 6; // Number of items per page

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

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };


    // Handle delete employee

    const handleDeleteEmployee = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/staff/${id}`);
            const updatedStaff = staff.filter(staffMember => staffMember._id !== id);
            setStaff(updatedStaff);
        } catch (error) {
            console.error('Error deleting employee:', error);
            // Handle error state or display an error message
        }
    };


    // Filtered staff based on search term
    const filteredStaff = staff.filter(
        (staffMember) =>
            staffMember.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            staffMember.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate the index range for current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredStaff.slice(indexOfFirstItem, indexOfLastItem);

    // Pagination - Next Page Handler
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    // Pagination - Previous Page Handler
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className={styles['report-container']}>
            <div className={styles['report-header']}>
                <h1 className={styles['recent-Articles']}>Records</h1>
                <div className={styles.dash}>
                    <Link to="/add-employee" className={styles['action-button']}>
                        Add Employee
                    </Link>
                    <input
                        type="text"
                        placeholder="Search by name or department..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={styles['search-input']}
                    />
                </div>
            </div>

            <div className={styles['report-body']}>
                <div className={styles['report-topic-heading']}>
                    <h3 className={styles['t-op']}>Name</h3>
                    <h3 className={styles['t-op']}>Department</h3>
                    <h3 className={styles['t-op']}>Internal Number</h3>
                    <h3 className={styles['t-op']}>Actions</h3>
                </div>

                <div className={styles.items}>
                    {currentItems.map((staffMember) => (
                        <div key={staffMember._id} className={styles.item1}>
                            <div className={styles['t-op-nextlvl']}>{staffMember.name}</div>
                            <div className={styles['t-op-nextlvl']}>{staffMember.department}</div>
                            <div className={styles['t-op-nextlvl']}>{staffMember.internalNumber}</div>
                            <div className={styles['actions']}>
                                <button
                                    onClick={() => handleDeleteEmployee(staffMember._id)}
                                    className={styles['delete-button']}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Buttons */}
                <div className={styles.pagination}>
                    <button onClick={prevPage} className={`${styles.paginationButton} ${styles.leftButton}`} disabled={currentPage === 1}>
                        Back
                    </button>
                    <button onClick={nextPage} className={`${styles.paginationButton} ${styles.rightButton}`} disabled={currentItems.length < itemsPerPage}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
