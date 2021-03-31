import React from 'react';
import { SelectItem } from '../../styles/components/DropdownList';

const DropdownList = props => {
    return (
        <SelectItem onChange={props.onChange} >
            <option> -- Selecionar -- </option>
            {props.options.map((option, index) =>
                <option key={index} value={option.value} onChange={props.change}> {option.name} </option>
            )}
        </SelectItem>
    );
}

export default DropdownList;