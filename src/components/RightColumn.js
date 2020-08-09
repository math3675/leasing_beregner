import React, { useState } from 'react';

import InputField from './InputField';
import LeasingLength from './LeasingLength';

export default function RightColumn() {
  const [carPrice, setCarPrice] = useState(0);
  const [extra, setExtra] = useState(0);
  const [residual, setResidual] = useState(0);
  const [time, settime] = useState(24);

  return (
    <div className='right-col'>
      <InputField
        label='Anskaffelsessum'
        subLabel='Anskeffelsessummen svarer til den fulde pris på bilen'
        type='text'
        name='carPrice'
        event={(event) => setCarPrice(event.target.value)}
      />
      <InputField
        label='Ekstraordinær ydelse'
        subLabel='Den ekstraordinære ydelser er op til 20% af købsprisen'
        type='text'
        name='extra'
        event={(event) => setExtra(event.target.value)}
      />
      <InputField
        label='Restværdi'
        subLabel='Restværdien er typisk 10 % af anskaffelsessummen'
        type='text'
        name='residual'
        event={(event) => setResidual(event.target.value)}
      />
      <label>Løbetid</label>
      <p className='sub-label'>Hvor længe skal bilen leases?</p>
      <LeasingLength
        name='time'
        value={24}
        event={(event) => settime(event.target.value)}
        checked={true}
      />

      <LeasingLength
        name='time'
        value={36}
        event={(event) => settime(event.target.value)}
      />
      <LeasingLength
        name='time'
        value={48}
        event={(event) => settime(event.target.value)}
      />

      <div id='total'>
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

      <div id='pdf'>
        Download PDF <img id='pdfImg' src='./images/pdf.svg' alt='pdf' />
      </div>
    </div>
  );
}
