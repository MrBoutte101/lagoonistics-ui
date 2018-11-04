import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import { dataTypeCodeLookUp, dataTypes } from '../util/dataType-utils';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    paddingBottom: `${(theme.spacing.unit + 4)}px`,
    minWidth: `calc(100% - ${(theme.spacing.unit + 4) * 2}px)`,
    margin: `${theme.spacing.unit + 4}px ${(theme.spacing.unit + 4)}px 0`
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 270,
    },
  },
};

// //TODO: extract to util folder
// const dataTypes = [
//   'Dissolved Oxygen',
//   'PH',
//   'Salinty',
//   'Chlorophyll',
//   'Turbidity (NTU)',
//   'Phosphate (mg P/L)',
//   'Temperature (F)',
//   'Blue/Green Algae (ug/L)',
//   'Depth (ft)',
//   'Direction (º)',
// ];

// //TODO: extract to util folder (maybe specific to st john)
// const dataTypeCodeLookUp = dataType => {
//   switch (dataType) {
//     case 'Dissolved Oxygen':
//       return 'DISSOLVED_OXYGEN_CUR';
//     case 'PH':
//       return 'PHOSPHATE_CUR';
//     case 'Salinty':
//       return 'SALINITY_CUR';
//     case 'Turbidity (NTU)':
//       return 'TURBIDITY_CUR'
//     case 'Blue/Green Algae (ug/L)':
//     case 'Chlorophyll':
//     case 'Depth (ft)':
//     case 'Direction (º)':
//       return '';
//   }
// }

const FilterSelection = props => {
  const [dataTypeSelection, setDataTypeSelection] = useState([])
  const { classes, pluckFromStJohnSensorList, saintJohnSensors } = props;

  const handleChange = event => {
    console.log(event.target.value)
    setDataTypeSelection(event.target.value);
    pluckFromStJohnSensorList(
      saintJohnSensors,
      event.target.value.map(type => dataTypeCodeLookUp(type))
    );
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-chip">
          Filtered Data Type
        </InputLabel>
        <Select
          multiple
          value={dataTypeSelection}
          onChange={e => handleChange(e)}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
          style={{ width: '100%' }}
        >
          {dataTypes.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(FilterSelection);
