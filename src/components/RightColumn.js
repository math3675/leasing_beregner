import React, { useState } from 'react';

import InputField from './InputField';
import LeasingLength from './LeasingLength';

export default function RightColumn() {
  /*   const [info, setInfo] = useState({
    person: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    },
    car: {
      make: '',
      model: '',
      year: 0,
    },
    leasing: {
      price: 0,
      extraAllowance: 0,
      residualValue: 0,
      length: 0,
      totalPrice: 0,
    },
  });

  console.log(info.car.make); */

  const [carPrice, setCarPrice] = useState(0);
  const [extra, setExtra] = useState(0);
  const [residual, setResidual] = useState(0);
  const [time, settime] = useState(24);

  console.log(carPrice);

  return (
    <div className='right-col'>
      <InputField
        label='Bilmærke'
        subLabel='Eks. Skoda'
        type='text'
        name='car-make'
        /* event={(event) =>
          setInfo({
            ...info,
            car: { make: event.target.value },
          })
        } */
      />
      <InputField
        label='Anskaffelsessum'
        subLabel='Anskeffelsessummen svarer til den fulde pris på bilen'
        type='text'
        name='carPrice'
        onChange={(event) => setCarPrice(event.target.value)}
        symbol='Kr.'
      />
      <InputField
        label='Ekstraordinær ydelse'
        subLabel='Den ekstraordinære ydelser er op til 20% af købsprisen'
        type='text'
        name='extra'
        onChange={(event) => setExtra(event.target.value)}
        symbol='Kr.'
      />
      <InputField
        label='Restværdi'
        subLabel='Restværdien er typisk 10 % af anskaffelsessummen'
        type='text'
        name='residual'
        onChange={(event) => setResidual(event.target.value)}
        symbol='Kr.'
      />
      <label>Løbetid</label>
      <p className='sub-label'>Hvor længe skal bilen leases?</p>
      <LeasingLength
        name='time'
        value={24}
        onChange={(event) => settime(event.target.value)}
        checked={true}
      />

      <LeasingLength
        name='time'
        value={36}
        onChange={(event) => settime(event.target.value)}
      />
      <LeasingLength
        name='time'
        value={48}
        onChange={(event) => settime(event.target.value)}
      />

      <div id='total'>
        <div id='pdf'>
          <img id='pdfImg' src='./images/pdf.svg' alt='pdf' />
        </div>
        <div id='price'>
          <p className='inline'>Leasing pris / md.:</p>
          <h2 className='inline' id='totalPrice'>
            {Number(
              ((carPrice - extra - residual) * 1.057) / time
            ).toLocaleString('da', {
              maximumSignificantDigits: 6,
            })}{' '}
            kr.
          </h2>
        </div>
      </div>
    </div>
  );
}
