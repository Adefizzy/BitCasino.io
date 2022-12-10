const getMoneyFormat = (amount : number) => {
    return  `${
      amount?.toLocaleString('en-US', { style: 'currency', currency: 'EUR' }) ?? 0
    }`;
  };
  
  export default getMoneyFormat;