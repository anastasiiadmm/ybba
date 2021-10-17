import {sha256} from 'js-sha256';
import axios from 'axios';

import config from '../../config';
import {toQueryParams} from '../url/toQueryParams';


export const generateHash = ({userId, sum}) => {
    const password = config.robocassa_password
    const invId = 0 // always should 0 because robokassa is strange !!!
    const signatureFormula = `${sum}:${invId}:${password}:shp_user_id=${userId}`

    return sha256(signatureFormula).toUpperCase()
}

export const sendTestRequest = async ({userId, email, signature, incSum, outSum, fee}) => {
    const query = toQueryParams({
        'shp_user_id': userId,
        'EMail': email,
        'SignatureValue': signature,
        'IncCurrLabel': 'test',
        'IncSum': incSum,
        'inv_id': '0',
        'PaymentMethod': 'test',
        'OutSum': outSum,
        'Fee': fee
    })
    await axios.get('http://172.29.77.24:8000/api/v1/payments/result/' + query)
}