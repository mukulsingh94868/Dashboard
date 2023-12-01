import React from 'react';
import Switch from '@mui/joy/Switch';


const SwitchButton = () => {
    const [checked, setChecked] = React.useState(false);
    return (
        <Switch
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
        />
    );
}

export default SwitchButton;