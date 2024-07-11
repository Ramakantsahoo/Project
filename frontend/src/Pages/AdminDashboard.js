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

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };

    const handleDeleteEmployee = async (id) => {
        try {
            // await axios.delete(`http://localhost:5000/api/staff/${id}`);
            const updatedStaff = staff.filter(staffMember => staffMember._id !== id);
            setStaff(updatedStaff);
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
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

                {/* Pagination Info and Buttons */}
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

export default AdminDashboard;
