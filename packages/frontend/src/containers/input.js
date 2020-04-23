import React, {memo} from "react";

const Input = memo(({allSelected,onToggleAll}) => {
    console.log('INPUT RERENDER');
    console.log(allSelected);
    return <input
        id="toggle-all"
        type="checkbox"
        className="toggle-all"
        checked={allSelected}
        onChange={onToggleAll}
    />
});
export default Input;
