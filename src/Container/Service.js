import React from 'react';

import axios from 'axios';

const url = ('http://10.0.2.2:8080/customer/list')

export function getCustomer() {
    return axios.get(url)
}