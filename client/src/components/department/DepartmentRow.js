import React from 'react';
import dateFormatter from '../../formatters/dateFormatter';
import personFormat from '../../formatters/personFormatter';
import currencyFormatter from '../../formatters/currencyFormatter';

const DepartmentRow = ({department, user, onSaveClick, onDetailsClick, onDeleteClick}) => {
    let instructor = department.instructor;

    let fullName = instructor ?
        personFormat.fullName(instructor.firstName, instructor.lastName) : '';

    let startDateDisplay = dateFormatter.date(department.startDate);
    let budgetDisplay = currencyFormatter.money(department.budget);

    let display = 'display-none';

    if(user.id === department.userId) {
        display = '';
    }

    return (
        <tr>
            <td>{department.name}</td>
            <td>{budgetDisplay}</td>
            <td>{startDateDisplay}</td>
            <td>{fullName}</td>
            <td className="tools">
                <a href="#" onClick={onSaveClick} className={display}><i className="fa fa-pencil fa-lg"></i></a>
                
                <a href="#" onClick={onDetailsClick}><i className="fa fa-info fa-lg"></i></a>

                <a href="#" onClick={onDeleteClick} className={display}><i className="fa fa-trash-o fa-lg"></i></a>
            </td>
        </tr>
    );
};

DepartmentRow.propTypes = {
    department: React.PropTypes.object.isRequired,
    user: React.PropTypes.object.isRequired,
    onSaveClick: React.PropTypes.func.isRequired,
    onDetailsClick: React.PropTypes.func.isRequired,
    onDeleteClick: React.PropTypes.func.isRequired
};

export default DepartmentRow;