import React, { useState, useEffect } from 'react';

import InputField from './InputField';
import LeasingLength from './LeasingLength';

export default function RightColumn() {
  const [info, setInfo] = useState({
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
      length: 24,
      totalPrice: 0,
    },
  });

  const totalPriceResult = (
    ((info.leasing.price -
      info.leasing.extraAllowance -
      info.leasing.residualValue) *
      1.057) /
    info.leasing.length
  )
    .toFixed(2)
    .replace(/\./g, ',');

  useEffect(() => {
    setInfo({
      ...info,
      leasing: { ...info.leasing, totalPrice: totalPriceResult },
    });
  }, [totalPriceResult]);

  console.log(info);

  return (
    <div className='right-col'>
      <InputField
        label='Bilmærke'
        subLabel='Eks. Skoda'
        type='text'
        name='car-make'
        event={(event) =>
          setInfo({
            ...info,
            car: { ...info.car, make: event.target.value },
          })
        }
      />
      <InputField
        label='Model'
        subLabel='Eks. Fabia'
        type='text'
        name='car-model'
        event={(event) =>
          setInfo({
            ...info,
            car: { ...info.car, model: event.target.value },
          })
        }
      />
      <InputField
        label='Årgang'
        subLabel='Eks. 2011'
        type='text'
        name='car-year'
        event={(event) =>
          setInfo({
            ...info,
            car: { ...info.car, year: event.target.value },
          })
        }
      />
      <InputField
        label='Anskaffelsessum'
        subLabel='Anskeffelsessummen svarer til den fulde pris på bilen'
        type='text'
        name='carPrice'
        event={(event) =>
          setInfo({
            ...info,
            leasing: { ...info.leasing, price: event.target.value },
          })
        }
        symbol='Kr.'
      />
      <InputField
        label='Ekstraordinær ydelse'
        subLabel='Den ekstraordinære ydelser er op til 20% af købsprisen'
        type='text'
        name='extra'
        event={(event) =>
          setInfo({
            ...info,
            leasing: { ...info.leasing, extraAllowance: event.target.value },
          })
        }
        symbol='Kr.'
      />
      <InputField
        label='Restværdi'
        subLabel='Restværdien er typisk 10 % af anskaffelsessummen'
        type='text'
        name='residual'
        event={(event) =>
          setInfo({
            ...info,
            leasing: { ...info.leasing, residualValue: event.target.value },
          })
        }
        symbol='Kr.'
      />
      <label>Løbetid</label>
      <p className='sub-label'>Hvor længe skal bilen leases?</p>
      <LeasingLength
        name='time'
        value={24}
        event={(event) =>
          setInfo({
            ...info,
            leasing: { ...info.leasing, length: event.target.value },
          })
        }
        checked={true}
      />
      <LeasingLength
        name='time'
        value={36}
        event={(event) =>
          setInfo({
            ...info,
            leasing: { ...info.leasing, length: event.target.value },
          })
        }
      />
      <LeasingLength
        name='time'
        value={48}
        event={(event) =>
          setInfo({
            ...info,
            leasing: { ...info.leasing, length: event.target.value },
          })
        }
      />
      <div id='total'>
        <div id='pdf'>
          <img id='pdfImg' src='./images/pdf.svg' alt='pdf' />
        </div>
        <div id='price'>
          <p className='inline'>Leasing pris / md.:</p>
          <h2 className='inline' id='totalPrice'>
            {totalPriceResult} kr.
          </h2>
        </div>
      </div>
    </div>
  );
}
