import { sha256 } from 'js-sha256';

import config from '../../config';
import { toQueryParams } from '../url/toQueryParams';
import axiosApi from '../../axios';


export const generateHash = ({ userId, email, phone, sum }) => {
    const password = config.robocassa_password
    const invId = 0 // always should 0 because robokassa is strange !!!
    const signatureFormula = `${sum}:${invId}:${password}:shp_user_full_name=${userId}:shp_user_email=${email}:shp_user_phone_number=${phone}`

    return sha256(signatureFormula).toUpperCase()
}

export const sendTestRequest = async ({ userId, email, signature, incSum, outSum, fee }) => {
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
    await axiosApi.get('http://172.29.77.24:8000/api/v1/payments/result/' + query)
}