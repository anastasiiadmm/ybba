import React, {useState, useEffect} from 'react';
import FormField from '../../../Components/FormField/FormField';
import PropTypes from 'prop-types';


const SpeechCardTable = (props) => {

    const {
        onChange, tableData, initData
    } = props

    const initialData = Object.keys(initData).length ? initData : {
        in_isolation: {},
        in_words: {},
        in_spontaneous_speech: {}
    }

    const [data, setData] = useState(initialData)

    const checkboxChangeHandler = (row, column) => () => {
        const newData = {...data, [row]: {...data[row], [column]: data[row][column] === 1 ? 0 : 1}}
        setData(newData)
        onChange(newData)
    }

    useEffect(() => {
        console.log(initData)
        if (!Object.keys(initData).length) {
            let newData = {...initialData}
            Object.keys(initialData).forEach(rowName => {
                Object.keys(tableData).forEach(columnName => {
                    newData[rowName][columnName] = 0
                })
            })
            setData(newData)
            onChange(newData)
        }
    }, [])

    return (
        <table>
            <tr>
                <th/>
                {Object.values(tableData).map(letter => {
                    return (
                        <th>
                            {letter}
                        </th>
                    )
                })}
            </tr>
            {Object.keys(initialData).map((rowName, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        {Object.keys(tableData).map(columnItem => {
                            return (
                                <td>
                                    <FormField
                                        type='checkbox'
                                        onChange={checkboxChangeHandler(rowName, columnItem)}
                                        value={data[rowName][columnItem]}
                                        id={`SpeechTableOne/${rowName}/${columnItem}`}
                                    />
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </table>
    );
}

SpeechCardTable.propTypes = {
    onChange: PropTypes.func,
    tableData: PropTypes.object.isRequired,
    initData: PropTypes.object
}

export default SpeechCardTable;